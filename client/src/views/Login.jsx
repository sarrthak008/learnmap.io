import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import BGIMG from "../assets/register.svg"
import AppInput from '../components/AppInput'
import AppButton from '../components/AppButton'

const Register = () => {

  const [passType, setPassType] = useState("password");

  return (
    <div className='h-screen w-screen flex overflow-hidden'>
      <NavBar />
      <div className='w-[50%] h-screen relative flex items-center justify-center flex-col'>
        <div className='absolute z-10 w-[80%] mx-auto'>
          <div className=''>
            <h2 className='text-3xl text-white'><i className="ri-bar-chart-2-fill"></i>. Track Your Progress</h2>
            <p className='text-gray-400 text-md mt-3'>Mark topics as completed and see how far you’ve come. Your roadmap updates automatically to keep you motivated and on the right path.</p>
          </div>

          <div className='mt-9'>
            <h2 className='text-3xl text-white'><i className="ri-search-fill"></i> . Explore Roadmaps by Others</h2>
            <p className='text-gray-400 text-md mt-3'>Browse roadmaps created by other users. Discover new learning paths, get inspiration, and clone any roadmap you like with just one click.</p>
          </div>

        </div>
        <img src={BGIMG} className='absolute brightness-30' />
      </div>

      <div className='w-[50%] h-screen flex items-center justify-center'>
        <div className='h-[70%] w-[70%] bg-gray-800/40 rounded-2xl p-4 backdrop-blur-md'>
          <h3 className='text-white text-4xl'>Login.</h3>
          <p className='text-gray-400 text-sm'>Dont have an account? <span className='text-blue-500'>create new account here.</span></p>
          <div className='mt-10 w-[100%] flex flex-col gap-10'>

            <AppInput placeholder='enter your email' type="email" required={true} />
            <div>
              <AppInput placeholder='enter your password' type={passType} required={true} />
              <div className='flex items-center gap-2 text-xl text-gray-400 mt-5'><input type='checkbox' id='pass' className='h-[20px] w-[20px] cursor-pointer' onChange={() => setPassType(passType === "password" ? "text" : "password")} /><label htmlFor='pass' className='cursor-pointer'>{passType === "password" ? "show password" : "Hide password"}</label></div>
            </div>
            <div className='w-[80%]'>
              <AppButton title='Login' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register