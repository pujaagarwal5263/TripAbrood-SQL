var Sequelize=require("sequelize");

 export const sequelize=new Sequelize("tripAbrood","root","Puja@123",{
    dialect:"mysql",
    host:"127.0.0.1",
    logging:false
});


//module.exports={sequelize};

export const db=sequelize.authenticate().then(()=>{
    console.log("DB Connected Successfully");
    
}).catch((err:Error)=>{
    console.log(err);
    
})