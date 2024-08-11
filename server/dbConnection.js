var mongodb= require('mongodb');

var mongoClient= mongodb.MongoClient;

var _db;

var mongoConnection= (callback)=>{
    mongoClient.connect("mongodb://127.0.0.1:27017",(err,conn)=>{
        if(err)
            console.log("Error connecting to database",err);
        else
        {
            _db= conn.db('pizzeria');
            console.log("Succesfully connected!!");
            callback(_db);
        }
    })
}

var getDb=()=>{
    return _db;
}

module.exports.connect=mongoConnection;
module.exports.db=getDb;