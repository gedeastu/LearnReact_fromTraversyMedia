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
   <header className='grid relative grid-cols-1 md:grid-cols-2'>
        <div id='part1' className='bg-[#E95258] h-screen relative max-w-full group md:h-[55rem]'>
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
        <div id='part2' className='bg-[#F9F9F9] h-screen relative max-w-full group md:h-[55rem]'>
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
        <div className='flex flex-row gap-3 items-center bottom-5 left-5 absolute z-40 md:right-5 md:flex-row-reverse'>
        <input type="checkbox" id='sosmed' className='peer hidden'/>
        <label htmlFor='sosmed' className='bg-[#E95258] p-3 border border-white rounded-full duration-200 peer:transition-all peer-checked:rotate-90'>
        <svg className='' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="12" r="2" fill="white"/>
        <circle cx="12" cy="12" r="2" fill="white"/>
        <circle cx="18" cy="12" r="2" fill="white"/>
        </svg> 
        </label>
        <div className='invisible gap-3 flex flex-row duration-500 opacity-0 peer-checked:opacity-100 peer-checked:flex peer-checked:visible peer-checked:flex-row'>
        <div id='wa' className='bg-[#14AC51] rounded-full p-3 h-12 w-12 flex items-center justify-center'>
        <svg width="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0859 2.90685C16.1634 1.98268 15.0658 1.24988 13.8567 0.750912C12.6476 0.251943 11.3511 -0.00327912 10.0421 3.18051e-05C4.55351 3.18051e-05 0.0854131 4.44582 0.0831946 9.91059C0.0831946 11.6571 0.541319 13.3617 1.41209 14.8653L0 20L5.27897 18.6211C6.73919 19.4122 8.37513 19.8271 10.0377 19.8278H10.0421C15.5296 19.8278 19.9977 15.382 20 9.91722C20.0037 8.61504 19.7481 7.32503 19.248 6.12175C18.7478 4.91847 18.013 3.82578 17.0859 2.90685ZM10.0421 18.1552H10.0388C8.5563 18.1554 7.10108 17.7584 5.82583 17.006L5.52412 16.8271L2.39156 17.6452L3.22684 14.6059L3.0305 14.2946C2.20165 12.9813 1.76287 11.4615 1.76483 9.91059C1.76705 5.36876 5.47974 1.67369 10.0455 1.67369C11.1328 1.67128 12.2098 1.88354 13.2142 2.29816C14.2186 2.71279 15.1304 3.32156 15.8968 4.08923C16.6673 4.85324 17.278 5.76166 17.6937 6.762C18.1093 7.76233 18.3216 8.83473 18.3183 9.91722C18.3161 14.4591 14.6034 18.1552 10.0421 18.1552ZM14.5823 11.985C14.3327 11.8602 13.1103 11.2619 12.8818 11.1791C12.6544 11.0963 12.4892 11.0554 12.3228 11.3027C12.1564 11.55 11.6794 12.1075 11.5341 12.2731C11.3888 12.4387 11.2435 12.4586 10.995 12.335C10.7465 12.2113 9.94452 11.9497 8.99388 11.1062C8.254 10.4493 7.75484 9.63901 7.60952 9.39061C7.46421 9.14221 7.59399 9.00863 7.71934 8.88498C7.83138 8.77458 7.96782 8.59573 8.09205 8.45111C8.21629 8.30649 8.25733 8.20382 8.34053 8.03822C8.42372 7.87262 8.38268 7.72799 8.31945 7.60435C8.25733 7.4796 7.75927 6.26079 7.55184 5.76509C7.35107 5.28485 7.14585 5.34889 6.99278 5.34226C6.83424 5.33581 6.67557 5.33286 6.5169 5.33343C6.39073 5.33663 6.26658 5.36574 6.15225 5.41893C6.03791 5.47213 5.93584 5.54826 5.85246 5.64255C5.62395 5.89095 4.98169 6.48931 4.98169 7.70812C4.98169 8.92693 5.87353 10.1049 5.99777 10.2705C6.12201 10.4361 7.75262 12.9366 10.2485 14.0097C10.843 14.2647 11.3067 14.4171 11.6672 14.5319C12.2629 14.7207 12.8053 14.6931 13.2346 14.6302C13.7127 14.5595 14.7066 14.0318 14.914 13.4533C15.1214 12.8748 15.1214 12.3791 15.0593 12.2753C14.9972 12.1716 14.8297 12.1086 14.5823 11.985Z" fill="white"/>
        </svg>
        </div>
        <div id='jamWrite' className='bg-[#4598FF] rounded-full p-3 h-12 w-12 flex items-center justify-center'>
        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.7888 1.47999L21.3788 2.06999C22.1918 2.88399 22.0688 4.32699 21.1018 5.29299L8.93481 17.46L4.99281 18.902C4.49781 19.084 4.01581 18.848 3.91781 18.377C3.88469 18.2061 3.90028 18.0294 3.96281 17.867L5.43281 13.891L17.5658 1.75699C18.5328 0.790995 19.9758 0.666995 20.7888 1.48099V1.47999ZM8.40381 2.68999C8.53513 2.68999 8.66517 2.71586 8.78649 2.76612C8.90782 2.81637 9.01806 2.89003 9.11092 2.98289C9.20377 3.07575 9.27743 3.18599 9.32769 3.30731C9.37794 3.42864 9.40381 3.55867 9.40381 3.68999C9.40381 3.82132 9.37794 3.95135 9.32769 4.07268C9.27743 4.194 9.20377 4.30424 9.11092 4.3971C9.01806 4.48996 8.90782 4.56362 8.78649 4.61387C8.66517 4.66413 8.53513 4.68999 8.40381 4.68999H4.40381C3.87338 4.68999 3.36467 4.90071 2.98959 5.27578C2.61452 5.65085 2.40381 6.15956 2.40381 6.68999V18.69C2.40381 19.2204 2.61452 19.7291 2.98959 20.1042C3.36467 20.4793 3.87338 20.69 4.40381 20.69H16.4038C16.9342 20.69 17.443 20.4793 17.818 20.1042C18.1931 19.7291 18.4038 19.2204 18.4038 18.69V14.69C18.4038 14.4248 18.5092 14.1704 18.6967 13.9829C18.8842 13.7954 19.1386 13.69 19.4038 13.69C19.669 13.69 19.9234 13.7954 20.1109 13.9829C20.2985 14.1704 20.4038 14.4248 20.4038 14.69V18.69C20.4038 19.7509 19.9824 20.7683 19.2322 21.5184C18.4821 22.2686 17.4647 22.69 16.4038 22.69H4.40381C3.34294 22.69 2.32553 22.2686 1.57538 21.5184C0.825236 20.7683 0.403809 19.7509 0.403809 18.69V6.68999C0.403809 5.62913 0.825236 4.61171 1.57538 3.86157C2.32553 3.11142 3.34294 2.68999 4.40381 2.68999H8.40381Z" fill="white"/>
        </svg>
        </div>
        <div id='telephone' className='bg-[#32495E] rounded-full p-3 h-12 w-12 flex items-center justify-center'>
        <svg width="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.23 12.26L13.69 11.97C13.3914 11.9349 13.0886 11.968 12.8046 12.0667C12.5206 12.1654 12.2626 12.3272 12.05 12.54L10.21 14.38C7.37123 12.9362 5.06382 10.6288 3.62004 7.79L5.47004 5.94C5.90004 5.51 6.11004 4.91 6.04004 4.3L5.75004 1.78C5.69335 1.29217 5.45923 0.842232 5.09228 0.515843C4.72532 0.189454 4.25115 0.00941225 3.76004 0.00999592H2.03004C0.900041 0.00999592 -0.0399593 0.949996 0.0300407 2.08C0.560041 10.62 7.39004 17.44 15.92 17.97C17.05 18.04 17.99 17.1 17.99 15.97V14.24C18 13.23 17.24 12.38 16.23 12.26Z" fill="white"/>
        </svg>
        </div>
        <div id='instagram' className='bg-[#32495E] rounded-full p-3 h-12 w-12 flex items-center justify-center'>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0001 5.19297C7.33995 5.19297 5.19308 7.33984 5.19308 10C5.19308 12.6602 7.33995 14.807 10.0001 14.807C12.6603 14.807 14.8071 12.6602 14.8071 10C14.8071 7.33984 12.6603 5.19297 10.0001 5.19297ZM10.0001 13.1242C8.2798 13.1242 6.87589 11.7203 6.87589 10C6.87589 8.27969 8.2798 6.87578 10.0001 6.87578C11.7204 6.87578 13.1243 8.27969 13.1243 10C13.1243 11.7203 11.7204 13.1242 10.0001 13.1242ZM15.004 3.87578C14.3829 3.87578 13.8814 4.37734 13.8814 4.99844C13.8814 5.61953 14.3829 6.12109 15.004 6.12109C15.6251 6.12109 16.1267 5.62187 16.1267 4.99844C16.1269 4.85095 16.0979 4.70489 16.0416 4.56859C15.9852 4.4323 15.9026 4.30847 15.7983 4.20419C15.694 4.0999 15.5701 4.01721 15.4339 3.96086C15.2976 3.90451 15.1515 3.87559 15.004 3.87578ZM19.3704 10C19.3704 8.70625 19.3821 7.42422 19.3095 6.13281C19.2368 4.63281 18.8946 3.30156 17.7978 2.20469C16.6985 1.10547 15.3696 0.765623 13.8696 0.692967C12.5759 0.620311 11.2939 0.63203 10.0025 0.63203C8.7087 0.63203 7.42667 0.620311 6.13527 0.692967C4.63527 0.765623 3.30402 1.10781 2.20714 2.20469C1.10792 3.3039 0.76808 4.63281 0.695424 6.13281C0.622767 7.42656 0.634486 8.70859 0.634486 10C0.634486 11.2914 0.622767 12.5758 0.695424 13.8672C0.76808 15.3672 1.11027 16.6984 2.20714 17.7953C3.30636 18.8945 4.63527 19.2344 6.13527 19.307C7.42902 19.3797 8.71105 19.368 10.0025 19.368C11.2962 19.368 12.5782 19.3797 13.8696 19.307C15.3696 19.2344 16.7009 18.8922 17.7978 17.7953C18.897 16.6961 19.2368 15.3672 19.3095 13.8672C19.3845 12.5758 19.3704 11.2937 19.3704 10ZM17.3079 15.5266C17.1368 15.9531 16.9306 16.2719 16.6001 16.6C16.2696 16.9305 15.9532 17.1367 15.5267 17.3078C14.2939 17.7977 11.3665 17.6875 10.0001 17.6875C8.6337 17.6875 5.70402 17.7977 4.47121 17.3102C4.04464 17.1391 3.72589 16.9328 3.39777 16.6023C3.0673 16.2719 2.86105 15.9555 2.68996 15.5289C2.20246 14.2937 2.31261 11.3664 2.31261 10C2.31261 8.63359 2.20246 5.7039 2.68996 4.47109C2.86105 4.04453 3.0673 3.72578 3.39777 3.39765C3.72824 3.06953 4.04464 2.86094 4.47121 2.68984C5.70402 2.20234 8.6337 2.3125 10.0001 2.3125C11.3665 2.3125 14.2962 2.20234 15.529 2.68984C15.9556 2.86094 16.2743 3.06719 16.6025 3.39765C16.9329 3.72812 17.1392 4.04453 17.3103 4.47109C17.7978 5.7039 17.6876 8.63359 17.6876 10C17.6876 11.3664 17.7978 14.2937 17.3079 15.5266Z" fill="white"/>
        </svg>
        </div>
        </div>
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
