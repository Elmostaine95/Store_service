import {orderRepository} from "../../data-access";
import {Iorder_service} from '../abstract/Iorder_service';

export class order_Service implements Iorder_service{
    
    repository: orderRepository;
    
    constructor(){
        this.repository = new orderRepository();
    }

    create = async(orderData: any): Promise<any> =>{

            return await this.repository.create(orderData);
    }
    
    update = async (id :string, orderData :object ) : Promise<any> =>{

            return await this.repository.update(id, orderData);
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
