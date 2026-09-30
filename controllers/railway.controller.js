const Trip = require("../models/railway.model");
const jsend = require("../utils/jsend");
const convertDate = require("../utils/convertDate");

const getTrips = async(req , res)=>{

    try{
        // pagnation 
        const page = req.query.page || 1;
        const limit = req.query.limit || 15;
        const skip = (page - 1) * limit;
        
        // filtering
        let queryObj = {... req.query};
        const excludedFields = ["limit" , "page" , "fields" , "sort"];
        excludedFields.forEach((ele)=>{
            delete queryObj[ele]
        })

        if(queryObj.date_from || queryObj.date_till ){

            queryObj.date = {};
            if(queryObj.date_from){
                queryObj.date.$gte =convertDate( queryObj.date_from);
                delete queryObj.date_from;
            }

            if(queryObj.date_till){
                queryObj.date.$lte = convertDate(queryObj.date_till);
                delete queryObj.date_till;
            }
        }

        //sort 
        const date = "-createdAt";
        const sortBy = req.query.sort? req.query.sort.split(",").join(" "): date; 

        const trips = await Trip.find(queryObj).skip(skip).limit(limit).sort(sortBy);
        res.status(200).json({status : jsend.SUCCESS , data : {trips}})
        
    }catch(error){
        console.log(error);
        return res.status(500).json({status: jsend.ERROR , message: "err"})
    }
}
const CreateTrips = async(req , res)=>{

    const trip = await Trip.create({   
     departure: req.body.departure,
    destination: req.body.destination,
    date: convertDate(req.body.date),
    duration: req.body.duration,
    passengers: req.body.passengers
});
    res.status(201).json({status: jsend.SUCCESS , data : {trip}})
}

module.exports = {
    getTrips,
    CreateTrips
}