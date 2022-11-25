import { RequestHandler } from "express";

const Hotel=require("../models/hotel");
const Destination=require("../models/destination")
const Trip=require("../models/trip")
const Booking=require("../models/bookings")
const User=require("../models/user")
const Review=require("../models/reviews")
const Preference=require("../models/userPreferences")

const getHotels: RequestHandler=async(req,res)=>{
    try{
    let hotels=await Hotel.findAll({
        include:[{
            model:Destination,
            attributes:["name","near_place","attractions"]
        }],
        attributes:["name","address"]
    })
    if(hotels){
    return res.status(200).json(hotels);
    }
    return res.status(500).send("Could not fetch data")
    }
    catch(err){
       console.log(err);
    }
}

const getReviews: RequestHandler=async(req,res)=>{
    try{
    let reviews=await Review.findAll({
        include:[{model: User, attributes: ["name"]},
                  {model:Hotel, attributes:["name","address"]}],
    })
    return res.status(200).json(reviews);
    }
    catch(err){
       console.log(err);
    }
}

const getUsers: RequestHandler=async(req,res)=>{
    try{
    let users=await User.findAll({
        include:[{model:Booking},{model:Trip}],
      attributes:{exclude:"password"}
    })
    return res.status(200).json(users);
    }
    catch(err){
       console.log(err);
    }
}

const getDestination: RequestHandler=async(req,res)=>{
    try{
    let destinations=await Destination.findAll({})
    return res.status(200).json(destinations);
    }
    catch(err){
       console.log(err);
    }
}

const getTrips: RequestHandler=async(req,res)=>{
    try{
    let trips=await Trip.findAll({
        include:[{
            model:User,
            attributes:["name","email"]
        }]
    })
    return res.status(200).json(trips);
    }
    catch(err){
       console.log(err);
    }
}

const getBookings: RequestHandler=async(req,res)=>{
    try{
    let bookings=await Booking.findAll({
        include:[{model: User, attributes: ["name"]},
                  {model:Hotel, attributes:["name","address"]}],
        })
        return res.status(200).json(bookings);
    }
    
    catch(err){
       console.log(err);
    }
}

const addHotels: RequestHandler=async(req,res)=>{
   try{
    let data=req.body;
    console.log(data);
    
     let newHotel=await Hotel.create(data);
     return res.status(200).json(newHotel);
   }catch(err){
    console.log(err);
   }
}

const addDestination: RequestHandler=async(req,res)=>{
    try{
        let data=req.body;
        let newDestination=await Destination.create(data);
         return res.status(200).json(newDestination);
       }catch(err){
        console.log(err);
       }
}

const addTrip: RequestHandler=async(req,res)=>{
    try{
        let data=req.body;
        let newTrip=await Trip.create(data);
         return res.status(200).json(newTrip);
       }catch(err){
        console.log(err);
       }
}

const addBooking: RequestHandler=async(req,res)=>{
    try{
        let data=req.body;
        let newBooking=await Booking.create(data);
         return res.status(200).json(newBooking);
       }catch(err){
        console.log(err);
       }
}

const addUser: RequestHandler=async(req,res)=>{
    try{
        let data=req.body;
        let newUser=await User.create(data);
         return res.status(200).json(newUser);
       }catch(err){
        console.log(err);
       }
}

const addReview: RequestHandler=async(req,res)=>{
    try{
        let data=req.body;
        let newReview=await Review.create(data);
         return res.status(200).json(newReview);
       }catch(err){
        console.log(err);
       }
}

const addPreference: RequestHandler=async(req,res)=>{
    try{
        let data=req.body;
        let newPreference=await Preference.create(data);
         return res.status(200).json(newPreference);
       }catch(err){
        console.log(err);
       }
}

module.exports={getHotels,addHotels,addDestination,addTrip,addBooking,addUser,addReview,addPreference,
    getReviews, getUsers, getDestination,getTrips,getBookings}