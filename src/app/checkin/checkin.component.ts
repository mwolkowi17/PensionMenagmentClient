import { Component, OnInit } from '@angular/core';
import { Room } from '../models/room.model'
import { Reservation } from '../models/reservation.model'
import { HttpService } from '../http.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})

export class CheckinComponent implements OnInit {

  public reservations: Reservation[];
  public rooms: Room[];
  public roomadd: Boolean;
  public roomnumberselected: number;

  constructor(private httpService: HttpService) {
    this.roomadd = false;
  }

  public getReservations = () => {
    let route: string = 'https://localhost:44343/api/Checkin';
    this.httpService.getData(route)
      .subscribe((result) => {
        this.reservations = result as Reservation[];

      },
        (error) => {
          console.error(error);
        });


  }

  public getRooms = () => {
    let route: string = 'https://localhost:44343/api/Checkin/getroomsoccupied';
    this.httpService.getData(route)
      .subscribe((result) => {
        this.rooms = result as Room[];

      },
        (error) => {
          console.error(error);
        });
  }

  public addReservationToRoom=(roomnumber: number)=>{
    this.roomadd=true;
    console.log(roomnumber);
    this.roomnumberselected=roomnumber;
  }

  ngOnInit(): void {
    this.getReservations();
    this.getRooms();
  }

}
