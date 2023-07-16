import { sequelize, SequelizeModel, DataTypes } from "../libs/database";


const order : SequelizeModel = sequelize.define('order', {
  id:{
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  user_id:DataTypes.UUID,
  status:{
    type: DataTypes.STRING,
    defaultValue:"Pending",
    validate: {
      customValidator: (value:string) => {
        const enums = ["Pending","Cancelled","Shipped"]
        if (!enums.includes(value)) {
          throw new Error('not a valid option')
        }
      }
    }
  },
  address_id:DataTypes.UUID,
  total:DataTypes.NUMBER,
  grandTotal:DataTypes.NUMBER,
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
order.associate = function () {
   const models = sequelize.models
  
   order.hasMany(models.order_item, { foreignKey: "order_id" });
   order.belongsTo(models.address, { foreignKey: "address_id" });
}

export { order }