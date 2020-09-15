import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-reservation-history-list',
  templateUrl: './reservation-history-list.component.html',
  styleUrls: ['./reservation-history-list.component.css']
})
export class ReservationHistoryListComponent implements OnInit {

  public reservationHistoryItems: Reservation[];
  //need a new model - not Reservation type!!!

  constructor(private httpService: HttpService) { 

  }

  public getHistoryReservations = () => {
    let route: string = 'https://localhost:44343/api/ReservationHistories';
    this.httpService.getData(route)
      .subscribe((result) => {
        this.reservationHistoryItems = result as Reservation[];
        
      },
        (error) => {
          console.error(error);
        });

  }
  ngOnInit(): void {

    this.getHistoryReservations()
    
  }

}
