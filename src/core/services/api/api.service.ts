import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestTypes } from './models/EnumRequestTypes';
import { IUrlOptions } from './models/IUrlOptions';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private host: string;
  constructor(private http: HttpClient) {
    this.host = API_URL;
  }

  private urlConstructor(urlOptions: IUrlOptions) {
    return `${this.host}/${urlOptions.url}`;
  }

  public Request<T>(
    requestType: RequestTypes,
    urlOptions: IUrlOptions,
    body?: any,
    options?: any
  ): Observable<T> {
    // T specifies a generic output of function
    let response: Observable<T>;
    // True in case of post, put and patch
    if (body && options) {
      response = this.http[RequestTypes[requestType]](
        this.urlConstructor(urlOptions),
        body,
        options
      );


    } else if (body) {
      // True in case of post, put and patch if options is empty
      response = this.http[RequestTypes[requestType]](
        this.urlConstructor(urlOptions),
        body
      );
    } else if (options) {
      // True in case of get, delete, head and options
      response = this.http[RequestTypes[requestType]](
        this.urlConstructor(urlOptions),
        options
      );
    } else {
      response = this.http[RequestTypes[requestType]](
        this.urlConstructor(urlOptions)
      );
    }

    return response;
  }
}
