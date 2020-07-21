const express = require("express");
let app = express();
const cors = require("cors");
var bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
app.use(cors());
process.env.SECRET_KEY ='secret';

//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public"));

const reg = require("../database/register");
let BooksModel = reg.BookModel;
let RegModel = reg.RegModel;

//take the data of the book that i seach about it and put in favorit list

/////ADD BOOK IN USER ////////////////////EDIT TO DO THAT
app.post('/book',  (req, res) => { 
  const { email, title, author, img ,link} = req.body;
 
  const bookDoc = new BooksModel({email, title, dateOfPublication,author, img ,link});
  bookDoc.save().then((response)=>{
      res.send("created")
  })
  .catch((err)=>{
      res.send(err)
  })
  });
   
//offer for me all the data in farovite -show the favorite  list
app.get("/favorite/:email", (req, res) => {
  console.log(req)
  var email = req.params.email;
  BooksModel.find({email:email})
    .then((result) => {
      res.send(result);

      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
}); 

///Delete one Book
app.delete('/removeOne',function(req,res){
  BooksModel.find({})
  .deleteOne({}).then((result)=>{
    res.send("DeleteOne");
  })
  .catch((err)=>{
    res.send(err)
  })
});

//for all users infos/////DONE
app.post('/register', (req, res) => {
   const { FirstName, LastName, Email, Password } = req.body;
   const regDocumentation = new RegModel({FirstName, LastName, Email, Password});
   RegModel.find({Email:req.body.Email})
   .then((user)=>{  
          regDocumentation.save()
      .then(()=>{
        res.send("created")
      })
      .catch((err)=>{
        console.log("Erorr",err);
      })
     })
    

    .catch((err)=>{
      console.log("Data Erorr");
    })
});

///////////////////////////Done//////////
app.get('/login/:Email/:Password', (req, res) => {

  const { Email, Password } = req.params;

  var email = req.body.Email;
  var password = req.body.Password;

  RegModel.find({ Email, Password })
      .then((result) => {
          if (result.length > 0) {
              res.send(true);
          }else{
              res.send(false);
          }
          console.log(result);
      })
      .catch((err) => {
          res.send(err);
      });
});
var port = 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
