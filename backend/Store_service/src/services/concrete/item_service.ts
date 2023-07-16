import {itemRepository} from "../../data-access";
import {Iitem_service} from '../abstract/Iitem_service';

export class item_Service implements Iitem_service{
    
    repository: itemRepository;
    
    constructor(){
        this.repository = new itemRepository();
    }

    create = async(itemData: any): Promise<any> =>{

            return await this.repository.create(itemData);
    }
    
    update = async (id :string, itemData :object ) : Promise<any> =>{

            return await this.repository.update(id, itemData);
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
