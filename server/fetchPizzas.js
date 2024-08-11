var connectionObj= require('./dbConnection').connect;
var express= require('express');
var cors=require('cors');
var app= express();

app.use(cors());
app.get('/getpizzas',function(req,res){
    connectionObj((db)=>{
        db.collection("pizzas").find({}).toArray((err,result)=>{
            if(err)
                console.log("error getting pizzas");
            else{
                console.log(result);
                res.send(result);
            } 
        });
    }); 
})

app.listen(3000,()=>{
    console.log("listening on port", 3000);
})