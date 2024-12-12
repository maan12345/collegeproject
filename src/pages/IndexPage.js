import {Link,useActionData } from 'react-router-dom'
import axios from 'axios'
import {useState} from 'react'
import {useEffect} from 'react'
function IndexPage(){
    const [place,setallplace]=useState([])
    useEffect(function(){
        axios.get('http://localhost:4000/app/v1/allplace').then(response => {
              setallplace(response.data?.data)
        })
    },[])
    return(
        <div>
        <div className='grid grid-cols-2 gap-x-6 gap-y-8 mt-8 md:grid-cols-3 lg:grid-cols-4'>
            {place.length>=0 && place.map(function(b){
                return <Link to={'/place/'+b._id}>
                    <div className='bg-gray-500 rounded-2xl flex'>
                    {b.photos?.[0] && (<img src={'http://localhost:4000/upload/'+b.photos?.[0]} className='rounded-2xl object-cover aspect-square'></img>)}
                    </div>
                    <h3 className='font-bold'> {b.address}</h3>
                    <h2 className='text-sm text-gray-500'> {b.title}</h2>
                    <div className='mt-1'> <span className='font-bold'>${b.price}</span> per night </div>
                    </Link>
            })}
        </div>
        </div>
    )
}
export default IndexPage