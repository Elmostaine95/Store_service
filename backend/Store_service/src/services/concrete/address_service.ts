import {addressRepository} from "../../data-access";
import {Iaddress_service} from '../abstract/Iaddress_service';

export class address_Service implements Iaddress_service{
    
    repository: addressRepository;
    
    constructor(){
        this.repository = new addressRepository();
    }

    create = async(addressData: any): Promise<any> =>{

            return await this.repository.create(addressData);
    }
    
    update = async (id :string, addressData :object ) : Promise<any> =>{

            return await this.repository.update(id, addressData);
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
