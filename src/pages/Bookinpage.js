import Accountnav from './Accountnav.js'
import axios from 'axios'
import Placeimage from './Placeimage.js'
import {format} from 'date-fns'
import {differenceInCalendarDays} from 'date-fns'
import {useEffect} from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
function Bookinpage(){
    const [place,setplace]=useState([])
    useEffect(function(){
       axios.get('http://localhost:4000/app/v1/bookin').then(response=>{
             console.log(response.data)
             console.log(response.data?.data)
             setplace(response.data?.data)
       })
    },[])
    return(
        <div>
        <Accountnav></Accountnav>
        <div>
            {place.length>0 && place.map(function(b){
                return <Link to={'/account/booking/'+b._id} className='flex gap-4 bg-gray-200 rounded-2xl overflow-hidden'>
                    <div className='w-48'>
                       <Placeimage place={b.place}></Placeimage> 
                    </div>
                    <div className='py-3 grow pr-3'>
                        <h2 className='text-xl'> {b.place.title}</h2>
                <div className='text-xl'> 
                <div className='flex gap-1 mb-2 mt-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
                {differenceInCalendarDays(new Date(b.checkin),new Date(b.checkout))} night |
                <div className='flex gap-1 items-center ml-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
               </svg>
                {format(new Date(b.checkin),'yyyy-MM-dd')}  
                </div>
                &rarr;  
                <div className='flex gap-1 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
               </svg>
                {format(new Date(b.checkout),'yyyy-MM-dd')}
                </div>
                </div>
                <div className='flex gap-1'>
                Total price : ${b.price}
                </div>
                </div>
                </div>
                </Link>
            })}
        </div>
          my bookings  
        </div>
    )
}
export default Bookinpage