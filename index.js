const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('I like turtles!');
})

app.listen(PORT,function(){
    console.log("listenin on port "+ PORT);
})