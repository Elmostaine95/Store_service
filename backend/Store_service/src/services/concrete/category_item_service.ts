import {category_itemRepository} from "../../data-access";
import {Icategory_item_service} from '../abstract/Icategory_item_service';

export class category_item_Service implements Icategory_item_service{
    
    repository: category_itemRepository;
    
    constructor(){
        this.repository = new category_itemRepository();
    }

    create = async(category_itemData: any): Promise<any> =>{

            return await this.repository.create(category_itemData);
    }
    
    update = async (id :string, category_itemData :object ) : Promise<any> =>{

            return await this.repository.update(id, category_itemData);
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
