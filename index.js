const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 7000;

// middlewars
app.use(cors());
app.use(express.json());

app.use('/',(req, res) => {
    res.send('app is running')
})

app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})