import { Op } from "sequelize";
import { address } from "../../models"

export class addressRepository {

    constructor() {

    }

    public create = async (addressData: any) => {
        return await address.create(addressData);
    }

    public update = async (id: string, addressData: any) => {
        return await address.update(addressData, {
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
