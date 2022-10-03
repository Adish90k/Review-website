const express=require("express");
const app=express();
const path = require('path');


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, '/restaurants.html'));
})





app.listen(3000,()=>{
    console.log('app is listening at 3000');
})

