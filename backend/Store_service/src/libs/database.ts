import {Sequelize, ModelStatic , DataTypes} from "sequelize";
import settings from "../libs/settings";

const sequelize = new Sequelize(settings.database) 
interface SequelizeModel extends ModelStatic<any> {
      associate? : Function
}

const AssociateModels = function (models : Array<SequelizeModel> )
 {
  return new Promise((resolve, reject) => {
  return resolve (Object.keys(models).forEach(function (modelName : any) {
      const model : SequelizeModel = models[modelName]
       if (model.associate !== undefined) {
         model.associate();
       }
  } ));
});
} 


export {
    sequelize,
    SequelizeModel,
    DataTypes,
    AssociateModels
} 