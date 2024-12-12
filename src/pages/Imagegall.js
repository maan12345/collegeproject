import props from 'react'
import {useState} from 'react'
function Imagegall(props){
    const place=props.place
    const [photo,setphoto]=useState(false)
    function photoall(){
        setphoto(true)
    }
    function closphoto(){
        setphoto(false)
    }
    if(photo==true){
        return(
        <div className='absolute inset-0 bg-black min-h-screen text-white'> 
        show photo
        <div className='bg-black p-8 grid gap-4'>  
            <div> 
            <h2 className='text-3xl mr-48'>photos of {place.title}</h2>
        <button className='flex gap-1 py-2 px-4 right-12 top-8 rounded-2xl fixed shadow shadow-black bg-white text-black' onClick={closphoto}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        close photo</button>
        </div>  
        {place?.photos?.length>0 && place.photos.map(function(b){
            return <div> <img className='object-cover' src={'http://localhost:4000/upload/'+b}></img></div>
        })}  
        </div>      
        </div>
        )
    }
    return(
        <div className='relative'>
            <div className='grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden'>
                <div>
                    {place.photos?.[0] && (
                        <div className='object-cover'><img src={'http://localhost:4000/upload/'+place.photos?.[0]} onClick={photoall}></img></div>)}
                </div>
                <div className='grid'>
                  {place.photos?.[1] && (
                    <div className='object-cover'><img src={'http://localhost:4000/upload/'+place.photos?.[1]} onClick={photoall}></img></div>
                  )}
                  <div className='overflow-hidden'>
                  {place.photos?.[2] && (
                    <div className='object-cover relative top-2'><img src={'http://localhost:4000/upload/'+place.photos?.[2]} onClick={photoall}></img></div>
                  )}
                  </div>
                </div>
            </div>
            <button className='flex gap-1 bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow-md shadow-gray-500 absolute' onClick={photoall}> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            show more photo</button>
            </div>
    )
}
export default Imagegall