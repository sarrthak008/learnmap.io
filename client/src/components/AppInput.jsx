import React from 'react'
import { BRAND_NAME } from '../config/Brand'

const AppInput = ({placeholder=BRAND_NAME,type="text" ,required=false,onchange=()=>null}) => {
  return (
    <input placeholder={placeholder} className='text-gray-200 outline-none border-0 border-b-2 border-b-gray-300 px-2 text-2xl w-full py-1' type={type} required={required} onChange={(e)=>onchange(e.target.value)}/>
  )
}

export default AppInput