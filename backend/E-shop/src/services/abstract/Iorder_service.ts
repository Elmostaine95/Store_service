export interface Iorder_service{

    create (orderData:any) : Promise<any>

    update (id:string , orderData : object) : Promise<any>

    getAll (page : number,limit : number) : Promise<any>

    getById (id:string) : Promise<any>
 
    search (keyword : string | object) : Promise<any>

    delete (id :string) : Promise<any>

    bulkdelete (ids:string[]) : Promise<any>
}

