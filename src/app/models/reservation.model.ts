import {Guest} from './guest.model'
import {Room} from './room.model'

export interface Reservation{
    ReservationID: number;
    Check_in: Date;
    Check_out: Date;
    Guest: Guest;
    Room: Room;
}