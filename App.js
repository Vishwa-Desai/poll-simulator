const express=require('express');
const app=express();
const route=require("./routes/route.js");

app.use("/",route); // load routes
app.use(express.static('public')); //load static files of public folder

app.listen(5000,()=>{console.log('Server listening on port 5000')});
