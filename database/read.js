const mongoose = require("mongoose");

var MONGODB_URI ="mongodb+srv://djayyab:doaa123@cluster0.sbk85.mongodb.net/booksDB" 

const db = mongoose.connect(MONGODB_URI ||'mongodb://localhost/booksDB', { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{
    console.log("connected!")
})
.catch((err)=>{
    
  console.log("Error while connecting to DB",err);
})

let readbooksSchema = mongoose.Schema({
 title: { type: String },
 dateOfPublication: { type: String },
  img: { type: String },
  readlearter : {type : String}
});


let ReadModel = mongoose.model("readbooks", readbooksSchema);

module.exports.ReadModel = ReadModel;
