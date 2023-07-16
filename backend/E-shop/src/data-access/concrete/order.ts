import { Op } from "sequelize";
import { order } from "../../models"

export class orderRepository {

    constructor() {

    }

    public create = async (folderData: any) => {
        return await order.create(folderData);
    }

    public Update = async (id: string, folderData: any) => {
        return await order.update(folderData, {
            where: {
                id: id
            }
        });
    }

    public getAll = async (page: number, limit: number) => {
        return await order.findAndCountAll({
            offset: page,
            limit: limit,
            distinct: true,
        });
    }

    public getById = async (id: string) => {
        return await order.findByPk(id);
    }

    public search = async (keyword: string) => {
        return await order.findAll({
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
        return await order.destroy({
            where: {
                id: id
            }
        });
    }

    public bulkDelete = async (ids: Array<string>) => {
        return await order.destroy({
            where: {
                id: ids
            }
        });
    }
}
