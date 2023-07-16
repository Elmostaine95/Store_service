export interface Icart_item_service{

    create (cart_itemData:any) : Promise<any>

    update (id:string , cart_itemData : object) : Promise<any>

    getAll (page : number,limit : number) : Promise<any>

    getById (id:string) : Promise<any>
 
    search (keyword : string | object) : Promise<any>

    delete (id :string) : Promise<any>

    bulkdelete (ids:string[]) : Promise<any>
}

