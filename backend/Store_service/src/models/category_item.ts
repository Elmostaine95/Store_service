import { sequelize, SequelizeModel, DataTypes } from "../libs/database";


const category_item : SequelizeModel = sequelize.define('category_item', {
  id:{
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  category_id:DataTypes.UUID,
  item_id:DataTypes.UUID,

});

//// Associations  //// 
category_item.associate = function () {
   const models = sequelize.models

   category_item.belongsTo(models.item, { foreignKey: "category_id" });
   category_item.belongsTo(models.item, { foreignKey: "item_id" });
}

export { category_item }