export interface Room{
    
       

        RoomID :number
        Number :number
        Name : string
        Is_ocuppied: boolean
        Smoke : boolean
        Nubmerbeds : RoomType
        Is_cleaned: boolean
        Price: number
        
}
enum RoomType
{
    singleperson,
     doubleperson
}