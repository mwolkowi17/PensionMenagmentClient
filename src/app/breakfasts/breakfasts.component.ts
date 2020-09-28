import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { Guest } from '../models/guest.model';
import { Room } from '../models/room.model';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-breakfasts',
  templateUrl: './breakfasts.component.html',
  styleUrls: ['./breakfasts.component.css']
})
export class BreakfastsComponent implements OnInit {

  public reservations: Reservation[];
  public guests: Guest[];
  public rooms: Room[];
  public breakfastlist : Reservation[];

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

  public getBreakfasts=()=>{

    
  }

  ngOnInit(): void {
    this.getReservations();
    this.getGuests();
    this.getRooms();
  }

}
