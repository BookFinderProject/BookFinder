const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/booksDB', { useNewUrlParser: true })
  .then(() => {
    console.log(' The connecting is good :) ');
  })
  .catch(err => {
    console.log(' Err when conecting To DataBase :( ', err);
  });

  let booksSchema = mongoose.Schema({
    title: { type: String },
    author:[{
       type:String,
   }],
    dateOfPublication: { type: String },
     img: { type: String },
    
   });
    
const RegSchema = mongoose.Schema({
  FirstName: { type: String },
  LastName: { type: String },
  Email: { type: String, required: true, unique: true },
  Password: { type: String },
  books:[booksSchema]
});

let RegModel = mongoose.model('users', RegSchema);

module.exports.RegModel = RegModel;
