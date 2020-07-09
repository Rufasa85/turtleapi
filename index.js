const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('I like turtles!');
})

app.get("/turtle",(req,res)=>{
    res.json({
        name:"leo",
        isTurtle:true,
        isTeenageMutant:true
    })
})

app.listen(PORT,function(){
    console.log("listenin on port "+ PORT);
})