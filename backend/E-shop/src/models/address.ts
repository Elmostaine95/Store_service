import { sequelize, SequelizeModel, DataTypes } from "../libs/database";


const address : SequelizeModel = sequelize.define('address', {
  id:{
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  user_id:DataTypes.UUID,
  first_name:DataTypes.TEXT,
  last_name:DataTypes.TEXT,
  phone:DataTypes.TEXT,
  coutry:DataTypes.TEXT,
  city:DataTypes.TEXT,
  line1:DataTypes.TEXT,
  line2:DataTypes.TEXT,
  landmark:DataTypes.TEXT,
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
address.associate = function () {
   const models = sequelize.models
  
   address.hasMany(models.address_item, { foreignKey: "address_id" });
   address.belongsTo(models.address, { foreignKey: "address_id" });
}

export { address }