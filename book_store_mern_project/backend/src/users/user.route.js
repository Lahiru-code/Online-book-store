const express = require ('express')
const User = require('./user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const router =express.Router();

const JWT_SECRET = process.env.JWT_SECRET_KEY

router.post("/admin",async(req, res)=>{
    const{username, password}=req.body;
    try {
        const admin =await User.findOne({username})
        if(!admin){
             res.status(404).send({message:"Admin not Found!"})
        }
        if(admin.password!==password){
          res.status(401).send({message:"Invalid password"})  
        }

        const token = jwt.sign({id: admin._id, username: admin.username, role: admin.role},
            JWT_SECRET,
            {expiresIn:"1h"}
         )

         return res.status(200).json({
            message:"Authentiation succesfull",
            token:token,
            user:{
                username:admin.username,
                role:admin.role

            }
         })
        
    } catch (error) {
        console.error("Faild to Login as Admin", error)
        res.status(401).send({message:"Failed to Login as Admin"})
        
    }
})

module.exports= router;