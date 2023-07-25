import React from 'react'
import './navbar.css'
import { useState } from 'react';
const Navbar = () => {
  const [iconSwap, setIconSwap] = useState(false);
  const handleChange = () => {
    setIconSwap(!iconSwap);
  };
  return(
    <>
    <nav className='absolute z-50 flex flex-row w-full justify-between'>
     <div id="logo" className='pl-5 py-3 flex flex-row items-center gap-3 md:pl-20'>
     <svg width="70" height="45" viewBox="0 0 70 45" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0408694 16.7913C0.464547 22.5686 4.47768 27.1973 12.0803 30.6772C21.1988 20.5193 34.9739 10.2937 53.4055 0C40.7182 5.25532 28.4481 11.9174 16.5949 19.9867C12.4253 16.473 10.6889 13.6455 11.3857 11.5039C12.3565 8.63248 14.71 7.78027 18.4469 8.94744C16.0418 8.5961 14.7734 9.01741 14.6412 10.2113C14.5289 10.9891 14.9886 11.4569 15.4918 11.7932C16.3525 12.3685 17.4686 12.4438 19.2856 12.2591C20.9651 12.1007 22.3638 12.6429 23.4818 13.8858C24.0753 14.2038 24.3742 13.8939 24.3789 12.9562C25.3768 12.9938 26.0134 12.926 26.289 12.753C21.7345 9.9246 18.5317 7.65853 16.6811 5.95502C15.2049 4.88988 17.4069 4.02144 17.5 3.73932C10.6063 2.84002 6.2856 4.83316 4.67123 7.20424C1.26586 10.0439 -0.277672 13.2396 0.0408694 16.7913Z" fill="#32495E"/>
     <path fill-rule="evenodd" clip-rule="evenodd" d="M51.2582 13.0037C40.9435 15.1555 26.5513 24.0352 8.08154 39.6427C25.7356 20.1533 40.397 9.46191 52.0682 7.57094C61.2429 6.42837 67.1851 9.33331 69.8948 16.2862C70.8354 21.9909 65.4722 28.1109 53.8047 34.6462C46.4977 38.9498 40.5556 42.3584 35.9781 44.8718C29.7126 42.2374 23.9248 39.0612 18.6145 35.3432C32.2634 24.7646 41.5241 19.458 46.3963 19.4236C49.5206 18.9208 51.2473 19.9859 51.5765 22.6189C51.4781 24.1728 50.5907 25.3928 48.9142 26.2795C49.1407 24.1259 48.2917 22.7315 46.3674 22.0961C43.312 21.5538 41.3442 22.3671 40.4639 24.5362C38.8341 28.8629 37.4451 31.3904 36.2965 32.1185C34.2002 33.1506 33.3224 34.0803 33.6632 34.9074C34.0934 36.0025 34.489 36.6416 34.8497 36.8247C35.4207 36.0122 35.9511 35.5087 36.4413 35.3141C36.8765 35.7025 36.4039 36.5836 35.0233 37.9578C35.6134 38.4982 36.3753 38.4593 37.3094 37.8415C46.681 31.7668 52.7776 27.9322 55.5993 26.3374C56.4678 25.9309 57.4711 26.4054 58.6089 27.7609C58.8518 26.1391 59.0255 24.1638 59.1296 21.835C61.4195 17.6981 61.6123 14.9093 59.7083 13.4685C57.1207 12.2197 54.3039 12.0647 51.2582 13.0037Z" fill="#F9F9F9"/>
     </svg>
     <h1 className='text-white font-bold text-xl'>TULPAR</h1>
     </div>
     <input id='drawerBtn' type="checkbox" checked={iconSwap} onChange={handleChange} className='peer hidden checked:transition-all duration-200'/>
     <label htmlFor='drawerBtn' className='relative z-50 pr-5 py-3 flex flex-col md:hidden'>
     {iconSwap ? 
     (<svg xmlns="http://www.w3.org/2000/svg" className='fill-[#E95258] fixed right-7' height="48" viewBox="0 -960 960 960" width="48"><path d="m283-345-43-43 240-240 240 239-43 43-197-197-197 198Z"/></svg>) : (<svg xmlns="http://www.w3.org/2000/svg" className='fill-white' height="48" viewBox="0 -960 960 960" width="48"><path d="M120-240v-60h240v60H120Zm0-210v-60h480v60H120Zm0-210v-60h720v60H120Z"/></svg>)
     }
     </label>
     <div className='w-full h-96 bg-white fixed rounded-bl-3xl rounded-br-3xl -top-96 duration-500 peer:transition-all peer-checked:top-0 peer-checked:z-40 peer-checked:shadow-2xl'></div>
     <div className='w-full h-screen bg-black opacity-0 -z-30 fixed duration-500 peer:transition-all peer:ease-in-out peer-checked:z-30 peer-checked:opacity-40'></div>
     <ul className='hidden py-3 pr-20 gap-10 md:flex md:flex-row md:text-[#32495E] md:items-center'>
     <li id='home' className='uppercase'>Home</li>
     <li id='ourServices' className="uppercase flex flex-row items-center gap-2 relative">
     <input id='dropdown' type="checkbox" className='hidden peer'/>
     <label htmlFor='dropdown'>Our Services</label>
     <svg width="10" className='my-auto w-max duration-200 peer-checked:rotate-180 peer:transition-all' viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M2.86603 3.5C2.48113 4.16667 1.51887 4.16667 1.13397 3.5L0.267949 2C-0.116951 1.33333 0.364174 0.5 1.13397 0.5L2.86602 0.5C3.63583 0.5 4.11695 1.33333 3.73205 2L2.86603 3.5Z" fill="#E95258"/>
     </svg>
     <ul id="contentDropdowns" className='absolute w-60 text-center h-0 rounded-lg opacity-0 invisible top-[1.7rem] right-0 duration-300 ease-in-out peer:transition-all peer-checked:overflow-hidden peer-checked:visible peer-checked:h-52 peer-checked:flex peer-checked:flex-col peer-checked:items-center peer-checked:opacity-100 peer-checked:shadow-xl bg-white peer-checked:border peer-checked:border-black peer-checked:border-opacity-10'>
     <li className='normal-case text-md h-14 w-full flex items-center justify-center hover:bg-[#32495E] hover:text-white hover:transition-all hover:duration-100'>
     <p>Trauma-Rehabilitation Center</p>
     </li>
     <li className='normal-case text-md h-14 w-full flex items-center justify-center hover:bg-[#32495E] hover:text-white hover:transition-all hover:duration-100'>
     <p>Trauma-Rehabilitation Center</p>
     </li>
     <li className='normal-case text-md h-14 w-full flex items-center justify-center hover:bg-[#32495E] hover:text-white hover:transition-all hover:duration-100'>
     <p>Trauma-Rehabilitation Center</p>
     </li>
     <li className='normal-case text-md h-14 w-full flex items-center justify-center hover:bg-[#32495E] hover:text-white hover:transition-all hover:duration-100'>
     <p>Trauma-Rehabilitation Center</p>
     </li>
     </ul>
     </li>
     <li id='reports' className="uppercase">
     Reports
     </li>
     <li id='abouUs' className="uppercase flex flex-row items-center gap-2 relative">
     <input id='dropdownAbout' type="checkbox" className='hidden peer'/>
     <label htmlFor='dropdownAbout'>About Us</label>
     <svg width="10" className='my-auto w-max duration-200 peer-checked:rotate-180 peer:transition-all' viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M2.86603 3.5C2.48113 4.16667 1.51887 4.16667 1.13397 3.5L0.267949 2C-0.116951 1.33333 0.364174 0.5 1.13397 0.5L2.86602 0.5C3.63583 0.5 4.11695 1.33333 3.73205 2L2.86603 3.5Z" fill="#E95258"/>
     </svg>
     <div id="contentDropdowns" className='absolute w-full h-0 rounded-lg opacity-0 top-[1.7rem] duration-300 peer:transition-all peer-checked:h-52 peer-checked:flex peer-checked:flex-col peer-checked:opacity-100 peer-checked:shadow-xl bg-white peer-checked:border peer-checked:border-black peer-checked:border-opacity-10'>
     hjhj
     </div>
     </li>
     <li id='news' className="uppercase">
     News
     </li>
     </ul>
    </nav>
    </>
  )
}

export default Navbar;
