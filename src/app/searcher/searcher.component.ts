import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPeople } from 'src/core/models/people.interface';
import { IResponseAPI } from 'src/core/services/api/models/service-api.interface';
import { PeopleService } from 'src/core/services/people/people.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
})
export class SearcherComponent implements OnInit {
  characters: IPeople[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  totalResults: number = 0;
  query: string = '';
  pageBy: number = 10;
  resultText: string = '';
  loading = false;
  constructor(private peopleService: PeopleService, private router: Router) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.loading = true;
    this.peopleService
      .getFilterCharacters(this.query.trim(), this.currentPage)
      .subscribe(({ results, count }: IResponseAPI<IPeople>) => {
        this.loading = false;
        this.characters = results;
        this.totalResults = count;
        this.resultText =
        this.query.trim().length > 0
            ? `Found ${count} result(s) for "${this.query}"`
            : `Found ${count} characters`;
        this.totalPages =
          count % this.pageBy > 0
            ? count / this.pageBy + 1
            : count / this.pageBy;

      });
  }

  search() {
    this.currentPage = 1;
    this.getCharacters();
  }

  goToCharacter(character: IPeople) {
    const id = character.url
      .split('https://swapi.dev/api/people/')[1]
      .replace('/', '');
    this.router.navigate(['/character', id]);
  }

  changePage(page) {
    this.currentPage = page;
    this.getCharacters();
  }
}
