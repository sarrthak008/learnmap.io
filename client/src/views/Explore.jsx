import React, { useEffect, useState } from 'react'
import axios from "axios"
import NavBar from '../components/NavBar'
import ExploreRoadmapCards from '../components/ExploreRoadmapCards'
import { useStore } from '../context/Store'
import { toast } from 'sonner'
const APIURL = import.meta.env.VITE_BACKCNEND_URL


const Explore = () => {

    const [roadmaps,setRoadmaps] = useState([]);   
    const [usermail,setmail] = useState();
    
    
    const loadAllRoadMaps = async () =>{
    
        try {
            let response = await axios.get(`${APIURL}/getroadmaps`)
            const data = JSON.parse(localStorage.getItem("user")) || {}
            if(response){
                toast.success("roadmaps loads successfully")
                 // show only other peoples roadmpas 
                let newRoadmps = response?.data?.data.filter((r)=>r.createdBy.email != data?.email);
                setRoadmaps(newRoadmps)
            }
        } catch (error) {
            toast.error("something went wrong");
            console.error(error.response)
        }
    }
    
    useEffect(()=>{
        loadAllRoadMaps()
    },[])


    return (
        <>
            <NavBar />
            <div className='mt-16'>
                <h1 className='text-3xl text-white text-center'>Build , Share , Explore. </h1>
                <div className='mt-10  flex w-screen flex-wrap gap-10 items-center justify-center' >
                    {
                        roadmaps?.map((rd,index)=>(
                             <ExploreRoadmapCards data={rd} key={index}/>
                        ))
                    }
                </div>
                 
            </div>
        </>
    )
}

export default Explore