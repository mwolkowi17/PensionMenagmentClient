import {Guest} from './guest.model'
import {Room} from './room.model'

export interface Reservation{
    ReservationID: number;
    Check_in: string;
    Check_out: string;
    Guest: Guest;
    Room: Room;
}