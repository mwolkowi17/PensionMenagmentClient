import { Guest } from './guest.model';

export interface Room{
    
       

        RoomID :number
        Number :number
        Name : string
        is_ocuppied: boolean
        Smoke : boolean
        Nubmerbeds : RoomType
        Is_cleaned: boolean
        Price: number
        Guest: Guest
        GuestSurnama: string

        
}
enum RoomType
{
    singleperson,
     doubleperson
}