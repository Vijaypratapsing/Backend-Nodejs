const express=require('express');
const app=express();
const route=require('./routers/routs')

const port=8080;

app.use('/home',route);

app.listen(port,()=>{
    console.log("accepted");
});