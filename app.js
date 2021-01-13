//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
var names=["Buy food", "Cook Food", "Eat Food"];
var work=[];
app.get("/", function(req, res){
  var date=new Date();
  var options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  var day=date.toLocaleDateString("en-Us",options);
  res.render("index", {itemhead:day, Varitem:names});
});

app.post('/', function(req,res) {
  name=req.body.Var;
  if(req.body.button=="work") 
  {
    work.push(name);
    res.redirect("/work");
  }
  else {
  names.push(name);
  res.redirect("/");
}
});

app.get("/work", function(req, res) {
  res.render("index", {itemhead:"work",Varitem:work});
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
