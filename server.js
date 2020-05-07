// const express = require("express");
// const { MongoClient } = require("mongodb");
// const assert=require("assert")

// const app = express();
// //body-parser middleware
// app.use(express.json());

// //connect db
// const MongoURI = "mongodb://localhost:27017";
// const database = "contactlist";



// MongoClient.connect(MongoURI,{ useUnifiedTopology: true }, (err, client) => {
//   assert.equal(err, null, "database failed");
//   const db=client.db(database)
//   //api routes
//     app.get("/contact-list/",(req,res)=>{
//         console.log("a")
//         db.collection('listcontact').find().toArray().then(data=>res.send(data)).catch(err=>res.send("cannot get list contact"))
//     })

//     app.post("/add-contact/",(req,res)=>{
//         console.log("add")
//         const newContact=req.body
//         db.collection('listcontact').insertOne({...newContact}).then(data=>res.send(data)).catch(err=>res.send("cannot post"))
//     })
// });

// app.listen(5000, (err) =>
//   err ? console.log(err) : console.log(`connected on port 5000`)
// );
const express = require("express");
const { MongoClient, ObjectID } = require("mongodb");
const assert = require("assert");

const app = express();

// body-parser Middlware
app.use(express.json());

//connect bd
const MongoURl = "mongodb://localhost:27017";
const database = "contactlist";

MongoClient.connect(
  MongoURl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    assert.equal(err, null, "database failed");
    const db = client.db(database);
    // api Route

  
    // get
    app.get("/contact-list", (req, res) => {
      db.collection("listcontact")
        .find("")
        .toArray()
        .then(data => res.send(data))
        .catch(err => res.send("cannot get contact list"));
    });

  


    app.get("/contact-list-one/:id", (req, res) => {
      const id = ObjectID(req.params.id);
      db.collection("listcontact")
        .findOne({ _id: id })
        .then(data => res.send(data))
        .catch(err => res.send("cannot get contact list"));
    });

    // post 
    app.post("/contact-list", (req, res) => {
      const newcontact = req.body;
      db.collection("listcontact")
        .insertOne({...newcontact})
        .then(data => res.send(data))
        .catch(err => res.send("cannot post"));
    });
 
    //delete
    app.delete("/contact-list/:id", (req, res) => {
      const id = ObjectID(req.params.id);
      db.collection("listcontact")
        .findOneAndDelete({ _id: id })
        .then(data => res.send({ success: true }))
        .catch(err => res.send({ success: false }));
    });

    // update
    app.put("/contact-list/:id", (req, res) => {
      const id = ObjectID(req.params.id);
      const contactlist = req.body;
      console.log(contactlist);
      db.collection("listcontact")
        .findOneAndUpdate({ _id: id }, { $set: { ...contactlist } })
        .then(data => res.send({ success: true }))
        .catch(err => res.send({ success: false }));
    });
  }
);

app.listen(5000, err => {
  if (err) console.log("failed to connect");
  else {
    console.log("server run on port 5000");
  }
});
