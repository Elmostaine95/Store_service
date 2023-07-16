export interface Iorder_item_service{

    create (order_itemData:any) : Promise<any>

    update (id:string , order_itemData : object) : Promise<any>

    getAll (page : number,limit : number) : Promise<any>

    getById (id:string) : Promise<any>
 
    search (keyword : string | object) : Promise<any>

    delete (id :string) : Promise<any>

    bulkdelete (ids:string[]) : Promise<any>
}

