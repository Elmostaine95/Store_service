import { sequelize, SequelizeModel, DataTypes } from "../libs/database";


const store : SequelizeModel = sequelize.define('store', {
  id:{
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  name:DataTypes.STRING,
  owner_id:DataTypes.UUID,
  description:DataTypes.TEXT,
  address:DataTypes.STRING,
  rating:DataTypes.INTEGER,
  category:DataTypes.STRING,
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
store.associate = function () {
   const models = sequelize.models
  
   store.hasMany(models.category, { foreignKey: "store_id" });
   store.hasMany(models.item, { foreignKey: "store_id" });
}

export { store }