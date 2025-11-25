import React from 'react'
import USERIMG from "../assets/demon.png"
import { useStore } from '../context/Store'
import AppButton from "./AppButton"

const Modal = () => {

    const {user , setIsModalOpen} = useStore()

  return (
    <div className='z-50 h-screen w-screen flex items-center justify-center fixed top-0 left-0 backdrop-blur-md'>
         <div className='h-[300px] w-[80vw] md:w-[20vw] bg-gray-700 rounded-2xl relative flex items-center justify-center flex-col'>
            <i className="ri-close-line absolute top-2 right-2 cursor-pointer text-white text-2xl" onClick={()=>setIsModalOpen(false)}></i>
            <div className='h-[70px] w-[70px] rounded-full bg-gray-400 overflow-hidden'>
              <img src={USERIMG} className='h-full w-full object-cover'/>
            </div>
            <h3 className='text-white text-2xl mt-4'>{user?.name}</h3>
            <p className='text-gray-400 text-xl mt-1'>{user?.email}</p>

            <div className='h-[2px] w-[90%] bg-white/50 mt-3 rounded-2xl'></div>

             <div className='h-[40px] w-[90%] mt-4'>
               <AppButton title='Logout' icon={<i className="ri-logout-circle-r-fill"></i>}/>
             </div>
             <span className='mt-4 text-red-400 cursor-pointer' onClick={()=>setIsModalOpen(false)}>close !</span>
         </div>
    </div>
  )
}

export default Modal