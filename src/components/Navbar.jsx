import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <section className='text-blue-700 flex flex-col border-blue-700 h-[50Vh] gap-12 mt-5 '>
      <div className='hover:text-red-500'>
       <Link to="/Home" >Home</Link>
       </div>
       <div className='hover:text-red-500'>
       <Link to="/About">About me</Link>
       </div>
       <div className='hover:text-red-500'>
       <Link to="/contact">Contact me</Link>
       </div>
       <div className='hover:text-red-500'>
        <Link to="/Login">Login</Link>
       </div>
    </section>
  )
}

export default Navbar