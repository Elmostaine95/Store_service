import { sequelize, SequelizeModel, DataTypes } from "../libs/database";


const order_item : SequelizeModel = sequelize.define('order_item', {
  id:{
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  item_id:DataTypes.UUID,
  order_id:DataTypes.UUID,
  price:DataTypes.INTEGER,
  quantity:DataTypes.INTEGER,
  item_photo_video_id:DataTypes.UUID,
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
order_item.associate = function () {
   const models = sequelize.models
  
   order_item.belongsTo(models.item, { foreignKey: "item_id" });
   order_item.belongsTo(models.item_photo_video, { foreignKey: "item_photo_video_id" });
   order_item.belongsTo(models.order, { foreignKey: "order_id" });
}

export { order_item }