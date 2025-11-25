import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import BGIMG from "../assets/register.svg"
import AppInput from '../components/AppInput'
import AppButton from '../components/AppButton'
import { toast } from 'sonner'
import axios from 'axios'
const APIURL = import.meta.env.VITE_BACKCNEND_URL
import { useNavigate } from 'react-router-dom'


const Register = () => {
  
  const navigate = useNavigate()
  const [passType, setPassType] = useState("password");

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

const handelSignUp = async()=>{
    try {
       if(!name && !email && !password){
          toast.error("all filds are required")
          return
       }
       if(password.length <6){
        toast.error("password must contains 6 characters")
        return
       }

       if( ! email.includes("@") && !email.includes(".")){
         toast.error("invalid email")
         return
       }

       let response = await axios.post(`${APIURL}/signup`,{
        name:name,
        email:email,
        password:password
       },{withCredentials:true})

       if(response.data.success){
        toast.success(response.data.message)
        setName('')
        setEmail('')
        setPassword('')

        // login page ke upar ja paye 
        navigate("/login")


       }else{
        toast.error(response.data.message)
       }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className='h-screen w-screen flex overflow-hidden'>
      <NavBar />
      <div className='hidden w-[50%] h-screen relative md:flex items-center justify-center flex-col'>
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

      <div className='w-screen md:w-[50%] h-screen flex items-center justify-center'>
        <div className='h-[80%] w-[90%] md:w-[70%] bg-gray-800/40 rounded-2xl p-4 backdrop-blur-md'>
          <h3 className='text-white text-4xl'>Register.</h3>
          <p className='text-gray-400 text-sm'>already have an account? <span className='text-blue-500'>Login here.</span></p>
          <div className='mt-10 w-[100%] flex flex-col gap-10'>
            <AppInput placeholder='enter your name' type='text' required={true} value={name} onchange={(txt)=>setName(txt)} />
            <AppInput placeholder='enter your email' type="email" required={true} value={email} onchange={(txt)=>setEmail(txt)}/>
            <div>
              <AppInput placeholder='enter your password' type={passType} required={true} value={password}  onchange={(txt)=>setPassword(txt)}/>
              <div className='flex items-center gap-2 text-xl text-gray-400 mt-5'><input type='checkbox' id='pass' className='h-[20px] w-[20px] cursor-pointer' onChange={() => setPassType(passType === "password" ? "text" : "password")} /><label htmlFor='pass' className='cursor-pointer'>{passType === "password" ? "show password" : "Hide password"}</label></div>
            </div>
            <div className='w-[80%]'>
              <AppButton title='Register' onclick={()=>handelSignUp()}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register