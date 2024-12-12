import {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Locationma from './Locationma.js'
import {differenceInCalendarDays} from 'date-fns'
import {format} from 'date-fns'
import Imagegall from './Imagegall.js'
function Specibookinpage(){
    const {id}=useParams()
    const [place,setplace]=useState(null)
    useEffect(function(){
        if(id){
            console.log(id)
            const fetchPl=async function(){
            const placespeci=await axios.get('http://localhost:4000/app/v1/bookin')
                //console.log(response.data)
                const ourplace=placespeci.data?.data.find(function(b){
                    return b._id=id
                })
            console.log(placespeci.data?.data)
            console.log(ourplace)
            if(ourplace){
                setplace(ourplace)
            }
        }
        fetchPl()
        }
    })
    if(!place){
        return ''
    }
    return(
        <div className='my-8'>
          <h1 className='text-3xl'>{place.place.title}</h1>
          <Locationma className='my-2 block' place={place.place}></Locationma>
          <div className='bg-gray-200 flex p-6 my-6 rounded-2xl items-center justify-between'>
            <div>
             <h2 className='text-xl mb-4'>your booking information</h2>
             </div>
             <div className='flex gap-1 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
                {differenceInCalendarDays(new Date(place.checkout),new Date(place.checkin))} night |
                <div className='flex gap-1 items-center ml-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
               </svg>
                {format(new Date(place.checkin),'yyyy-MM-dd')}  
                </div>
                &rarr;  
                <div className='flex gap-1 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
               </svg>
                {format(new Date(place.checkout),'yyyy-MM-dd')}
                </div>
                <div className='bg-primary p-6 text-white rounded-2xl'>
                    <div> total price</div>
                    <div className='text-2xl'> ${place.price}</div>
                </div>
                </div>
          </div>
          <Imagegall place={place.place}></Imagegall>
        </div>
    )
}
export default Specibookinpage