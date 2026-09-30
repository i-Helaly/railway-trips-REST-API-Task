
const mongoose = require("mongoose");



mongoose.connect(process.env.URI).then(() => console.log("Connected Successfully")).catch((err) => console.log(err));

const tripSchema = new mongoose.Schema({

    departure: {
        type: String,
      require: true
    },
    destination: {
        type: String,
      require: true
    },
    date: {
        type: Date,
      require: true
    },
    duration: {
        type: Number,
      require: true
    },

    passengers: {
        type: Number,
      require: true,
      min: 2
    },

} , {timestamps: true})



const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;