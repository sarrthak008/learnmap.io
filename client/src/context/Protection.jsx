import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Protection = ({children}) => {
    
    const [isUserPresent,setIsUpserPresent] = useState(JSON.parse(localStorage.getItem("user")) || null)
    const navigate = useNavigate()



    useEffect(()=>{
     if(!isUserPresent){
        navigate("/login")
     }
    },[])

  return (
    <>
      {children}
    </>
  )
}

export default Protection