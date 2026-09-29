
const express = require("express");
const router = express.Router();
const tripsControllers = require("../controllers/railway.controller");

router.get("/" ,tripsControllers.getTrips)
router.post("/" ,tripsControllers.CreateTrips)



module.exports = router