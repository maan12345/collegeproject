const temp2=require('./modelplace.js')
const temp12=require('./modeluser.js')
const jsonwebtoken=require('jsonwebtoken')
const temp18=async function(req,res){
   const {token}=req.cookies
   console.log(token)
   jsonwebtoken.verify(token,process.env.secret,{},async(err,userdata)=>{
    const {id}=userdata
    res.json(await temp2.find({owner:id}))
   })
}
module.exports=temp18