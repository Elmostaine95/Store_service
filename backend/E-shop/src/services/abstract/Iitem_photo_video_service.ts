export interface Iitem_photo_video_service{

    create (item_photo_videoData:any) : Promise<any>

    update (id:string , item_photo_videoData : object) : Promise<any>

    getAll (page : number,limit : number) : Promise<any>

    getById (id:string) : Promise<any>
 
    search (keyword : string | object) : Promise<any>

    delete (id :string) : Promise<any>

    bulkdelete (ids:string[]) : Promise<any>
}

