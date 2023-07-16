import { Op } from "sequelize";
import { order_item } from "../../models"

export class order_itemRepository {

    constructor() {

    }

    public create = async (folderData: any) => {
        return await order_item.create(folderData);
    }

    public update = async (id: string, folderData: any) => {
        return await order_item.update(folderData, {
            where: {
                id: id
            }
        });
    }

    public getAll = async (page: number, limit: number) => {
        return await order_item.findAndCountAll({
            offset: page,
            limit: limit,
            distinct: true,
        });
    }

    public getById = async (id: string) => {
        return await order_item.findByPk(id);
    }

    public search = async (keyword: string) => {
        return await order_item.findAll({
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
        return await order_item.destroy({
            where: {
                id: id
            }
        });
    }

    public bulkDelete = async (ids: Array<string>) => {
        return await order_item.destroy({
            where: {
                id: ids
            }
        });
    }
}
