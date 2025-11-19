import React from 'react'
import NavBar from '../components/NavBar'
import Modal from '../components/Modal'
import { useState } from 'react'
import { useStore } from '../context/Store'
import RoadMapCardSckleton from '../components/RoadMapCardSckleton'

const Dashboard = () => {

  const {isModalOpen,scklatonCount} = useStore();
  

  return (
    <div className='h-screen w-screen overflow-hidden '>
       <NavBar/>
       <div className='h-20 w-screen mt-25 flex gap-10'>
         <span className='text-gray-400 text-xl ml-4 cursor-pointer'>My RoadMaps</span>
         <span className='text-blue-500 text-xl cursor-pointer'>Create new Road map</span>
       </div>
         
         <div className='flex gap-10 flex-wrap'>
          {scklatonCount?.map(()=><RoadMapCardSckleton/>)}
         </div>
       
       {isModalOpen ? <Modal/> :null}
    </div>
  )
}

export default Dashboard