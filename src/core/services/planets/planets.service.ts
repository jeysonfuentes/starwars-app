import { Injectable } from '@angular/core';
import { IPlanet } from 'src/core/models/planet.interface';
import { ApiService } from '../api/api.service';
import { RequestTypes } from '../api/models/EnumRequestTypes';
import { IUrlOptions } from '../api/models/IUrlOptions';
import { IResponseAPI } from '../api/models/service-api.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  urlBase: string = 'planets';
  urlOptions: IUrlOptions = <IUrlOptions>{};
  constructor(private apiService: ApiService) {}

  getAllPlanets() {
    this.urlOptions.url = `${this.urlBase}`;
    return this.apiService.Request<IResponseAPI<IPlanet>>(
      RequestTypes.get,
      this.urlOptions
    );
  }

  getPlanet(id: string) {
    this.urlOptions.url = `${this.urlBase}/${id}`;
    return this.apiService.Request<IPlanet>(
      RequestTypes.get,
      this.urlOptions
    );
  }
}
