import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {Reservation} from '../models/reservation.model';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  public reservations: Reservation[];

  constructor(private httpService: HttpService) {
    
   }

  public getReservations = () => {
    let route: string = 'https://localhost:44343/api/Reservations';
    this.httpService.getData(route)
      .subscribe((result) => {
        this.reservations = result as Reservation[];
      },
        (error) => {
          console.error(error);
        });
       
  }

  ngOnInit(): void {
    this.getReservations();
    
  }

}
