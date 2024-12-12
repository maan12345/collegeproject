const temp2=require('./modeluser.js')
const temp18=require('bcrypt')
const temp12=async function(req,res){
    const {name,email,password}=req.body;
if(!name || !email || !password){
    return res.status(400).json({
        temp48:'hello',
        data:'fi da',
    })
}   
    const newpassword=await temp18.hash(password,10)
    try{
    const newuser=await temp2.create({name:name,email:email,password:newpassword})
    res.status(200).json({
        temp48:'hello',
        data:newuser
    })
    }
    catch(b){
        console.log(b)
        res.status(422).json(b)
    }
}
module.exports=temp12