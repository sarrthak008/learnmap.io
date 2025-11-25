import React, { useState } from 'react'
import AppButton from './AppButton'
import { toast } from 'sonner';
import axios from 'axios';
import { useStore } from '../context/Store';
const APIURL = import.meta.env.VITE_BACKCNEND_URL


const RoadMapGanaratorUi = ()=>{

  const [input,setInput] = useState(null);
  const [buttonTitle,setButtonTitle] = useState('generate roadmap')
  const {setIsRoadmapGanaratorOpen,token} = useStore();

  const ganarateRoadmap = async ()=>{
     try {
       if(!input){
        toast.error('enter the goal')
       }

       setButtonTitle('processing...')
       const result =  await axios.post(`${APIURL}/ganarate`,
        {
          topic:input,
          localToken:token
        },{withCredentials:true})

      if(result.data.success){
        toast.success(result.data.message)
        setButtonTitle('roadmap generated')
        setTimeout(() => {
          setIsRoadmapGanaratorOpen(false)
        }, 1500);

      }else{
        toast.error(result.data.message)
      }

     } catch (error) {
       toast.error(error.response.data.message)
     }
  }


  return(
    <div className='flex flex-col '>
      <span className='text-gray-300 text-md'>enter your goal here</span>
      <textarea  value={input} onChange={(e)=>setInput(e.target.value)}className='resize-none h-[30vh] outline-1 p-1 text-white text-md  rounded-sm  border-white outline-blue-700' placeholder='i want learn java '/>
     <div className='mt-4'>
        <AppButton title={buttonTitle} onclick={()=>ganarateRoadmap()}/>
      </div>
    </div>
  )
}



const RoadMapGanratorModal = () => {
  return (
    <div className='h-[70%] w-screen md:w-[70%] mx-auto flex items-center justify-center'>
       <div className='w-[90%] md:w-[50%] h-[] bg-gray-700 rounded-2xl p-3'>
             <RoadMapGanaratorUi/>
       </div>
    </div>
  )
}

export default RoadMapGanratorModal