import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, tap } from 'rxjs';
import { IFilm } from 'src/core/models/film.interface';
import { IPeople } from 'src/core/models/people.interface';
import { IPlanet } from 'src/core/models/planet.interface';
import { FilmsService } from 'src/core/services/films/films.service';
import { PeopleService } from 'src/core/services/people/people.service';
import { PlanetsService } from 'src/core/services/planets/planets.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  character: IPeople;
  films: IFilm[];
  homeworld: IPlanet;
  loading = false;
  constructor(
    private peopleService: PeopleService,
    private filmsService: FilmsService,
    private planetsService: PlanetsService,
    private activateRouter: ActivatedRoute
  ) {
    this.activateRouter.paramMap.subscribe((params) => {
      this.getCharacterInformation(params['params']['id']);
    });
  }

  ngOnInit(): void {}

  getCharacterInformation(id: string) {
    this.loading = true;
    const getAllInformation$ = [
      this.peopleService.getCharacter(id),
      this.filmsService.getAllfilms(),
    ];

    const characterInformation$ = forkJoin(getAllInformation$).subscribe(
      (response: any) => {

        this.character = response[0];
        const characterFilms = this.character.films.map(
          (film) =>
            +film.split('https://swapi.dev/api/films/')[1].replace('/', '')
        );
        this.films = response[1].results.filter((film) =>
          characterFilms.includes(film.episode_id)
        );
        const characterHomeworld = this.character.homeworld
          .split('https://swapi.dev/api/planets/')[1]
          .replace('/', '');
        this.loading = false
        this.getHomeworld(characterHomeworld);
      }
    );
  }

  getHomeworld(id: string) {
    this.loading = true
    this.planetsService.getPlanet(id).subscribe((response) => {
      this.homeworld = response;
      this.loading = false
    });
  }
}
