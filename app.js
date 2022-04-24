const express = require("express");
// express app 

const app = express();
// register view engine
app.set("view engine", "ejs")

// listen to request 
app.listen(3000);

app.get("/", (req,res)=>{
const blog = [
  {title: "LindaIkeja", snippet: "the true story behind the tinder swindler"},
  {title: "The uncharted", snippet: "This movie is a franchise, it is really a must to watch"},
  {title: "King solomon's mine", snippet: "This is one of the best western movies in the 90's"},
];

  res.render("index", {title: "home", blog});
});

app.get("/about", (req,res)=>{
  res.render("about", {title: "About"});
});

// redirect
app.get("/blogs/create", (req,res)=>{
  res.render("create", {title: "create"});
});
// 404 page 
app.use((req,res)=>{
  res.status(404).render("404")
})