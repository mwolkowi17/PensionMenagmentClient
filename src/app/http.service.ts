import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Guest} from './models/guest.model'
import { Reservation } from './models/reservation.model';

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

  public removeGuest=(route: string) => {
    return this.httpService.delete(route)
  }

  public addReservation = (route: string, body: Reservation) => {
    return this.httpService.post(route, body)
  }
}
