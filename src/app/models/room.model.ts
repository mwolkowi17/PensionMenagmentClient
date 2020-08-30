export interface Room{
    
       

        RoomID :number
        Number :number
        Name : string
        Is_ocuppied: boolean
        Smoke : boolean
        Nubmerbeds : RoomType
}
enum RoomType
{
    singleperson,
     doubleperson
}