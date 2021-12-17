const express = require('express')
const app = express();
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const bodyparser = require('body-parser');
const url = 'mongodb://localhost:27017/';
const cors = require('cors');
const {ObjectId} = require('mongodb');

app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

// DB Name 
const dbName = 'American_diesel';

// DB table Collection 
const collect1 = "dashboard";
const collect2 = "clients";
const collect3 = "campaigns";
var sta = true;

// dashboard  get 
app.get('/dashboard',(req,res)=> {
    console.log("connect dashboard");
    const db = client.db(dbName);
    const collection = db.collection(collect1);
    collection.find({}).toArray(function(err,list) {   
          assert.equal(err, null);
          //   console.log("Found the following records");
          console.log(list)
        res.json(list);
         
        });
    });

// clients get     
app.get('/clients',(req,res)=> {
    console.log("connect client");
    const db = client.db(dbName);
    const collection = db.collection(collect2);
    collection.find({}).toArray(function(err,list) {   
        assert.equal(err, null);
        //   console.log("Found the following records");
          // console.log(list)
        //   callback(list);
        res.json(list);
         
    }); 
});

// campaigns get 
app.get('/campaigns',(req,res)=> {
    console.log("Connect campaigns");
    const db = client.db(dbName);
    const collection = db.collection(collect3);
    collection.find({}).toArray(function(err,list) { 
        assert.equal(err, null);
        //   console.log("Found the following records");
        //   console.log(list)
        //   callback(list);
        res.json(list);
         
    });  
});

//cleints post 
app.post('/clients',(req,res)=>{
    //  console.log("Posting",req.body);
      let oid = new ObjectId().toHexString(); 
      let _id = { oid } ;
      let  name  = req.body.name;
      let  mobile =  req.body.mobile;
      let phone = String(mobile);
      let  email = req.body.emailu;
      let  company  = req.body.company;
      let  invitation = req.body.invitation;
      let  is_deleted = req.body.is_deleted;
      let  created_at = req.body.created_at;
      let  updated_at = req.body.updated_at;
 
      let data = {
       _id,
       invitation,
       phone,
       company,
       email,
       name,
       created_at, 
       updated_at,
       is_deleted,
    }
 
   const db = client.db(dbName);
   const collection = db.collection(collect2);
   collection.insertOne(data,function(err,result){
      assert.equal(null,err);
      console.log("Data instered");
      // console.log(data);
      res.json(result);
    });

});
  
/* get id by client */
app.get('/clients/:ids',(req,res)=>{
    // console.log(req.params.ids ,"getting id"); 
    // res.send({message:"Hello"});
    let ids = req.params.ids;                                             
        const db = client.db(dbName);
        const collection = db.collection(collect2);
        collection.find({"_id.oid":ids}).toArray(function(err,result){
             if (err) throw err;
                assert.equal(null,err);
                console.log("Data Find",result);
                res.json(result);
              
        });
});

/* update client status*/
app.put('/clients/:ids',(req,res)=>{
    console.log(req.params.ids,"getting id");
    sta = !sta;
 let date  = new Date();
 date.toISOString();
 console.log(sta);
//  console.log(date) 
    // res.send({message:"Hello"});
    let ids = req.params.ids;                                           
        const db = client.db(dbName);
        const collection = db.collection(collect2);
        collection.updateMany({ "_id.oid": ids },{$set:{"is_deleted": sta , "updated_at":{date}}},{ upsert: true },function(err,result){
              
          if (err) throw err; 
             assert.equal(null,err);
             console.log("Updated");
              res.json(result);
              });
});

// /* update client status*/
// app.put('/clients/:ids',(req,res)=>{
  // console.log(req.params.ids,"getting id"); // res.send({message:"Hello"});
  //  let ids = req.params.ids;                                             
  //  const db = client.db(dbName);
      //  const collection = db.collection(collect2);
      //  collection.updateOne(
        // { "_id.oid": ids },
        //  {
          //  "status": false ,
        //  },
          // ).toArray(function(err,result){
                // 
            // if (err) throw err; 
              //  assert.equal(null,err);
              //  console.log("Data Find",result);
              //  res.send(result);
                // });
// });

/* get id by campaigns */
app.get('/campaigns/:ids',(req,res)=>{
  // console.log(req.params.ids,"getting id"); 
  // res.send({message:"Hello"});
  let ids = req.params.ids;                                             
      const db = client.db(dbName);
      const collection = db.collection(collect3);
      collection.find({"_id.oid":ids}).toArray(function(err,result){
            if (err) throw err;
           assert.equal(null,err);
           console.log("Data Find",result);
           res.json(result);
      });
});

/*campaigns status upload */
 app.put('/campaigns/:ids',(req,res)=>{
  // sta is the boolean check for is_delete
     sta = !sta;
  let date  = new Date();
  date.toISOString();
  console.log(sta);
 //  console.log(date) 
     // res.send({message:"Hello"});
     let ids = req.params.ids;                                           
         const db = client.db(dbName);
         const collection = db.collection(collect3);
         collection.updateMany({ "_id.oid": ids },{$set:{"is_deleted": sta , "updated_at":{date}}},{ upsert: true },function(err,result){
               
           if (err) throw err; 
              assert.equal(null,err);
              console.log("Updated");
               res.json(result);
               });    
})

/* campiagns delete row */
app.delete('/campaigns/:ids',(req,res)=>{
    // console.log(req.params.ids,"getting id");
    // res.send({message:"Hello"});
    let ids = req.params.ids;                                             
         const db = client.db(dbName);
         const collection = db.collection(collect3);
         collection.deleteOne({ "_id.oid": ids },function(err,result){
         if (err) throw err; 
            assert.equal(null,err);
            console.log("Deleted ",result);
            res.json(result);
             })
});
 
/* Testing API call 
 app.get('/Hello',(req,res)=>{
    //     res.end("Hello");
    // });


/* DB client connect */   
  const client = new MongoClient(url);
    
  client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  app.listen(3000,()=>{console.log("Server is running on localhost:3000")});
})
