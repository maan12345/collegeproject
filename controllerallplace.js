const temp2=require('./modelplace.js')
const temp12=require('./modeluser.js')
const temp18=async function(req,res){
    const allplacedata=await temp2.find()
    res.status(200).json({
        temp48:'hello',
        data:allplacedata
    })
}
module.exports=temp18