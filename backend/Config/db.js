
const mongoose= require("mongoose");

const connection= mongoose.createConnection("mongodb+srv://eduversalms:EduVersa@cluster0.wby7qbp.mongodb.net/Faculty?retryWrites=true&w=majority&appName=Cluster0")
.on("open",()=>{

console.log("MongoDB Connected");


}).on("error",()=>{

    console.log("MongoDB Connection error");

});

module.exports=connection;