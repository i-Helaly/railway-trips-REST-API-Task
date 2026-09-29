require("dotenv").config()
const express = require("express");
const app = express();
const tripRoutes = require("./routes/railway.routes")
const qs = require("qs");

app.use(express.json());
app.set("query parser" , (str)=> qs.parse(str));

app.use("/api/trips" ,tripRoutes);


app.all("/*splat" , (req , res )=>{
    res.status(404).json({msg : "page not found"})
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listening in port ${port}`);
})