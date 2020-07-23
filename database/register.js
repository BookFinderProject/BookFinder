const mongoose = require('mongoose');

var MONGODB_URI ="mongodb+srv://djayyab:doaa123@cluster0.sbk85.mongodb.net/booksDB" 

const db = mongoose.connect(MONGODB_URI ||'mongodb://localhost/booksDB', { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{
    console.log("connected!")
})
.catch((err)=>{
    
  console.log("Error while connecting to DB",err);
})


  let booksSchema = mongoose.Schema({
    // email:{type:String},
    title: { type: String },
    author:[{
      
       type:String
   }],
    dateOfPublication: { type: String },
     img: { type: String },
     link:{type:String,unique:true},
     date:{type:Date ,default:Date.now}
    
   });
    

const RegSchema = mongoose.Schema({
  FirstName: { type: String },
  LastName: { type: String },
  Email: { type: String, required: true, unique: true },
  Password: { type: String ,required: true},
  books : { type : Array , "default" : [] }
 
});

let RegModel = mongoose.model('users', RegSchema);
let BookModel = mongoose.model('books', booksSchema);


module.exports.RegModel = RegModel;
module.exports.BookModel = BookModel;

