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
             <h2 className='text-3xl text-white'><i className="ri-corner-up-right-fill"></i>. Enter Your Goal</h2>
             <p className='text-gray-400 text-md mt-3'>Just type what you want to learn or achieve — like “Become a MERN Developer”, “Learn Java OOP”, or “Start a YouTube channel”. Our AI understands your goal instantly.</p>
          </div>

           <div className='mt-9'>
             <h2 className='text-3xl text-white'><i className="ri-road-map-line"></i>. Get Your Personalized Roadmap</h2>
             <p className='text-gray-400 text-md mt-3'>AI creates a step-by-step roadmap designed just for you. It includes levels, topics, tools, and the best learning order so you never get confused about where to start.</p>
          </div>

           <div className='mt-9'>
             <h2 className='text-3xl text-white'><i className="ri-heart-add-fill"></i>. Save, Share, or Clone</h2>
             <p className='text-gray-400 text-md mt-3'>You can save your roadmap, share it with friends, or even clone other users’ roadmaps to follow the exact same learning path with one click.</p>
          </div>

         </div>
        <img src={BGIMG} className='absolute brightness-30' />
      </div>

      <div className='w-[50%] h-screen flex items-center justify-center'>
        <div className='h-[80%] w-[70%] bg-gray-800/40 rounded-2xl p-4 backdrop-blur-md'>
          <h3 className='text-white text-4xl'>Register.</h3>
          <p className='text-gray-400 text-sm'>already have an account? <span className='text-blue-500'>Login here.</span></p>
          <div className='mt-10 w-[100%] flex flex-col gap-10'>
            <AppInput placeholder='enter your name' type='text' required={true} />
            <AppInput placeholder='enter your email' type="email" required={true} />
            <div>
              <AppInput placeholder='enter your password' type={passType} required={true} />
              <div className='flex items-center gap-2 text-xl text-gray-400 mt-5'><input type='checkbox' id='pass' className='h-[20px] w-[20px] cursor-pointer' onChange={() => setPassType(passType === "password" ? "text" : "password")} /><label htmlFor='pass' className='cursor-pointer'>{passType === "password" ? "show password" : "Hide password"}</label></div>
            </div>
            <div className='w-[80%]'>
              <AppButton title='Register' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register