import { Component, OnInit } from '@angular/core';
import { Room } from '../models/room.model';
import { Guest } from '../models/guest.model';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public roomstodisplay: Room[];
  public guests: Guest[];

  constructor(private httpService: HttpService) {

  }

  public getRoomstodisplay = () => {
    let route: string = 'https://localhost:44343/api/Checkout';
    this.httpService.getData(route)
      .subscribe((result) => {
        this.roomstodisplay = result as Room[];
      
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

  public checkoutroom = (id: number) => {
    let route: string = 'https://localhost:44343/api/Checkout/checkout?id=' + id;
    this.httpService.getData(route)
      .subscribe((result) => {
        this.roomstodisplay = result as Room[];
        this.getRoomstodisplay();
      },
        (error) => {
          console.error(error);
        });

  }

  ngOnInit(): void {
    this.getRoomstodisplay();
    this.getGuests();
  }

}
