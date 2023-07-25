import React from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'
import OurServices from '../components/ourServices'
const Homepage = () => {
  return (
    <>
    <div className='w-screen h-screen relative'>
    <Navbar/>
    <Header/>
    <main>
    <OurServices/>
    </main>
    </div>
    </>
  )
}

export default Homepage