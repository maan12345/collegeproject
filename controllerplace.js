const temp2=require('./modelplace.js')
const temp12=require('./modeluser.js')
const jsonwebtoken=require('jsonwebtoken')
const temp18=async function(req,res){
    //const {title,address,description,perk,addphoto,photolink,extrainfo,checkin,checkout,maxguest}=req.body.data
    const data=req.body
    const {token}=req.cookies
    //const data={title:title,address:address,description:description,perk:perk,addphoto:addphoto,photolink:photolink,extrainfo:extrainfo,checkin:checkin,checkout:checkout,maxguest:maxguest}
    jsonwebtoken.verify(token,process.env.secret,{},async (err,userdata)=>{
        if(err){
            throw err
        }
       const newplace=await temp2.create({
            title:data.title,
            address:data.address,
            price:data.price,
            owner:userdata.id,
            photos:data.addphoto,
            description:data.description,
            perks:data.perk,
            extrainfo:data.extrainfo,
            checkin:data.checkin,
            checkout:data.checkout,
            maxguest:data.maxguest
        })
        res.status(200).json({
            temp48:'hello',
            data:newplace
        })
    })
}
module.exports=temp18