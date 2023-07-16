import {item_photo_videoRepository} from "../../data-access";
import {Iitem_photo_video_service} from '../abstract/Iitem_photo_video_service';

export class item_photo_video_Service implements Iitem_photo_video_service{
    
    repository: item_photo_videoRepository;
    
    constructor(){
        this.repository = new item_photo_videoRepository();
    }

    create = async(item_photo_videoData: any): Promise<any> =>{

            return await this.repository.create(item_photo_videoData);
    }
    
    update = async (id :string, item_photo_videoData :object ) : Promise<any> =>{

            return await this.repository.update(id, item_photo_videoData);
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
