import {Guest} from './guest.model'
import {Room} from './room.model'

export interface ReservationHistory{
    ReservationHistoryID: number;
    check_in_History: string;
    check_out_History: string;
    Guest: Guest;
    Room: Room;
    TotalAmount_History: number;
}