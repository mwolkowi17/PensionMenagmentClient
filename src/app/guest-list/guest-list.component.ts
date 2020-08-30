import { Component, OnInit } from '@angular/core';
import {Guest} from '../models/guest.model';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {

  public guests:Guest[];

  constructor(private httpService: HttpService) { }

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
  ngOnInit(): void {
    this.getGuests();
  }

}
