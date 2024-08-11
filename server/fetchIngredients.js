var connectionObj= require('./dbConnection').connect;
var express= require('express');
var cors= require('cors');
var app= express();
app.use(cors());

app.get('/getingredients',function(req,res){
    connectionObj((db)=>{
        db.collection("ingredients").find({}).toArray((err,result)=>{
            if(err)
                console.log("error getting ingredients");
            else{
                console.log(result);
                res.send(result);
            } 
        });
    });
})

app.listen(4500,()=>{
    console.log("listening on port", 4500);
})