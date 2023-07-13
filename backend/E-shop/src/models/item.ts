import { sequelize, SequelizeModel, DataTypes } from "../libs/database";


const item : SequelizeModel = sequelize.define('item', {
  id:{
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  store_id:DataTypes.TEXT,
  name:DataTypes.TEXT,
  discount:DataTypes.TEXT,
  description:DataTypes.TEXT,
  stock:DataTypes.TEXT,
  price:DataTypes.TEXT,
  SKU:DataTypes.TEXT,
  is_deleted:DataTypes.TEXT,
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
item.associate = function () {
   const models = sequelize.models
  
   item.belongsTo(models.store, { foreignKey: "store_id" });
   item.belongsTo(models.category_item, { foreignKey: "category_id" });
   item.hasMany(models.order_item, { foreignKey: "item_id" });
   item.hasMany(models.item_photos_video, { foreignKey: "item_id" });
   item.hasMany(models.wichlist_items, { foreignKey: "item_id" });
   item.hasMany(models.cart_item, { foreignKey: "item_id" });

}

export { item }