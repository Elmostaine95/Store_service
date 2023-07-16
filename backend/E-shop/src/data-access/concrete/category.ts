import { Op } from "sequelize";
import { category } from "../../models"

export class categoryRepository {

    constructor() {

    }

    public create = async (folderData: any) => {
        return await category.create(folderData);
    }

    public update = async (id: string, folderData: any) => {
        return await category.update(folderData, {
            where: {
                id: id
            }
        });
    }

    public getAll = async (page: number, limit: number) => {
        return await category.findAndCountAll({
            offset: page,
            limit: limit,
            distinct: true,
        });
    }

    public getById = async (id: string) => {
        return await category.findByPk(id);
    }

    public search = async (keyword: string) => {
        return await category.findAll({
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
        return await category.destroy({
            where: {
                id: id
            }
        });
    }

    public bulkDelete = async (ids: Array<string>) => {
        return await category.destroy({
            where: {
                id: ids
            }
        });
    }
}
