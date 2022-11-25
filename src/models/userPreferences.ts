import { DataTypes } from "sequelize";
const {sequelize}=require("../config/db-connection")

const userPreference=sequelize.define("userPreference",{
   id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    preference:{
      type: DataTypes.STRING,
      allowNull:false
    }
},{timestamps:false})

module.exports=userPreference;