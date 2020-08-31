import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Guest} from './models/guest.model'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpService: HttpClient) { }

  public getData = (route: string) => {
    return this.httpService.get(route);
  }

  public addGuest = (route: string, body: Guest) => {
    return this.httpService.post(route, body);
  }
}
