import React, { useEffect, useState } from 'react'
import RoadMapCardSckleton from './RoadMapCardSckleton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const APIURL = import.meta.env.VITE_BACKCNEND_URL

const RoadMapsContainer = () => {

  const [roadmaps, setRoadMaps] = useState([])
  const naviagte = useNavigate()

  const loadRoadmap = async () => {
    try {
      const result = await axios.get(`${APIURL}/getmyroadmaps`, { withCredentials: true });
      setRoadMaps(result.data.data?.reverse());
      localStorage.setItem("roadmaps", JSON.stringify(result.data.data))
    } catch (error) {

    }
  }


  const openRoadmap =(id)=>{
      naviagte(`/view/${id}`)
  }

  useEffect(() => {
    loadRoadmap()
  }, [])


  return (
    <div className=' gap-10 w-screen  flex flex-wrap items-center'>
      {roadmaps.map((map, index) => {
        return (
          <div className='w-[300px] cursor-pointer h-[150px] bg-gray-700 rounded-md flex flex-col  p-3 shrink-0' onClick={()=>{openRoadmap(map._id)}}>
            <h3 className='text-white text-xl font-bold'>{map.name}</h3>
            <div className='w-full flex items-center gap-4  mt-5'>
              <p className='text-gray-400 text-xl'>{map.status}</p>
              <span className={`h-[15px] w-[15px] ${map.status == "public" ? 'bg-green-500' : 'bg-red-500'}`}></span>
            </div>
            <span className='text-gray-400 mt-4 text-sm'>{map._id}</span>
          </div>
        )
      })}
    </div>
  )
}

export default RoadMapsContainer