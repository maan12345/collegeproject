const filesys=require('fs')
const temp2=async function(req,res){
    console.log(req)
    const uploadedfile=[]
    for(let i=0;i<req.files.length;i++){
        const filename=req.files[i].path
        const filename2=req.files[i].originalname
        const part=filename2.split('.')
        const typeimg=part[part.length-1]
        const path=filename+'.'+typeimg
        filesys.renameSync(filename,path)
        console.log(path)
        uploadedfile.push(path.replace(/\\/g,'/').replace('upload/',''))
    }
     return res.status(200).json({
        temp48:'hello',
       uploadedfile:uploadedfile 
     })
}
module.exports=temp2