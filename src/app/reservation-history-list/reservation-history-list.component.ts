import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import {ReservationHistory} from '../models/reservationhistory.model'
import { HttpService } from '../http.service';
import { Guest } from '../models/guest.model';
import { Room } from '../models/room.model';

@Component({
  selector: 'app-reservation-history-list',
  templateUrl: './reservation-history-list.component.html',
  styleUrls: ['./reservation-history-list.component.css']
})
export class ReservationHistoryListComponent implements OnInit {

  public reservationHistoryItems: ReservationHistory[];
  public guests: Guest[];
  public rooms: Room[];

  constructor(private httpService: HttpService) { 

  }

  public getHistoryReservations = () => {
    let route: string = 'https://localhost:44343/api/ReservationHistories';
    this.httpService.getData(route)
      .subscribe((result) => {
        this.reservationHistoryItems = result as ReservationHistory[];
        
      },
        (error) => {
          console.error(error);
        });

  }

  public getGuests = () => {
    let route: string = 'https://localhost:44343/api/Guests';
    this.httpService.getData(route)
      .subscribe((result) => {
        this.guests = result as Guest[];
      },
        (error) => {
          console.error(error);
        });
  }
  public getRooms = () => {
    let route: string = 'https://localhost:44343/api/Rooms';
    this.httpService.getData(route)
      .subscribe((result) => {
        this.rooms = result as Room[];
      },
        (error) => {
          console.error(error);
        });
  }

  ngOnInit(): void {

    this.getHistoryReservations();
    this.getGuests();
    this.getRooms();
    
  }

}
