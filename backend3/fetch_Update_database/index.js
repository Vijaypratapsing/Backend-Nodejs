const express=require("express");
const app=express();
const mysql = require("mysql2");
const path =require("path");
const methodeOverride=require(`method-override`);

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));
app.use(methodeOverride("_method"));
app.use(express.urlencoded({extended:true}));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "user",
    password: "node"
});

app.get("/",(req,res)=>{
    let q=`SELECT count(*) FROM temp `;
try {
    connection.query(q ,(err, result) => {
        if (err) throw err;
       
        let count=result[0]['count(*)'];
        console.log(count);
       res.render("count.ejs",{count});
    });
} catch (err) {
    console.log(err);
}
});
//Show Rought
app.get("/home",(req,res)=>{
    let q=`SELECT * FROM temp `;
try {
    connection.query(q ,(err, result) => {
        if (err) throw err;
       
       res.render("home.ejs",{result});
    });
} catch (err) {
    console.log(err);
}
});
//Edit Rought
app.get("/home/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q=`SELECT * FROM temp WHERE id='${id}' `;
try {
    connection.query(q ,(err, result) => {
        if (err) throw err;
        let user=result[0];  
       res.render("edit.ejs",{user});
    });
} catch (err) {
    console.log(err);
}
});
//Update Dtabase Rought 
app.patch("/home/:id",(req,res)=>{
    let {id}=req.params;
    let q=`SELECT * FROM temp WHERE id='${id}' `;
    let {pass,username:usname}=req.body;
  try {
      connection.query(q ,(err, result) => {
          if (err) throw err; 
          let user=result[0];
          if(pass!=user.password){
            res.send("Password Error bsdk");
            console.log(pass);
            console.log(user.password);}
            else{
               let q2= `UPDATE temp SET username='${usname}' WHERE id='${id}'` ;
               try {
                connection.query(q2 ,(err, result) => {
                    if (err) throw err; 
                   res.redirect("/home");
                });
            } catch (err) {
                console.log(err);
            }
            }
      });
  } 
  catch (err) {
      console.log(err);
  }
  });

app.listen("8080",()=>{
    console.log("server working well");
});