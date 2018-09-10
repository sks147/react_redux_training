var express = require('express');
var router = express.Router();
var dbmodule = require('../dbmodule.js');

router.get('/', function(req, res) {
	console.log("in get /");
	res.send({ "message": "Welcome to Carpoolz application"} )
});
router.post('/login', function(req, res) {
	var username=req.body.userName;
	var password=req.body.password;
	dbmodule.authenticateUser(username,password,res);
});
router.get('/show_rides', function(req, res) {
	dbmodule.getRides(res);
});
router.post('/book_ride', function(req, res) {
	console.log("something" + );
	var rider=req.body.rider;
	var ridee=req.body.ridee;
	dbmodule.bookRide(rider,ridee,res);
});
router.post('/cancel_ride', function(req, res) {
	var rideId=req.body.rideId;
	dbmodule.cancelRide(rideId,res);
});
router.post('/offer_ride', function(req, res) {
	dbmodule.offerRide(req.body,res);
});
router.get('/logout', function(req, res) {
   res.send({ "message": "Welcome to Carpoolz application"});
});

module.exports = router;