import { DataTypes } from "sequelize";
const {sequelize}=require("../config/db-connection")

const Destination=sequelize.define("destination",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    state:{
        type:DataTypes.STRING,
        allowNull:false 
    },
    country:{
        type:DataTypes.STRING,
        allowNull:false 
    },
    near_place:{
        type:DataTypes.JSON,
    },
    attractions:{
        type:DataTypes.JSON
    },
    // list_of_hotels:{
    //     type:DataTypes.ARRAY(DataTypes.STRING)
    // },

},{timestamps:false})

module.exports=Destination;