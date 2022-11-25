import { DataTypes } from "sequelize";
const {sequelize} = require("../config/db-connection");

const Review=sequelize.define("review",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    starRating:{
        type:DataTypes.INTEGER,
    },
    review:{
        type: DataTypes.STRING,
    },
    postedOn:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    
    },
   
},{timestamps:false})

module.exports=Review;