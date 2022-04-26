const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
// const { process_params } = require("express/lib/router");
const Blog = require("./models/Blog");
const { result } = require("lodash");
// express app 

const app = express();

// connect to mongodb
const dbURI = "mongodb+srv://Arthur:Terrence1234@firstnodedatabase.b4gy2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result)=> app.listen(3000))
  .catch((err) => {
    console.log(err);
    console.log("connected database")
  })

// register view engine 
app.set("view engine", "ejs");

// listen to request 
// app.listen(3000);
app.use(express.static("public"));
app.use(morgan("dev"));

// mongoose and mongo sandbox routes
// app.get("/add-blog", (req,res) =>{
//   const blog = new Blog({
//     title: 'new blog2',
//     snippet: "About my new blog",
//     body : "more about my new blog"
//   });
//   blog.save()
//     .then((result)=>{
//       res.send(result)
//     })
//     .catch((err)=>{
//       console.log(err);
//     })
// })

// app.get("/all-blogs", (req,res) =>{
//   Blog.find()
//     .then((result) =>{
//       res.send(result)
//     })
//     .catch((err)=>{
//       console.log(err);
//     })
// })
// app.get("/single-blog", (req,res) => {
//   Blog.findById()
//   .then((result) =>{
//     res.send(result)
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
// })

// route 
app.get("/", (req,res)=>{
  res.redirect("/blogs")
});

app.get("/about", (req,res)=>{
  res.render("about", {title: "About"});
});

// redirect
app.get("/blogs", (req,res)=>{
  Blog.find().sort({createdAt: -1})
    .then((result) =>{
      res.render("index",{title:"All Blogs", blogs: result})
    })
    .catch((err)=>{
      console.log(err);
    })
})
app.get("/blogs/create", (req,res)=>{
  res.render("create", {title: "create"});
});
// 404 page 
app.use((req,res)=>{
  res.status(404).render("404")
})