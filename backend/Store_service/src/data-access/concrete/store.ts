import { Op } from "sequelize";
import { store } from "../../models"

export class storeRepository {

    constructor() {

    }

    public create = async (storeData: any) => {
        return await store.create(storeData);
    }

    public update = async (id: string, storeData: any) => {
        return await store.update(storeData, {
            where: {
                id: id
            }
        });
    }

    public getAll = async (page: number, limit: number) => {
        return await store.findAndCountAll({
            offset: page,
            limit: limit,
            distinct: true,
        });
    }

    public getById = async (id: string) => {
        return await store.findByPk(id);
    }

    public search = async (keyword: string) => {
        return await store.findAll({
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
        return await store.destroy({
            where: {
                id: id
            }
        });
    }

    public bulkDelete = async (ids: Array<string>) => {
        return await store.destroy({
            where: {
                id: ids
            }
        });
    }
}
