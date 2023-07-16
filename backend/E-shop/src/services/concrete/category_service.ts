import {categoryRepository} from "../../data-access";
import {Icategory_service} from '../abstract/Icategory_service';

export class category_Service implements Icategory_service{
    
    repository: categoryRepository;
    
    constructor(){
        this.repository = new categoryRepository();
    }

    create = async(categoryData: any): Promise<any> =>{

            return await this.repository.create(categoryData);
    }
    
    update = async (id :string, categoryData :object ) : Promise<any> =>{

            return await this.repository.update(id, categoryData);
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
