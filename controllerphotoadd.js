const temp2=require('./modelplace.js')
const temp12=require('image-downloader')
const temp18=async function(req,res){
    const photolink=req.body.link
    console.log(__dirname)
    console.log(photolink)
    const newname='photo'+Date.now()+'.jpg'
    console.log
    await temp12.image({
        url:photolink,
        dest:__dirname+'/upload/'+newname
    })
    res.status(200).json({
        temp48:'hello',
        data:newname
    })
}
module.exports=temp18