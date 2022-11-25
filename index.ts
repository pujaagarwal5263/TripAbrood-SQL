const express=require("express");

const {sequelize}=require("./src/config/db-connection")
require("./src/models/index");
const Router=require("./src/routes/index")

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(Router)

sequelize.sync({alter:true}).then(()=>{
    console.log("Syncing Complete");
}).catch((err:Error)=>{
   console.log(err);
})

app.listen(3000,()=>{
    console.log("Server is running");
})