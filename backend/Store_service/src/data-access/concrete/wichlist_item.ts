import { Op } from "sequelize";
import { wichlist_item } from "../../models"

export class wichlist_itemRepository {

    constructor() {

    }

    public create = async (wichlist_itemData: any) => {
        return await wichlist_item.create(wichlist_itemData);
    }

    public update = async (id: string, wichlist_itemData: any) => {
        return await wichlist_item.update(wichlist_itemData, {
            where: {
                id: id
            }
        });
    }

    public getAll = async (page: number, limit: number) => {
        return await wichlist_item.findAndCountAll({
            offset: page,
            limit: limit,
            distinct: true,
        });
    }

    public getById = async (id: string) => {
        return await wichlist_item.findByPk(id);
    }

    public search = async (keyword: string) => {
        return await wichlist_item.findAll({
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
        return await wichlist_item.destroy({
            where: {
                id: id
            }
        });
    }

    public bulkDelete = async (ids: Array<string>) => {
        return await wichlist_item.destroy({
            where: {
                id: ids
            }
        });
    }
}
