import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RoomListComponent} from './room-list/room-list.component';
import {GuestListComponent} from './guest-list/guest-list.component';
import {ReservationListComponent} from './reservation-list/reservation-list.component';
import {ReservationHistoryListComponent} from './reservation-history-list/reservation-history-list.component';
import {CheckinComponent} from './checkin/checkin.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {BreakfastsComponent} from './breakfasts/breakfasts.component'

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'room-list', component: RoomListComponent },
{ path: 'guest-list', component: GuestListComponent },
{ path: 'reservation-list', component: ReservationListComponent },
{ path: 'reservation-history-list', component: ReservationHistoryListComponent },
{ path: 'checkin', component: CheckinComponent },
{ path: 'checkout', component: CheckoutComponent },
{ path: 'breakfasts', component: BreakfastsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
