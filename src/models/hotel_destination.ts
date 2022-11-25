import { DataTypes, Model } from "sequelize";
const {sequelize}=require("../config/db-connection")

const hotel_destination=sequelize.define("hotel_destination",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    dest_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hotel_id:{
        type:DataTypes.JSON
    }
},{timestamps:false})

module.exports=hotel_destination;