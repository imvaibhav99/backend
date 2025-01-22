//require('dotenv).config({path: './env'})   //it created inconsistency in the code 
//so we import dotenv directly and config it
import dotenv from "dotenv";


import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()


//whenever change in .env restart npm run dev











// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";

/*
import express from "express";
const app=express()

(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", ()=>{
            console.log("ERRR: ",error);
            throw error
            
        })

        app.listen(process.env.PORT,()=>{
            console.log('App is listening on port ${process.env.PORT}');
            
        })
    }catch (error){
        console.error("ERROR: ", error);
        throw err
        
    
    }
})()
    */