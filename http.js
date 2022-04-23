const http = require("http");
const fs = require("fs");
const _ = require("lodash");
// const anything = http.createServer((req,res)=>{
//   console.log(req);
// });

// anything.listen(3000 , "localhost", ()=>{
//   console.log("I am listening now")
// })
const any = http.createServer((req,res)=>{
  //lodash
  const num = _.random(0,20);
  console.log(num);
  // set header content type 
  res.setHeader("content-type","text/html");

  let path = "./views/";
  switch(req.url){
    case '/':
      path += "index.html";
      res.statusCode = 200;
      break;
    case '/about':
      path += "about.html";
      res.statusCode = 200;
      break;
    case '/about-me':
      path += "about.html";
      res.statusCode = 301;
      res.setHeader("Location","/about")
      res.end();
      break;
    default:  
      path  += '404.html';
      res.statusCode = 404;
      break;
  }
  // send an html file 
  fs.readFile(path, (err,data)=>{
    if (err){
      console.log(err);
    }
    // res.write(data);
    res.end(data);
  })
});
any.listen(3000 , "localhost", ()=>{
    console.log("I am listening now")
});