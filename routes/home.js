const { AuthorizeUser } = require("../controllers/login")

const express=require("express")
const router=express.Router()

router.get("/",async (req,res)=>{
    try{
    const auth_token=await req.headers.authorization;
    const loginCredentials= await AuthorizeUser(auth_token)
    if (loginCredentials===false){
        res.status(200).send("Invalid Token")
    } else{
        res.json(loginCredentials)
    }

    }catch(e){
        console.log(e)
        console.log(400).send("server busy")
    }
})

module.exports=router