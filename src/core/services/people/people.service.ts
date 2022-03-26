import { Injectable } from '@angular/core';
import { IPeople } from 'src/core/models/people.interface';
import { ApiService } from '../api/api.service';
import { RequestTypes } from '../api/models/EnumRequestTypes';
import { IUrlOptions } from '../api/models/IUrlOptions';
import { IResponseAPI } from '../api/models/service-api.interface';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  urlBase: string = 'people';
  urlOptions: IUrlOptions = <IUrlOptions>{};
  constructor(private apiService: ApiService) {}

  getFilterCharacters(query: string, page: number = 1) {
    this.urlOptions.url = `${this.urlBase}?page=${page}&search=${query}`;
    return this.apiService.Request<IResponseAPI<IPeople>>(
      RequestTypes.get,
      this.urlOptions
    );
  }

  getCharacter(id: string) {
    this.urlOptions.url = `${this.urlBase}/${id}`;
    return this.apiService.Request<IPeople>(
      RequestTypes.get,
      this.urlOptions
    );
  }
}
