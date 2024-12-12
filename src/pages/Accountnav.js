import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
function Accountnav(){
    //const {subpage}=useParams()
    const {pathname}=useLocation()
    let subpage=pathname.split('/')?.[2]
    function linkclass(typeofselect=null){
        let classel='inline-flex gap-1 py-2 px-6 rounded-full';
        if(typeofselect==subpage || (subpage==undefined && typeofselect=='profile')){
           classel=classel+' bg-primary text-white rounded-full'
        }
        else{
           classel=classel+' bg-gray-200'
        }
           return classel
       }
    return(
            <div>
          <nav className='w-full flex mt-8 mb-8 gap-2 justify-center'>
            <Link /*className='py-2 px-6 bg-primary text-white rounded-full'*/className={linkclass('profile')} to={'/account'}> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
            My profile</Link>
           <Link /*className='py-2 px-6'*/ to={'/account/booking'} className={linkclass('booking')}> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>
           My booking</Link>
           <Link /*className='py-2 px-6'*/ className={linkclass('place')} to={'/account/place'}> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
           My accomodation</Link>
          </nav>
        </div>
    )
}
export default Accountnav