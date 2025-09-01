 const express = require("express");
 const app = express();
const cors=require("cors")

const mongoose = require("mongoose");
const port =process.env.PORT||5000;
require("dotenv").config();
//middleware
app.use(express.json());
app.use(cors({
  origin:['http://localhost:5173'],
  credentials:true
}))
 
 
//routes

const bookRoutes=require('./src/books/book.route')
app.use("/api/books",bookRoutes)

async function main(){
await mongoose.connect(process.env.DB_URL)  // no options needed
  .then(() => {
    console.log("✅ MongoDB connected!");
    app.get("/", (req, res) => res.send("Book store server is running!"));
    app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
  })
   
}

main().catch(err => console.error(err));
