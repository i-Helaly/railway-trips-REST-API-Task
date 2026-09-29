const Trip = require("../models/railway.model");
const jsend = require("../utils/jsend");

const getTrips = async(req , res)=>{

    try{
        // pagnation 
        const page = req.query.page || 1;
        const limit = req.query.limit || 15;
        const skip = (page - 1) * limit;

        const trips = await Trip.find().skip(skip).limit(limit);
        res.status(200).json({status : jsend.SUCCESS , data : {trips}})
        
    }catch(err){
        console.log(error);
        return res.status(500).json({status: jsend.ERROR , message: "err"})
    }
}
const CreateTrips = async(req , res)=>{

    const trip = await Trip.create(req.body);
    res.status(201).json({status: jsend.SUCCESS , data : {trip}})
}

module.exports = {
    getTrips,
    CreateTrips
}