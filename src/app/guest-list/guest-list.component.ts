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
  public detailsof: boolean;
  public detailson: boolean;
  public guestToDetails : Guest;

  constructor(private httpService: HttpService) { 
    this.guestToAdd={
      GuestID:0,
      Name:"",
      Surname:"",
      Member_since:"2020-08-31T07:44:35.076Z",
      City:"",
      Adress:"",
      EmailAdress:"",
      TelephoneNumber:""
    };
    this.detailsof=true;
    this.detailson=false;
    
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
    this.guestToAdd.City=form.value.cityuser;
    this.guestToAdd.Adress=form.value.adressuser;
    this.guestToAdd.EmailAdress=form.value.emailuser;
    this.guestToAdd.TelephoneNumber=form.value.telephonenumberuser;
    this.addGuest();
    
  }
  
  onDetails(index:number){
    this.detailsof=false;
    this.detailson=true;
    this.guestToDetails=this.guests[index]
    
  }

  onBackToList(){
    this.detailsof=true;
    this.detailson=false;
  }

  onClear(id: number ){
    
    let route: string = 'https://localhost:44343/api/Guests/'+id.toString();
   
    this.httpService.removeGuest(route)
    .subscribe((result) => {
      // alert("udało się all")
      this.getGuests();
     },
       (error) => {
         console.error(error);
       });
    this.getGuests();
  }

  ngOnInit(): void {
    this.getGuests();
  }

}
