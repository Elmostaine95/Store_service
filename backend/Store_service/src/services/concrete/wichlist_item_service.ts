import {wichlist_itemRepository} from "../../data-access";
import {Iwichlist_item_service} from '../abstract/Iwichlist_item_service';

export class wichlist_item_Service implements Iwichlist_item_service{
    
    repository: wichlist_itemRepository;
    
    constructor(){
        this.repository = new wichlist_itemRepository();
    }

    create = async(wichlist_itemData: any): Promise<any> =>{

            return await this.repository.create(wichlist_itemData);
    }
    
    update = async (id :string, wichlist_itemData :object ) : Promise<any> =>{

            return await this.repository.update(id, wichlist_itemData);
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
