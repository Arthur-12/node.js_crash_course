const fs = require("fs");

// setTimeout(()=>{
//   console.log("in the time out");
//   clearInterval(int);
// }, 7000)

// const int = setInterval(()=>{
//   console.log("file is written")
//   return ann()
// }, 5)

// function ann(){
//   fs.writeFile("./docs/blog2.txt",("hello world"),()=>{

// })
// }

// const os = require("os");
// console.log(os.platform(),os.endianness)

// reading files
// fs.readFile("./docs/blog.txt",(err,data)=>{
//   if (err){
//     console.log(err);
//   }
//   console.log(data.toString());
// });
// writing files 
// fs.writeFile("./docs/blog2.txt",("hello world"),()=>{
//   console.log("file was written")
// })


// directories
// if (!fs.existsSync("./blog2")){
//   fs.mkdir("./blog2", (err) =>{
//     if (err){
//       console.log(err);
//     }
//     console.log("folder was created")
//   })
// }else{
//   fs.rmdir("./blog2", (err) =>{
//     if (err){
//       console.log(err);
//     }
//     console.log("folder deleted")
//   })
// }
// deleting files 
// if (fs.existsSync("./docs/blog2.txt")){
//   fs.unlink("./docs/blog2.txt", (err)=>{
//     if (err){
//       console.log(err);
//     }
//     console.log("file deleted")
//   })
// }

const readStream = fs.createReadStream("./docs/blog2.txt"); 