const express = require("express");
const router = require("./router");
const cors = require("cors");


const app = express()

app.use(cors({
    origin:"http://127.0.0.1:5500",
    credentials:true
}))

app.use(express.json());

app.use("/",router)

module.exports = app