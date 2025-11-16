import React from 'react'
import { BRAND_NAME } from '../config/Brand'

const AppButton = ({title = BRAND_NAME ,icon = null,onclick=()=>null}) => {
  return (
    <button className='bg-blue-500  text-white py-2 px-5 cursor-pointer h-full w-full' onClick={()=>onclick()}>
        {title} {icon ? icon : null}
   </button>
  )
}

export default AppButton