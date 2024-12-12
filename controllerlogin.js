const temp2=require('./modeluser.js')
const temp18=require('bcrypt')
const temp28=require('jsonwebtoken')
const temp12=async function(req,res){
    const {email,password}=req.body
    console.log(req.body)
    if(!email || !password){
        return res.status(400).json({
            temp48:'hello',
            data:'no al deta',
        })
    }
    const user=await temp2.findOne({email})
    if(!user){
        return res.status(400).json({
            temp48:'hello',
            data:'no us',
        })
    }
    console.log(user)
    console.log('2')
    const newpassword=await temp18.compare(password,user.password)
    console.log(newpassword)
   if(newpassword==false){
        return res.status(400).json({
            temp48:'hello',
            data:'pass in',
        })
    }
    const tokenvalue=await temp28.sign({email:user.email,name:user.name,id:user._id},process.env.secret,{},function(err,token){
        if(err){
            throw err
        }
        res.status(200).cookie('token',token).json({
            temp48:'hello',
            data:'login suce',
            userfi:user,
        })
    })
    //res.status(200).cookie('token','').json({
    //    temp48:'hello',
    //    data:'login suce',
    //    userfi:user,
    //})
}
module.exports=temp12