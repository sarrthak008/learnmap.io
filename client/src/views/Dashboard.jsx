import React from 'react'
import NavBar from '../components/NavBar'
import Modal from '../components/Modal'
import { useStore } from '../context/Store'
import RoadMapGanratorModal from '../components/RoadMapGanratorModal'
import RoadMapsContainer from '../components/RoadMapsContainer'

const Dashboard = () => {

  const {isModalOpen,isRoadmapGanaratorOpen,setIsRoadmapGanaratorOpen} = useStore();
  

  

  return (
    <div className='h-screen w-screen overflow-hidden '>
       <NavBar/>
       <div className='h-20 w-screen mt-25 flex gap-10'>
         <span className='text-gray-400 text-xl ml-4 cursor-pointer' onClick={()=>setIsRoadmapGanaratorOpen(false)}>My RoadMaps</span>
         <span className='text-blue-500 text-xl cursor-pointer' onClick={()=>setIsRoadmapGanaratorOpen(true)}>Create new Road map</span>
       </div>

         <div className='overflow-x-hidden overflow-y-scroll h-full w-full'>
          {isRoadmapGanaratorOpen ?<RoadMapGanratorModal/> : <RoadMapsContainer/>}
         </div>  
       
       
       {isModalOpen ? <Modal/> :null}
    </div>
  )
}

export default Dashboard