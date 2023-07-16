import { sequelize, SequelizeModel, DataTypes } from "../libs/database";


const category: SequelizeModel = sequelize.define('category', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  name: DataTypes.TEXT,
  category_id: DataTypes.UUID,
  store_id: DataTypes.UUID,
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.fn('now'),
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.fn('now'),
  }
});

//// Associations  //// 
category.associate = function () {
  const models = sequelize.models

  category.belongsTo(models.category, { foreignKey: "category_id" });
  category.belongsTo(models.store, { foreignKey: "store_id" });
  category.hasMany(models.category_item, { foreignKey: "category_id" });
}

export { category }