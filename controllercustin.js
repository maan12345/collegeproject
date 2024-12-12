const temp2=require('./modelplace.js')
const temp12=require('./modeluser.js')
const temp28=require('./modelcust.js')
const jsonwebtoken=require('jsonwebtoken')
const temp18=async function(req,res){
    const data=req.body
    console.log(req.body)
    //console.log(req.body.data)
    //console.log(data)
    const token=req.cookies.token
    if(!token){
        return res.status(400).json({
            temp48:'try again',
        })
    }
    const custin=jsonwebtoken.verify(token,process.env.secret)
    console.log(data)
    const userdata=await temp28.create({name:data.name,phoneno:data.phoneno,checkin:data.checkin,custid:custin.id,checkout:data.checkout,noofguest:data.noofguest,place:data.place,price:data.price})
    res.status(200).json({
        temp48:'hello',
        data:userdata,
    })
}
module.exports=temp18