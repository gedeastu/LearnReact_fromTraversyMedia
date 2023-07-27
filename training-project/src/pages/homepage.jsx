import React from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'
import OurServices from '../components/ourServices'
import OurSpecialist from '../components/ourSpecialist'
const Homepage = () => {
  return (
    <>
    <div className='w-screen h-screen relative'>
    <Navbar/>
    <Header/>
    <main className='flex flex-col h-screen'>
    <OurServices/>
    <OurSpecialist/>
    </main>
    </div>
    </>
  )
}

export default Homepage