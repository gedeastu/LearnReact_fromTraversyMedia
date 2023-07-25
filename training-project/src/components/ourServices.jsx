import React from 'react'
import './navbar.css'
import { useState,useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
const OurServices = () => {
  // const scrollBehaviour = useRef(null);
  // const scrollToTarget = (ref) =>  {
  //   scrollBehaviour.current.scrollIntoView(
  //     {
  //       top: ref.offsetTop,
  //       left: 0,
  //       behaviour : 'smooth'
  //     }
  //   )
  // }
  // const [bounceAnimated, setBounceAnimated] = useState(false)
  // const handleOnChange = () => {
  //   setBounceAnimated(!bounceAnimated)
  // }
  return(
    <>
    <div className='w-full h-screen bg-[#32495E]'>
      <Link to="title" smooth={true} duration={600} className='mx-auto justify-center relative hidden md:flex'>
      <div className='bg-[#F2C94C] animate-bounce p-3 flex -top-7 justify-center items-center absolute w-14 h-14 rounded-full'>
      <svg width="28" height="38" viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.9999 7C13.6905 7 13.3938 7.12291 13.175 7.3417C12.9562 7.5605 12.8333 7.85724 12.8333 8.16666V10.5C12.8333 10.8094 12.9562 11.1062 13.175 11.325C13.3938 11.5437 13.6905 11.6667 13.9999 11.6667C14.3093 11.6667 14.6061 11.5437 14.8249 11.325C15.0437 11.1062 15.1666 10.8094 15.1666 10.5V8.16666C15.1666 7.85724 15.0437 7.5605 14.8249 7.3417C14.6061 7.12291 14.3093 7 13.9999 7ZM13.9999 2.33333C11.834 2.33333 9.75676 3.19374 8.22521 4.72529C6.69367 6.25684 5.83325 8.33406 5.83325 10.5V17.5C5.83325 19.6659 6.69367 21.7432 8.22521 23.2747C9.75676 24.8062 11.834 25.6667 13.9999 25.6667C16.1659 25.6667 18.2431 24.8062 19.7746 23.2747C21.3062 21.7432 22.1666 19.6659 22.1666 17.5V10.5C22.1666 8.33406 21.3062 6.25684 19.7746 4.72529C18.2431 3.19374 16.1659 2.33333 13.9999 2.33333ZM19.8333 17.5C19.8333 19.0471 19.2187 20.5308 18.1247 21.6248C17.0307 22.7187 15.547 23.3333 13.9999 23.3333C12.4528 23.3333 10.9691 22.7187 9.87513 21.6248C8.78117 20.5308 8.16659 19.0471 8.16659 17.5V10.5C8.16659 8.9529 8.78117 7.46917 9.87513 6.37521C10.9691 5.28124 12.4528 4.66666 13.9999 4.66666C15.547 4.66666 17.0307 5.28124 18.1247 6.37521C19.2187 7.46917 19.8333 8.9529 19.8333 10.5V17.5Z" fill="#32495E"/>
      <path d="M14 38L11.4019 33.5L16.5981 33.5L14 38Z" fill="#32495E"/>
      </svg>
      </div>
      </Link>
      <article className='px-32 py-20 font-TThoves'>
      <h1 id='title' name="title" className='text-white font-semibold text-5xl'>
        Our Services
      </h1>
      </article>
    </div>
    </>
  )
}

export default OurServices;
