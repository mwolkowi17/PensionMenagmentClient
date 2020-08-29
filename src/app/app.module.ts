import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomListComponent } from './room-list/room-list.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationHistoryListComponent } from './reservation-history-list/reservation-history-list.component';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { BreakfastsComponent } from './breakfasts/breakfasts.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    GuestListComponent,
    ReservationListComponent,
    ReservationHistoryListComponent,
    CheckinComponent,
    CheckoutComponent,
    HomeComponent,
    BreakfastsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
