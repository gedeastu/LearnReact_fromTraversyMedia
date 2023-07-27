import React from 'react'
import './ourServices.css'
import { useState,useRef } from 'react';
import cardioImage from '../assets/cardioimage.jpg'
import { Link, animateScroll as scroll } from 'react-scroll';
import DataOurServices from '../data/dataOurServices';
const OurServices = () => {
  return(
    <>
    <div className='w-full h-[125rem] bg-[#32495E] md:h-[50rem]'>
      <Link to="title" smooth={true} duration={600} className='mx-auto justify-center relative hidden md:flex'>
      <div className='bg-[#F2C94C] animate-bounce p-3 flex -top-7 justify-center items-center absolute w-14 h-14 rounded-full'>
      <svg width="28" height="38" viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.9999 7C13.6905 7 13.3938 7.12291 13.175 7.3417C12.9562 7.5605 12.8333 7.85724 12.8333 8.16666V10.5C12.8333 10.8094 12.9562 11.1062 13.175 11.325C13.3938 11.5437 13.6905 11.6667 13.9999 11.6667C14.3093 11.6667 14.6061 11.5437 14.8249 11.325C15.0437 11.1062 15.1666 10.8094 15.1666 10.5V8.16666C15.1666 7.85724 15.0437 7.5605 14.8249 7.3417C14.6061 7.12291 14.3093 7 13.9999 7ZM13.9999 2.33333C11.834 2.33333 9.75676 3.19374 8.22521 4.72529C6.69367 6.25684 5.83325 8.33406 5.83325 10.5V17.5C5.83325 19.6659 6.69367 21.7432 8.22521 23.2747C9.75676 24.8062 11.834 25.6667 13.9999 25.6667C16.1659 25.6667 18.2431 24.8062 19.7746 23.2747C21.3062 21.7432 22.1666 19.6659 22.1666 17.5V10.5C22.1666 8.33406 21.3062 6.25684 19.7746 4.72529C18.2431 3.19374 16.1659 2.33333 13.9999 2.33333ZM19.8333 17.5C19.8333 19.0471 19.2187 20.5308 18.1247 21.6248C17.0307 22.7187 15.547 23.3333 13.9999 23.3333C12.4528 23.3333 10.9691 22.7187 9.87513 21.6248C8.78117 20.5308 8.16659 19.0471 8.16659 17.5V10.5C8.16659 8.9529 8.78117 7.46917 9.87513 6.37521C10.9691 5.28124 12.4528 4.66666 13.9999 4.66666C15.547 4.66666 17.0307 5.28124 18.1247 6.37521C19.2187 7.46917 19.8333 8.9529 19.8333 10.5V17.5Z" fill="#32495E"/>
      <path d="M14 38L11.4019 33.5L16.5981 33.5L14 38Z" fill="#32495E"/>
      </svg>
      </div>
      </Link>
      <article className='font-TThoves w-full h-full py-10 gap-10 flex flex-col items-start md:px-14 md:py-20 md:gap-14'>
      <div className='flex flex-row w-full justify-between items-center'>
      <h1 id='title' name="title" className='text-white font-semibold text-5xl text-left'>
        Our Services
      </h1>
      <button className='text-white font-TThoves border border-white rounded-full py-3 px-7 font-medium'>All Services</button>
      </div>
      <div className='w-full flex flex-col items-center gap-40 md:flex-row md:gap-0 md:h-max md:justify-between'>
      {DataOurServices.map((data)=>(
          <div key={data.id} className='group text-white relative w-max flex flex-col items-center'>
          <div id='bgImage' className="h-72 w-96 flex flex-col bg-center bg-cover justify-center items-center transition-all ease-in-out before:opacity-0 group-hover:before:transition-all group-hover:before:duration-300 group-hover:before:w-full group-hover:before:h-full group-hover:before:bg-[#32495E] group-hover:before:opacity-40">
          <svg className='h-16 transition-all top-20 ease-in-out absolute opacity-0 group-hover:opacity-100' dangerouslySetInnerHTML={{__html: data.icon}}></svg>
          </div>
          <div id="desc" className='w-96 h-48 absolute translate-y-[17rem]'>
          <div className="w-full h-full flex flex-col items-center justify-center bottom-0 transition-all group-hover:-translate-y-10 group-hover:bg-[#E95258]">
          <h1 className='font-bold text-2xl text-left pb-3'>{data.services}</h1>
          <p className='w-[20rem] text-left text-md text-transparent transition-all group-hover:text-white group-hover:ease-in-out'>{data.desc}</p>
          </div>
          </div>
          </div>
      ))}
      </div>
      </article>
    </div>
    </>
  )
}

export default OurServices;
