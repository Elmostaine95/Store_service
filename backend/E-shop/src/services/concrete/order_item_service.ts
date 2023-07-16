import {order_itemRepository} from "../../data-access";
import {Iorder_item_service} from '../abstract/Iorder_item_service';

export class order_item_Service implements Iorder_item_service{
    
    repository: order_itemRepository;
    
    constructor(){
        this.repository = new order_itemRepository();
    }

    create = async(order_itemData: any): Promise<any> =>{

            return await this.repository.create(order_itemData);
    }
    
    update = async (id :string, order_itemData :object ) : Promise<any> =>{

            return await this.repository.update(id, order_itemData);
    }
    
    getAll = async (page: number, limit: number): Promise<any> => {

            return await this.repository.getAll(page,limit);
    }
    
    getById = async(id: string): Promise<any> =>{

            return await this.repository.getById(id);
    }
    
    search = async (keyword: string ): Promise<any> =>{

            return await this.repository.search(keyword);
    }
    
    delete = async(id: string): Promise<any> =>{  

            return await this.repository.deleteById(id);
    }

    bulkdelete = async(ids: string[]): Promise<any> =>{  

            return await this.repository.bulkDelete(ids);
    }

}
