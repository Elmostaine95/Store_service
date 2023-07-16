import { sequelize, SequelizeModel, DataTypes } from "../libs/database";


const cart_item : SequelizeModel = sequelize.define('cart_item', {
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
cart_item.associate = function () {
   const models = sequelize.models
  
   cart_item.belongsTo(models.item, { foreignKey: "item_id" });
}

export { cart_item }