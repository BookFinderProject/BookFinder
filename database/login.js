const mongoose = require('mongoose');

var MONGODB_URI ="mongodb+srv://djayyab:doaa123@cluster0.sbk85.mongodb.net/booksDB" 

const db = mongoose.connect(MONGODB_URI ||'mongodb://localhost/booksDB', { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{
    console.log("connected!")
})
.catch((err)=>{
    
  console.log("Error while connecting to DB",err);
})

const loginSchema = mongoose.Schema({
  Email: { type: String },
  Password: { type: String },
});

var loginModel = mongoose.model('Userlog', loginSchema);

module.exports.loginModel = loginModel;
