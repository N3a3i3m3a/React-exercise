import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import Login from './components/Authpages/Login'

const App = () => {
  return (
    <div className='bg-red-300'>
      <Router>
        <Routes>
          <Route path ='/' element={<Layout/>}>
            <Route path ='/Contact' element={<Contact/>}></Route>
            <Route path ='/Home' element={<Home/>}></Route>
            <Route path ='/About' element={<About/>}></Route>
            <Route path ='/Login' element={<Login/>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App