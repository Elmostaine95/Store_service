import { sequelize, SequelizeModel, DataTypes } from "../libs/database";

const item_photo_video : SequelizeModel = sequelize.define("item_photo_video",{
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    name:DataTypes.TEXT,
    extension:DataTypes.TEXT,
    item_id:DataTypes.UUID,
    createdAt: {
        type:DataTypes.DATE,
        defaultValue: sequelize.fn('now'),
      },
      updatedAt:{
        type:DataTypes.DATE,
        defaultValue: sequelize.fn('now'),
      }
})

//// Associations  //// 
item_photo_video.associate = function () {
    const models = sequelize.models
   
    item_photo_video.belongsTo(models.item, { foreignKey: "item" });
    item_photo_video.belongsTo(models.order_item, { foreignKey: "photo_video_id"});

 }
 
 export { item_photo_video }