const mongoose=require('mongoose');
const express=require('express');
const app=express();
const connectDB=require('./connection/connect');
app.use(express.json());
const cors=require("cors");
app.use(cors());
require('dotenv').config();

const bcrypt=require('bcryptjs');
require('./UserDetails');

const jwt=require('jsonwebtoken');

const JWT_SECRET="jei;rbbgisniirkd,nvgyowpngvgidiowovb(fbu0nooidfgbvjkri8dsg kjoi";

const user = mongoose.model("UserInfo");
app.post("/register",async(req,res)=>{
    const {fname,lname,email,password}=req.body;
    const encryptedpass=await bcrypt.hash(password,10);
    try{
      const olduser=await user.findOne({email});
     
      if(olduser){
        return res.send({error:"already exist"})
      }
      
      await user.create({
       fname,
       lname,
       email,
       password:encryptedpass,
      })
      res.send({status:"ok"})
    }
    catch(error){
        res.send({status:"error"})
    }
})

app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const userexist=await user.find({email});
    if(!userexist){
        return res.send({error:"no user"});
    }
    const x=userexist[0].password;
    if(await bcrypt.compare(password,x)){
        const token=jwt.sign({email:userexist.email},JWT_SECRET);
        if(res.status(201)){
            return res.json({status:"ok", data:token});
        }
        else return res.json({error:"error"});
    }

      res.json({status:"error",error:"Invalid Password"});
});

app.post('/userDetails',async(req,res)=>{
    const {token}=req.body;
    try{
        const userd=jwt.verify(token,JWT_SECRET);
        const useremail=userd.email;
        console.log(useremail);
        user.find({useremail}).then((data)=>{
            res.send({status:"ok",data:data});
        })
        .catch((error)=>{
            res.send({satus:"error",data:error});
        })
        
    }
    catch(error){

    }
     
})


const start=async()=>{
    try{
        await connectDB(process.env.userdb_url);
        app.listen(5000,()=>{
            console.log("server connected");
            })
    }
    catch(error){
        console.log(error);
    }
}
start();