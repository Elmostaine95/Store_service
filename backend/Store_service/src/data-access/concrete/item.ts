import { Op } from "sequelize";
import { item } from "../../models"

export class itemRepository {

    constructor() {

    }

    public create = async (folderData: any) => {
        return await item.create(folderData);
    }

    public update = async (id: string, folderData: any) => {
        return await item.update(folderData, {
            where: {
                id: id
            }
        });
    }

    public getAll = async (page: number, limit: number) => {
        return await item.findAndCountAll({
            offset: page,
            limit: limit,
            distinct: true,
        });
    }

    public getById = async (id: string) => {
        return await item.findByPk(id);
    }

    public search = async (keyword: string) => {
        return await item.findAll({
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
        return await item.destroy({
            where: {
                id: id
            }
        });
    }

    public bulkDelete = async (ids: Array<string>) => {
        return await item.destroy({
            where: {
                id: ids
            }
        });
    }
}
