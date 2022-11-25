
const HotelTable=require("./hotel");
const UserTable=require("./user");
const DestinationTable=require("./destination")
const TripTable=require("./trip")
const ReviewTable=require("./reviews")
const BookingTable=require("./bookings")
const userPreference=require("./userPreferences");

DestinationTable.hasMany(HotelTable);
HotelTable.belongsTo(DestinationTable);

UserTable.hasMany(ReviewTable);
ReviewTable.belongsTo(UserTable);

UserTable.hasMany(TripTable);
TripTable.belongsTo(UserTable);

UserTable.hasMany(BookingTable);
BookingTable.belongsTo(UserTable);

HotelTable.hasMany(BookingTable);
BookingTable.belongsTo(HotelTable);

HotelTable.hasMany(ReviewTable);
ReviewTable.belongsTo(HotelTable);

TripTable.hasMany(DestinationTable);
DestinationTable.belongsTo(TripTable);

UserTable.hasMany(userPreference);
userPreference.belongsTo(UserTable);

