const figlet=require("figlet");

figlet("Vijay singh",function(err,data){
    if(err){
        console.log("wrong");
        console.log(err);
        return;
    }
    console.log(data);
});