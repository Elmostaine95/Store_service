import { Op } from "sequelize";
import { address } from "../../models"

export class addressRepository {

    constructor() {

    }

    public create = async (folderData: any) => {
        return await address.create(folderData);
    }

    public Update = async (id: string, folderData: any) => {
        return await address.update(folderData, {
            where: {
                id: id
            }
        });
    }

    public getAll = async (page: number, limit: number) => {
        return await address.findAndCountAll({
            offset: page,
            limit: limit,
            distinct: true,
        });
    }

    public getById = async (id: string) => {
        return await address.findByPk(id);
    }

    public search = async (keyword: string) => {
        return await address.findAll({
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
        return await address.destroy({
            where: {
                id: id
            }
        });
    }

    public bulkDelete = async (ids: Array<string>) => {
        return await address.destroy({
            where: {
                id: ids
            }
        });
    }
}
