import express from "express";
import dotenv from "dotenv";
import router from "./router.js";
import { error } from "console";
import con from "./connection.js";
import cors from "cors";
import path from "path";

dotenv.config();
const app=express();
app.use(express.json({
    limit: "10mb"
}));
app.use(express.urlencoded({
extended:true,
}));
app.use(cors());
app.use(express.static("./dist"));
app.use("/",router);
app.get("/*",(req, res) => {
    return res.sendFile(path.resolve("./dist/index.html"))
})
con().then(()=>{
    app.listen(process.env.VITE_PORT,(error)=>{
        if(error){
            return console.log(error);
        }
        console.log(`server started at port ${process.env.VITE_PORT}`);
    })
})
.catch(error =>{
    console.log(error);
})