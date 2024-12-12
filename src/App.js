import logo from './logo.svg';
import './App.css';
import {Router} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import IndexPage from './pages/IndexPage.js'
import LoginPage from './pages/LoginPage.js' 
import Layout from './Layout.js'
import Accountpage from './pages/Accountpage.js'
import Registerpage from './pages/Registerpage.js'
import axios from 'axios'
import Usercontextprovider from './Usercontext.js'
import Placepage from './pages/Placepage.js'
import Placepageform from './pages/Placepageform.js'
import Speciplacepage from './pages/Speciplacepage.js'
import Bookinpage from './pages/Bookinpage.js'
import Specibookinpage from './pages/Specibookinpage.js'
axios.defaults.withCredentials=true
function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    /*<div>
    <div>
    <div> hello</div>
    <header className='p-4 flex justify-between'>
      <a href='' className='flex items-center gap-1'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>
     <span className='font-bold text-xl'> hotel.com</span>
      </a>
      <div className='flex border-gray-300 rounded-full gap-2 py-2 px-4 shadow-md shadow-gray-300'>
        <div> anywhere</div>
        <div className='border border-l border-gray-300'></div>
        <div> any week</div>
        <div className='border border-l border-gray-300'></div>
        <div> add guests</div>
        <button className='bg-primary text-white p-1 rounded-full'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
      </button>
      </div>
      <div className='flex border items-center border-gray-300 rounded-full gap-2 py-2 px-4'>
        <div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      </div>
      <div className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 relative top-1">
  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
</svg>
      </div>
      </div>
    </header>
    </div>*/
    <Usercontextprovider>
      <div>
    <Routes>
      <Route path='/' element={<Layout> </Layout>}>
      <Route index element={<IndexPage></IndexPage>}></Route>
      <Route path='/login' element={<LoginPage></LoginPage>}> </Route>
      <Route path='/register' element={<Registerpage></Registerpage>}></Route>
      <Route path='/account?' element={<Accountpage></Accountpage>}></Route>
      <Route path='/account/place' element={<Placepage> </Placepage>}></Route>
      <Route path='/account/place/new' element={<Placepageform></Placepageform>}></Route>
      <Route path='/account/place/:id' element={<Placepageform></Placepageform>}></Route>
      <Route path='/place/:id' element={<Speciplacepage></Speciplacepage>}></Route>
      <Route path='/account/booking' element={<Bookinpage></Bookinpage>}></Route>
      <Route path='/account/booking/:id' element={<Specibookinpage></Specibookinpage>}></Route>
      </Route>
    </Routes>
    </div>
    </Usercontextprovider>
  );
}

export default App;
