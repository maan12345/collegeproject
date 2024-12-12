const temp2=require('./modelplace.js')
const temp12=require('./modeluser.js')
const temp18=require('./modelcust.js')
const jsonwebtoken=require('jsonwebtoken')
const temp28=async function(req,res){
    const {token}=req.cookies
    const userdata=jsonwebtoken.verify(token,process.env.secret,{},async(err,userData)=>{
        if(err){
            throw err
        }
        //await res.status(200).json(await temp18.find({custid:userData.id}))
        const data=await temp18.find({custid:userData.id}).populate('place')
        res.status(200).json({
            temp48:'hello',
            data:data,
        })
    })
}
module.exports=temp28