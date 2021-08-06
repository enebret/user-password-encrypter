const express = require("express")
const bodyParser = require ("body-parser")
var ecyp = require("./ecp_model")
var urlEncoded = bodyParser.urlencoded
const app = express()
app.use
app.post("/", urlEncoded, (req,res)=>{
   pword = req.body.password
   key = req.body.username
   var Hashd = ecyp(key, pword)
    //ecyp(key, pword)
})