import express from "express";
const router=express.Router();

const {getHotels,addHotels,addDestination,addTrip,addBooking,addUser,addReview,addPreference,getReviews,
    getUsers,getDestination,getTrips,getBookings}= require("../controllers/dataController")

router.get("/getHotels",getHotels);
router.get("/getReview",getReviews);
router.get("/getUsers",getUsers)
router.get("/getDestination",getDestination)
router.get("/getTrips",getTrips)
router.get("/getBooking",getBookings)

router.post("/addHotel",addHotels);
router.post("/addTrip",addTrip);
router.post("/addDestination",addDestination);
router.post("/addBooking",addBooking);
router.post("/addUser",addUser);
router.post("/addReview",addReview)
router.post("/addPreference",addPreference)

module.exports=router;