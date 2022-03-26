import { Component, Input } from '@angular/core';
import { IFilm } from 'src/core/models/film.interface';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent {
  @Input() film: IFilm;
}
