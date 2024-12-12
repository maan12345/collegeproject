const temp2=require('./modeluser.js')
const temp18=require('jsonwebtoken')
const temp12=async function(req,res){
    const {token}=req.cookies
    console.log(token)
    if(token){
        const tokenverify=temp18.verify(token,process.env.secret)
            //if(err){
            //    console.log(err)
            //    throw err
            //}
            console.log(tokenverify)
            res.status(200).json(tokenverify)
        //})
        //console.log(tokenverify)
    }
    else{
        res.json(null)
    }
    //res.status(200).json('user info')
}
module.exports=temp12