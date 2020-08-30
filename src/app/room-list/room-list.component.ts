import { Component, OnInit } from '@angular/core';
import {Room} from '../models/room.model';
import {HttpService} from '../http.service';


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  public rooms: Room[];

  constructor(private httpService: HttpService) { }

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
    this.getRooms();
  }

}
