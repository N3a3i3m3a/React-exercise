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
    <div className='flex justify-between mx-5'>
    <div class>  
        <Navbar/>
    </div> 
    <div className='border p-48 border-blue-600 rounded-md h-[87vh] w-[80%] mt-5 bg-orange-300' > 
        <Outlet/>
    </div>
    </div>
  </section> 
  )
}

export default Layout