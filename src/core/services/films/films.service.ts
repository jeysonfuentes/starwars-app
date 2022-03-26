import { Injectable } from '@angular/core';
import { IFilm } from 'src/core/models/film.interface';
import { ApiService } from '../api/api.service';
import { RequestTypes } from '../api/models/EnumRequestTypes';
import { IUrlOptions } from '../api/models/IUrlOptions';
import { IResponseAPI } from '../api/models/service-api.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  urlBase: string = 'films';
  urlOptions: IUrlOptions = <IUrlOptions>{};
  constructor(private apiService: ApiService) {}

  getAllfilms() {
    this.urlOptions.url = `${this.urlBase}`;
    return this.apiService.Request<IResponseAPI<IFilm>>(
      RequestTypes.get,
      this.urlOptions
    );
  }

  getfilm(id: string) {
    this.urlOptions.url = `${this.urlBase}/${id}`;
    return this.apiService.Request<IFilm>(
      RequestTypes.get,
      this.urlOptions
    );
  }
}
