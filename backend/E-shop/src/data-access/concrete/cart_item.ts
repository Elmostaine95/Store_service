import { Op } from "sequelize";
import { cart_item } from "../../models"

export class cart_itemRepository {

    constructor() {

    }

    public create = async (folderData: any) => {
        return await cart_item.create(folderData);
    }

    public Update = async (id: string, folderData: any) => {
        return await cart_item.update(folderData, {
            where: {
                id: id
            }
        });
    }

    public getAll = async (page: number, limit: number) => {
        return await cart_item.findAndCountAll({
            offset: page,
            limit: limit,
            distinct: true,
        });
    }

    public getById = async (id: string) => {
        return await cart_item.findByPk(id);
    }

    public search = async (keyword: string) => {
        return await cart_item.findAll({
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
        return await cart_item.destroy({
            where: {
                id: id
            }
        });
    }

    public bulkDelete = async (ids: Array<string>) => {
        return await cart_item.destroy({
            where: {
                id: ids
            }
        });
    }
}
