import { DataTypes } from "sequelize";
const {sequelize}=require("../config/db-connection")

const User= sequelize.define("user",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
    contact:{
        type: DataTypes.INTEGER,
        allowNull:false
    },

},{timestamps:false})

module.exports=User;