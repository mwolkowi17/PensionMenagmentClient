import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import { Reservation } from '../models/reservation.model';
import { Guest } from '../models/guest.model';
import { Room } from '../models/room.model';
import { NgForm } from '@angular/forms';
import { Params } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  public reservations: Reservation[];
  public guests: Guest[];
  public rooms: Room[];
  public restype: number;
  public residguest: number;
  public rescheckin: string;
  public rescheckout: string;
  public resbreakfestincluded: boolean;
  public newreservation: Reservation;
  public searchedguests: Guest[];
  public searchedView: boolean;



  constructor(private httpService: HttpService) {
    this.searchedView = false;
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

  public addReservation = () => {
    //let route: string = 'https://localhost:44343/api/Reservations/addreservation?type=1&idguest=2&checkin=2020-09-13&checkout=2020-09-14&breakfestincluded=true';
    let route: string = 'https://localhost:44343/api/Reservations/addreservation?type=' + this.restype + '&idguest=' + this.residguest + '&checkin=' + this.rescheckin + '&checkout=' + this.rescheckout + '&breakfestincluded=' + this.resbreakfestincluded;
    let params: Params = {
      type: this.restype,
      idguest: this.restype,
      checkin: this.rescheckin,
      checkout: this.rescheckout,
      breakfestincluded: this.resbreakfestincluded

    }
    this.httpService.getData(route)
      .subscribe((result) => {
        this.newreservation = result as Reservation;
        this.getReservations();
      },
        (error) => {
          console.error(error);
        });

  }

  public onClear(id: number) {

    let route: string = 'https://localhost:44343/api/Reservations/' + id.toString();

    this.httpService.removeGuest(route)
      .subscribe((result) => {
        // alert("udało się all")
        this.getReservations();
      },
        (error) => {
          console.error(error);
        });
    this.getGuests();
  }

  public getSearchedGuests = (surname: string) => {

    let route: string = 'https://localhost:44343/api/Guests/FindGuestNumber?guestsurname=' + surname;
    this.httpService.getData(route)
      .subscribe((result) => {
        this.searchedguests = result as Guest[];
      },
        (error) => {
          console.error(error);
        });

  }

  @ViewChild('f', { static: false }) carForm: NgForm;

  onSubmit(form: NgForm) {
    console.log(form.value.idguest);
    console.log(form.value.type);
    console.log(form.value.checkin);
    console.log(form.value.checkout);
    this.restype = form.value.type;
    this.residguest = form.value.idguest;
    this.rescheckin = form.value.checkin;
    this.rescheckout = form.value.checkout;
    this.resbreakfestincluded = form.value.breakfestincluded;
    console.log("guest:" + this.residguest)
    this.addReservation();

  }

  @ViewChild('g', { static: false }) surnameForm: NgForm;

  onSubmitSearch(form: NgForm) {
    console.log(form.value.guestname)
    this.getSearchedGuests(form.value.guestname);
    this.searchedView = true;

  }
  ngOnInit(): void {
    this.getReservations();
    this.getGuests();
    this.getRooms();

  }

}
