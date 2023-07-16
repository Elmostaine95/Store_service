import { Op } from "sequelize";
import { item_photo_video } from "../../models"

export class item_photo_videoRepository {

    constructor() {

    }

    public create = async (folderData: any) => {
        return await item_photo_video.create(folderData);
    }

    public Update = async (id: string, folderData: any) => {
        return await item_photo_video.update(folderData, {
            where: {
                id: id
            }
        });
    }

    public getAll = async (page: number, limit: number) => {
        return await item_photo_video.findAndCountAll({
            offset: page,
            limit: limit,
            distinct: true,
        });
    }

    public getById = async (id: string) => {
        return await item_photo_video.findByPk(id);
    }

    public search = async (keyword: string) => {
        return await item_photo_video.findAll({
            where: {
                [Op.or]: {
                    tag: {
                        [Op.iLike]: `%${keyword}%`
                    }
                }
            }
        });
    }

    public deleteById = async (id: string) => {
        return await item_photo_video.destroy({
            where: {
                id: id
            }
        });
    }

    public bulkDelete = async (ids: Array<string>) => {
        return await item_photo_video.destroy({
            where: {
                id: ids
            }
        });
    }
}
