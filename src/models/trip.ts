import { DataTypes } from "sequelize";
const {sequelize}=require("../config/db-connection")

const Trip=sequelize.define("trip",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    place:{
        type: DataTypes.STRING,
        allowNull:false
    },
    startDate:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
   
    },
    endDate:{
        type: DataTypes.DATE,
    },
    paxes:{
        type: DataTypes.INTEGER,
        allowNull:false 
    },
    destination:{
        type: DataTypes.JSON,
        allowNull:false
    },
    preference:{
        type: DataTypes.ENUM({
            values: ["Mountain", "Beach","Countryside"]
          })
    }
},{timestamps:false})

module.exports=Trip;