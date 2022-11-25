import { DataTypes } from "sequelize";
const {sequelize}=require("../config/db-connection")


const Hotel= sequelize.define("hotel",{
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
    address:{
        type: DataTypes.STRING,
        allowNull:false
    },
    description:{
        type: DataTypes.STRING,
        allowNull:false
    },
    contact:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    numOfReviews:{
        type: DataTypes.INTEGER,
    },
    
    floors:{
        type:DataTypes.INTEGER
    },
    city:{
        type:DataTypes.STRING
    },
    state:{
        type:DataTypes.STRING
    },
    country:{
        type:DataTypes.STRING
    },
    amenities:{
        type:DataTypes.JSON
    },
    instructions:{
        type:DataTypes.STRING
    },
    how_to_reach:{
        type:DataTypes.STRING
    },
    latitude:{
        type:DataTypes.FLOAT
    },
    longitude:{
        type:DataTypes.FLOAT
    },
    photo:{
        type:DataTypes.BLOB
    },
    hotel_reviews:{
       type: DataTypes.JSON
    }
},{timestamps:false})

module.exports=Hotel;