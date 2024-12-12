import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Perk from './perk.js'
import {useState} from 'react'
import axios from 'axios'
import Photouploader from './Photouploader.js'
import {Navigate} from 'react-router-dom'
import Placepageform from './Placepageform.js'
import Accountnav from './Accountnav.js'
import {useEffect} from 'react'
function Placepage(){
    //const {action}=useParams()
    const [place,setplace]=useState([]);
    useEffect(function(){
        axios.get('http://localhost:4000/app/v1/place').then(({data})=>{
          setplace(data)
          console.log(data)
        })
    },[])
    return(
        <div>
            <Accountnav></Accountnav>
            <div className='text-center'>
                list of all added place
                <br></br>
              <Link to={'/account/place/new'} className='inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
              add new place</Link>  
            </div>
            <div className='mt-4'>
                {
                    place.length>0  && place.map(b=>(<Link to={'/account/place/'+b._id} className='bg-gray-100 gap-4 flex p-4 rounded-2xl'>
                        <div className='w-32 h-32 bg-gray-300 grow shrink-0'>
                            {b.photos.length>0 && (
                                <img className='object-cover' src={'http://localhost:4000/upload/'+b.photos?.[0]}></img>
                            )}
                        </div>
                        <div className='grow-0 shrink'>
                        <h2 className='text-xl '>{b.title}</h2>
                        <p className='text-sm mt-2'> {b.description}</p>
                        </div>
                    </Link>))
                }
            </div>
            my places
        </div>
    )
}
export default Placepage