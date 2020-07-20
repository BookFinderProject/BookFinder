const mongoose = require("mongoose"); //inclode mongoose in our page

//connection to mongodb
mongoose
var MONGODB_URI ="mongodb+srv://djayyab:doaa123@cluster0.sbk85.mongodb.net/booksDB" 

const db = mongoose.connect(MONGODB_URI ||'mongodb://localhost/booksDB', { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{
    console.log("connected!")
})
.catch((err)=>{
    
    console.log("Error while connecting to DB",err);
})
//schema about book info
let booksSchema = mongoose.Schema({
 title: { type: String },
 author:[{
    type:String,
}],
 dateOfPublication: { type: String },
  img: { type: String }
});


let BooksModel = mongoose.model("books", booksSchema);

module.exports.BooksModel = BooksModel;
