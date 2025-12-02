import React from 'react'
import { BRAND_NAME } from '../config/Brand'
import { Link } from 'react-router-dom'
import { useStore } from '../context/Store'
import LOGO from "../assets/icon.png"


const NavBar = () => {

  const { isLogin ,setIsModalOpen} = useStore();


  return (
    <div className='h-14 w-screen backdrop-blur-lg z-[999999] fixed top-0 bg-gray-300/20 text-white flex items-center justify-between'>
      <h3 className='text-xl  hidden md:block md:text-2xl ml-1 md:ml-4'>{BRAND_NAME}</h3>
      <span className=' md:hidden h-[40px] w-[40px] overflow-hidden flex items-center'>
         <img src={LOGO}/>
      </span>
      <div className='mr-1 flex gap-2 md:gap-6 items-center justify-center'>
        <Link to='/'>Home</Link>
        {
          isLogin ?
            <>
              <Link to='/dashboard'>Dashboard</Link>
              <Link to='/explore'>Explore</Link>
              <span className='cursor-pointer' onClick={()=>setIsModalOpen(true)}>More</span>
            </>
            :
            <>
              <Link to='/'>Explore</Link>
              <Link to='/register'>Register</Link>
              <Link to='/login'>Login</Link>
            </>

        }
      </div>
    </div>
  )
}

export default NavBar