import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <section className='text-blue-700 flex flex-col space '>
      <div>
       <Link to="/Home" >Home</Link>
       </div>
       <div>
       <Link to="/About">About me</Link>
       </div>
       <div>
       <Link to="/contact">Contact me</Link>
       </div>
       <div>
        <Link to="/Login">Login</Link>
       </div>
    </section>
  )
}

export default Navbar