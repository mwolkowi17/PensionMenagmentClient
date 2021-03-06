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
  public breakfastlist: Room[];
  public roomstodisplay: Room[];

  constructor(private httpService: HttpService) {
    this.breakfastlist=new Array;
  }

  public getReservations = () => {
    let route: string = 'https://localhost:44343/api/Reservations';
    this.httpService.getData(route)
      .subscribe((result) => {
        this.reservations = result as Reservation[];
        console.log(this.reservations);
        this.getBreakfasts();

      },
        (error) => {
          console.error(error);
        });

  }

  public getRoomstodisplay = () => {
    let route: string = 'https://localhost:44343/api/Checkout';
    this.httpService.getData(route)
      .subscribe((result) => {
        this.roomstodisplay = result as Room[];
        this.getBreakfasts();
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

  public getBreakfasts = () => {
    let n: number;
    for (n = 0; n < this.roomstodisplay.length; n++) {
      //console.log(this.reservations[n].breakfestIncluded)
      if (this.roomstodisplay[n].is_ocuppied=== true/*&&this.reservations[n].Room.Is_ocuppied===true*/) {
       
        
        this.breakfastlist.push(this.roomstodisplay[n]);
      }
     
    }
    console.log(this.breakfastlist);
  }

  ngOnInit(): void {
    //this.getReservations();
    this.getRoomstodisplay();
    this.getGuests();
    this.getRooms();

  }

}
