import {cart_itemRepository} from "../../data-access";
import {Icart_item_service} from '../abstract/Icart_item_service';

export class cart_item_Service implements Icart_item_service{
    
    repository: cart_itemRepository;
    
    constructor(){
        this.repository = new cart_itemRepository();
    }

    create = async(cart_itemData: any): Promise<any> =>{

            return await this.repository.create(cart_itemData);
    }
    
    update = async (id :string, cart_itemData :object ) : Promise<any> =>{

            return await this.repository.update(id, cart_itemData);
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
