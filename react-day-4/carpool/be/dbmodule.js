var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carpoolDB');
var db = mongoose.connection;

var users = mongoose.Schema({
    userName: {type: String,default: ''},
    password: {type: String,default: ''}
	});
var offers = mongoose.Schema({
    offerId: {type: Number},
	name: {type: String,default: ''},
	car: {type: String,default: ''},
	seatsLeft: Number,
	pickUp: {type: String,default: ''},
	destination: {type: String,default: ''}
	});
var rides = mongoose.Schema({
	rideId: {type: Number},
	offerId: {type: Number},
	riderName: {type: String,default: ''},
	rideeName:	 {type: String,default: ''},
	pickUp: {type: String,default: ''},
	destination: {type: String,default: ''},
	status :{type: String,default: ''}
});

var user = mongoose.model("User", users);
var offer = mongoose.model("Offer", offers);
var ride = mongoose.model("Ride", rides);

exports.authenticateUser=function(userName,password,res){
	user.findOne({'userName':userName,'password':password},(err,user)=>{
		if(!user){
			res.send({  message: "Login Unsuccessful", status: 401 });
		}
		else{
			res.send({  message: "Login successful", status: 200} );
		}
	})
}

exports.getRides=function(res){
	offer.find({seatsLeft:{$gt:0}},(err,offers)=>{
		res.json(offers);
	})
}

exports.bookRide=function(rider,ridee,res){
	var offerId=rider.offerId;
	offer.findOneAndUpdate({"offerId":offerId},{$inc : {seatsLeft:-1}},{new:true},(err,offerResult)=>{
		ride.find({},["rideId"],{ limit:1,sort:{"rideId":-1}},(err,result)=>{
			var newRide=new ride();
			if(!result.length){
				newRide.rideId=1;	
			}
			else{
				newRide.rideId=result[0].rideId+1;
			}
			newRide.riderName=rider.name;
			newRide.rideeName=ridee;
			newRide.pickUp=rider.pickUp;
			newRide.destination=rider.destination,
			newRide.offerId=offerResult.offerId,
			newRide.status="Booked";
			newRide.save((err,obj)=>{
				return res.send({  "rideId": newRide.rideId,  "seatsLeft": offerResult.seatsLeft,   "message": "Ride booked successfully", "status": 200})
			})
		})

	})
}

exports.cancelRide=function(rideId,res){
	ride.findOneAndUpdate({$and:[{"rideId":rideId},{"status":"Booked"}]},{status:"Cancelled"},(err,rideResult)=>{
		offer.findOneAndUpdate({"offerId":rideResult.offerId},{$inc : {seatsLeft:1}},(err,offer)=>{
			res.send({message: "Ride cancelled successfully", status: 200} );
		})
	})
}

exports.offerRide=function(body,res){
	offer.find({},["offerId"],{ limit:1,sort:{"offerId":-1}},(err,result)=>{
		var newOffer=new offer();
		if(!result.length){
			newOffer.offerId=1;	
		}
		else{
			newOffer.offerId=result[0].offerId+1;
		}
		newOffer.name=body.name;
		newOffer.pickUp=body.pickUp;
		newOffer.destination=body.destination;
		newOffer.car=body.car;
		newOffer.seatsLeft=body.seatsLeft;
		newOffer.save((err,obj)=>{
			return res.send({    message:"Offer added successfully",         status:200 } );
		})
	})
}
