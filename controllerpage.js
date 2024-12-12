const temp2=require('./modeluser.js')
const temp12=require('./modelplace.js')
const temp18=async function(req,res){
    const {id}=req.params
    const detail=temp12.findById(id)
    res.status(200).json({
        temp48:'hello',
        data:detail,
    })
}
module.exports=temp18