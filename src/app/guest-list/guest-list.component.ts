import { Component, OnInit, ViewChild } from '@angular/core';
import {Guest} from '../models/guest.model';
import {HttpService} from '../http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {

  public guests:Guest[];
  public guestToAdd: Guest;
  constructor(private httpService: HttpService) { 
    this.guestToAdd={
      GuestID:0,
      Name:"",
      Surname:"",
      Member_since:"2020-08-31T07:44:35.076Z"
    };
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

  public addGuest = () => {
    let route: string = 'https://localhost:44343/api/Guests';
    this.httpService.addGuest(route, this.guestToAdd)
      .subscribe((result) => {
       // alert("udało się all")
       this.getGuests();
      },
        (error) => {
          console.error(error);
        });
  }

  @ViewChild('f', { static: false }) carForm: NgForm;

  onSubmit(form: NgForm) {
    // Przekaliśmy naszą zmienną lokalną 'f' z formularza dzięki czemu mamy dostęp do poszczególnych pól
    console.log(form.value.nameuser);
    console.log(form.value.surnameuser);
    console.log(form.value.cityuser);
    console.log(form.value.adressuser);
    console.log(form.value.emailuser);
    console.log(form.value.telephonenumberuser);
    this.guestToAdd.Name=form.value.nameuser;
    this.guestToAdd.Surname=form.value.surnameuser;
    this.addGuest();
    
  }

  ngOnInit(): void {
    this.getGuests();
  }

}
