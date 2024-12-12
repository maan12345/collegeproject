const temp2=require('./modelplace.js')
const temp12=require('./modeluser.js')
const temp18=async function(req,res){
    const {id}=req.params
    console.log(id)
    const userdata=await temp2.findById(id)
    res.status(200).json({
        temp48:'hello',
        data:userdata
    })
}
module.exports=temp18