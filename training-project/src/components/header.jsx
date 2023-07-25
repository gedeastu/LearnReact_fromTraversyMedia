import React from 'react'
import './header.css'
import cardio from '../assets/kardio.png'
import rehab from '../assets/rehab.png'
import PropTypes from 'prop-types';
const Header = (props) => {
  const nameService = [
    {
        id: 1,
        name: 'Aubrey Drake Graham'
    },
    {
        id: 2,
        name: 'Abel Makkonen Tesfaye'
    },
    {
        id: 3,
        name: 'Kendrick Lamar Duckworth'
    },
    {
        id: 4,
        name: 'Brian Imanuel Soewarno'
    },
  ]
  return(
   <>
   <header className='grid grid-cols-1 md:grid-cols-2'>
        <div id='part1' className='bg-[#E95258] h-screen relative max-w-full group'>
        <div className='flex flex-col justify-center items-end h-full gap-10 px-5 md:px-28'>
        <div className='text-white font-TThoves font-bold text-right text-4xl md:text-5xl'>
        <h1  className=''>Cardio-Rehabilitation 
        <br />
        Center</h1>
        </div>
        <div className='w-80 text-white font-TThoves font-medium text-right'><p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p></div>
        <ul className='flex flex-col gap-3 justify-center'>
        {/* <li>{props.nameService}</li> */}
        {nameService.map((Name) => (
            <li key={Name.id} className='text-white flex flex-row items-center justify-end gap-2'>
                <p>{Name.name}</p>
                <svg width="6" className='' height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3" cy="3" r="2.5" stroke="#fff"/>
                </svg>
            </li>
        ))}
        </ul>
        <button className='bg-transparent text-white border border-white px-10 py-3 rounded-full'>All Services</button>
        </div>
        <img src={cardio} alt="" className='absolute left-0 bottom-0 w-72 sm:w-max'/>
        </div>
        <div id='part2' className='bg-[#F9F9F9] h-screen relative max-w-full group'>
        <div className='flex flex-col py-32 text-[#32495E] items-start h-full gap-10 px-5 md:px-28 md:justify-center'>
        <div className='text-[#32495E] font-TThoves font-bold text-left text-4xl md:text-5xl'>
        <h1  className=''>Trauma-Rehabilitation
        <br />
        center</h1>
        </div>
        <div className='w-80 text-[#32495E] font-TThoves font-medium text-left'><p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p></div>
        <ul className='flex flex-col gap-3'>
        {/* <li>{props.nameService}</li> */}
        {nameService.map((name) => (
            <li key={name.id} className='text-left text-[#32495E] flex flex-row items-center gap-2 justify-start'>
                <svg width="6" className='' height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3" cy="3" r="2.5" stroke="#32495E"/>
                </svg>
                <p>
                {name.name}
                </p>
            </li>
        ))}
        </ul>
        <button className='bg-transparent text-[#32495E] border border-[#32495E] px-10 py-3 rounded-full'>
            {props.content}
        </button>
        </div>
        <img src={rehab} alt="" className='absolute right-0 bottom-0 w-72 sm:w-max'/>
        <div className='flex flex-row-reverse items-center bottom-0 right-0 absolute z-30'>
        <input type="checkbox" id='sosmed' className='peer hidden'/>
        <label htmlFor='sosmed' className='bg-[#E95258] p-3 border border-white z-50 rounded-full duration-200 peer-checked:rotate-90 peer-checked:transition-all'>
        <svg className='' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="12" r="2" fill="white"/>
        <circle cx="12" cy="12" r="2" fill="white"/>
        <circle cx="18" cy="12" r="2" fill="white"/>
        </svg> 
        </label>
        <div className='hidden peer-checked:flex'>1</div>
        </div>
        </div>
   </header>
   </>
  )
}

// for input any props
Header.defaultProps = {
    // Item props
    // example:
    content: 'All Services',
}

// for built in type for props
Header.propTypes = {
    content : PropTypes.string,
}
export default Header;
