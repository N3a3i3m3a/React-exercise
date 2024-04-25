import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
   <section className='bg-red-300 border-blue-600'>
    <div>
        <Header/>
    </div>
    <div>  
        <Navbar/>
    </div> 
    <div className='border p-48 border-blue-600 bg-orange-300' > 
        <Outlet/>
    </div>
  </section> 
  )
}

export default Layout