import React from 'react'
import { useStore } from '../context/Store'
import { toast } from 'sonner'
import DarkVeil from '../components/DarkVeil'
import NavBar from '../components/NavBar'

const Home = () => {



  return (
    <div className='h-screen w-screen relative'>
         <div className='absolute top-0 left-0 h-full w-full'>
            <DarkVeil/>
         </div>
        <div className='absolute top-0 left-0 h-full w-full'>
            <NavBar/>
        </div>
    </div>
  )
}

export default Home