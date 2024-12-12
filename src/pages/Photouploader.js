import {useState} from 'react'
import props from 'react'
import axios from 'axios'
function Photouploader(props){
    const addphoto=props.addphoto
    const setaddedphoto=props.setaddedphoto
    const photolink=props.photolink
    const setphotolink=props.setphotolink
    async function addphotobylink(b){
        b.preventDefault()
        console.log(b)
        const photodata=await axios.post('http://localhost:4000/app/v1/upload-by-link',{
            link:photolink
        })
        console.log(photodata)
        console.log(photodata.data?.data)
        setaddedphoto(prev=>
        [...prev,photodata.data?.data]
    )
        console.log(addphoto)
        setphotolink('')
    }
    async function uploadphoto(b){
           //console.log(b)
           const file=b.target.files
           console.log(file)
           const data=new FormData()
           //data.set('photo[]',file)
           //data.set('photo',[...file])
           //for(const files of file){
           //data.set('photo')
           //}
           for(let i=0;i<file.length;i++){
            data.append('photo',file[i])
           }
           const photodata=await axios.post('http://localhost:4000/app/v1/upload',data,{
            headers:{'Content-type':'multipart/form-data'}
           })
           console.log(photodata)
           console.log(photodata.data?.uploadedfile)
           const filename=photodata.data?.uploadedfile
           console.log(filename)
           setaddedphoto(prev=>{
            return [...prev,...filename]
           })
    }
    function removephoto(b,photo){
        b.preventDefault()
       setaddedphoto([...addphoto.filter(function(b){
        return b!=photo
       })])
    }
    function selectphoto(b,photo){
        b.preventDefault()
        const addphotowithoutselect=addphoto.filter(function(b){
            return b!=photo
        })
        const newaddphoto=[photo,...addphotowithoutselect]
        setaddedphoto(newaddphoto)
    }
    return(
        <div>
        <h2> Photos</h2>
                <p className='text-gray-500 text-sm'> more=better</p>
                <div className='flex gap-2'>
                   <input type='text' placeholder={'add using a link ......jpg'} value={photolink} onChange={function(b){
                     setphotolink(b.target.value)
                   }}></input>
                   <button className='bg-gray-200 px-4 rounded-2xl w-[120px]' onClick={addphotobylink}> add photo</button>
                </div>
                <div className='grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6 mt-2 flex'>
                    {
                     addphoto.length>0 && 
                    addphoto.map(function(b){
                        return <div className='h-32 flex relative'>
                            <img src={'http://localhost:4000/upload/'+b} className='rounded-2xl w-full object-cover h-32'></img>
                            <button onClick={function(e){
                                removephoto(e,b)
                            }} className='absolute bottom-2 right-1 text-white bg-black rounded-2xl bg-opacity-50 py-2 px-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                            </button>
                            <button onClick={function(e){
                                selectphoto(e,b)
                            }}className='absolute bottom-2 left-1 text-white bg-black rounded-2xl bg-opacity-50 py-2 px-3'>
                                {b==addphoto[0] && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                          </svg>
                          )}
                            {
                                b!=addphoto[0] && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                             </svg>
                                )
                            }
                            </button>
                            </div>
                     }
                     )   
                    }
                <label className='border bg-transparent h-32 flex justify-center items-center rounded-2xl p-2 gap-1 text-2xl text-gray-600'>
                    <input type='file' multiple className='hidden' onChange={uploadphoto}></input> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
  </svg>

                    upload</label>
                </div>
                </div>
    )
}
export default Photouploader