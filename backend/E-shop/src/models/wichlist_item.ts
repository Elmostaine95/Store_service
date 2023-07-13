import { sequelize, SequelizeModel, DataTypes } from "../libs/database";


const wichlist_item : SequelizeModel = sequelize.define('wichlist_item', {
  id:{
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  item_id:DataTypes.UUID,
  user_id:DataTypes.UUID,
  createdAt: {
    type:DataTypes.DATE,
    defaultValue: sequelize.fn('now'),
  },
  updatedAt:{
    type:DataTypes.DATE,
    defaultValue: sequelize.fn('now'),
  }
});

//// Associations  //// 
wichlist_item.associate = function () {
   const models = sequelize.models
  
   wichlist_item.belongsTo(models.item, { foreignKey: "item_id" });
}

export { wichlist_item }