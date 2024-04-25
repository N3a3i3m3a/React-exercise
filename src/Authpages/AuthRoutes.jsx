import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthRoutes = () => {
  return (
    <div className="bg-green-300 h-screen flex justify-center items-center border border-red-500">
  <section className="text-center w-[50%] p-8 rounded-lg bg-orange-300 border border-blue-600"><Outlet/></section>
  </div>
  )
}

export default AuthRoutes