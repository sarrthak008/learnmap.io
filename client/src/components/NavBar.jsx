import React from 'react'
import { BRAND_NAME } from '../config/Brand'
import { Link } from 'react-router-dom'
import { useStore } from '../context/Store'


const NavBar = () => {

  const { isLogin ,setIsModalOpen} = useStore();


  return (
    <div className='h-14 w-screen z-[999999] fixed top-0 bg-gray-300/20 text-white flex items-center justify-between'>
      <h3 className='text-2xl ml-4'>{BRAND_NAME}</h3>
      <div className='mr-6 flex gap-6 items-center justify-center'>
        <Link to='/'>Home</Link>
        {
          isLogin ?
            <>
              <Link to='/dashboard'>Dashboard</Link>
              <Link to='/'>Explore</Link>
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