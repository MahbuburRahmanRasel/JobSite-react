import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {
 

  return (
    <div className="App" >
      <Header />
    <div className='min-h-[calc(100vh-256px)]'>
    <Outlet />
    </div>
    <Footer />
    </div>
  )
}

export default App
