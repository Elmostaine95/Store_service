import {storeRepository} from "../../data-access";
import {Istore_service} from '../abstract/Istore_service';

export class store_Service implements Istore_service{
    
    repository: storeRepository;
    
    constructor(){
        this.repository = new storeRepository();
    }

    create = async(storeData: any): Promise<any> =>{

            return await this.repository.create(storeData);
    }
    
    update = async (id :string, storeData :object ) : Promise<any> =>{

            return await this.repository.update(id, storeData);
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
