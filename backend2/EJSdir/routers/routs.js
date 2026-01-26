const express=require('express');
const first = require('../controllers/control')
const route = express.Router();

route.get('/first/add',first)
//const controller=require('../controllers/control')
// route.get('/first/add',(req,res)=>{
//     controller.first(req,res);
// })

module.exports=route;