import { Component, OnInit } from '@angular/core';
import { Room } from '../models/room.model';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public roomstodisplay:Room[];

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

  public checkoutroom=(id:number)=>{
    let route: string = 'https://localhost:44343/api/Checkout/checkout?id='+id;
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
  }

}
