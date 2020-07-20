const mongoose = require('mongoose');

var MONGODB_URI ="mongodb+srv://djayyab:doaa123@cluster0.sbk85.mongodb.net/booksDB" 

const db = mongoose.connect(MONGODB_URI ||'mongodb://localhost/booksDB', { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{
    console.log("connected!")
})
.catch((err)=>{
    
  console.log("Error while connecting to DB",err);
})

const RegSchema = mongoose.Schema({
  FirstName: { type: String },
  LastName: { type: String },
  Email: { type: String },
  Password: { type: String },
});

let RegModel = mongoose.model('users', RegSchema);

module.exports.RegModel = RegModel;
