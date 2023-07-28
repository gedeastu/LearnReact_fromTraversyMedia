import React from 'react'
import './ourSpecialist.css'
import { useState,useRef } from 'react';
import DataOurSpecialist from '../data/dataOurSpecialist'
const OurSpecialist = () => {
  return(
    <>
    <div className='w-full md:h-screen'>
      <h1 className='text-[#32495E] font-semibold text-5xl text-left font-TThoves'>Our Specialist</h1>
      {DataOurSpecialist.map((data)=>(
        <div key={data.id} className=''>
         <img src={data.image} alt="" className='w-10 h-10'/>
         <div>{data.name}</div>
        </div>
      ))}
    </div>
    </>
  )
}

export default OurSpecialist;
