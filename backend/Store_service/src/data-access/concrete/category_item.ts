import { Op } from "sequelize";
import { category_item } from "../../models"

export class category_itemRepository {

    constructor() {

    }

    public create = async (folderData: any) => {
        return await category_item.create(folderData);
    }

    public update = async (id: string, folderData: any) => {
        return await category_item.update(folderData, {
            where: {
                id: id
            }
        });
    }

    public getAll = async (page: number, limit: number) => {
        return await category_item.findAndCountAll({
            offset: page,
            limit: limit,
            distinct: true,
        });
    }

    public getById = async (id: string) => {
        return await category_item.findByPk(id);
    }

    public search = async (keyword: string) => {
        return await category_item.findAll({
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
        return await category_item.destroy({
            where: {
                id: id
            }
        });
    }

    public bulkDelete = async (ids: Array<string>) => {
        return await category_item.destroy({
            where: {
                id: ids
            }
        });
    }
}
