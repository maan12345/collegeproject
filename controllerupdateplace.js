const temp2=require('./modelplace.js')
const temp12=require('./modeluser.js')
const temp18=require('jsonwebtoken')
const temp28=async function(req,res){
    const {token}=req.cookies
    const id=req.body.id
    const data=req.body.data
    const updateplace=await temp2.findById(id)
    temp18.verify(token,process.env.secret,{},async (err,userData)=>{
        if(userData.id==updateplace.owner.toString()){
            updateplace.set({
                title:data.title,
                address:data.address,
                price:data.price,
                photos:data.addphoto,
                description:data.description,
                perks:data.perk,
                extrainfo:data.extrainfo,
                checkin:data.checkin,
                checkout:data.checkout,
                maxguest:data.maxguest,
            })
            await updateplace.save()
            res.json({
                temp48:'hello',
            })
        }
    })
}
module.exports=temp28