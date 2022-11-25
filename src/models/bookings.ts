import { DataTypes } from "sequelize";
const {sequelize}=require("../config/db-connection")

const Booking=sequelize.define("booking",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    payment_ref:{
        type:DataTypes.STRING,
        allowNull:false
    },
    startDate:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    endDate:{
        type: DataTypes.DATE,
    }
},{timestamps:false})

module.exports=Booking;