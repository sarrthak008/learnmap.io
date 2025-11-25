import React from 'react'
import { useStore } from '../context/Store'
import { toast } from 'sonner'
import DarkVeil from '../components/DarkVeil'
import NavBar from '../components/NavBar'
import { HEADING, SUBHEADING } from '../config/Brand'
import AppButton from '../components/AppButton'
import HomeButton from '../components/HomeButton'
import Modal from '../components/Modal'

const Home = () => {

  const {isModalOpen} = useStore();


  return (
    <div className='h-screen w-screen relative'>
         <div className='absolute top-0 left-0 h-full w-full'>
            <DarkVeil/>
         </div>
        <div className='absolute top-0 left-0 h-full w-full flex items-center justify-center flex-col'>
            <NavBar/>
            <h3 className='text-5xl md:text-7xl text-white text-center w-[80%]'>{HEADING}</h3>
            <p className='text-center  text-gray-400 font-light mt-5'>{SUBHEADING}</p>
            <div className='mt-10'>
               <div>
                 <HomeButton title={"Generate Roadmap free"}/>
               </div>
            </div>
        </div>
        {isModalOpen ? <Modal/> :null}
    </div>
  )
}

export default Home