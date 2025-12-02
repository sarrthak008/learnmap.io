import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from "sonner"
import { useStore } from '../context/Store';
const APIURL = import.meta.env.VITE_BACKCNEND_URL

const ExploreRoadmapCards = ({ data }) => {

    const navigate = useNavigate()
    const {token} = useStore();

     const handelView = (click_roadmap)=>{
         try {
           let roadmaps = JSON.parse(localStorage.getItem("roadmaps")) || [];
           click_roadmap.isreMoveable = true ;
           roadmaps.push(click_roadmap)
           localStorage.setItem("roadmaps",JSON.stringify(roadmaps));
           navigate(`/view/${click_roadmap._id}`)
            
         } catch (error) {
            console.log(error)
         }
     }

     const cloneRoadMap = async(data) =>{

        console.log(token)

         try {

            toast.loading("clonning....")
            let resul = await axios.post(`${APIURL}/clone/${data._id}`,{
              localToken : token 
            },{withCredentials : true});
            if(resul.data.success){
                toast.dismiss();
                toast.success(resul.data.message);
            }

         } catch (error) {
            toast.dismiss()
            toast.error(error)
         }
     }


    return (
        <div className='w-[280px] md:w-[350px]  cursor-pointer h-[250px] bg-gray-700 rounded-md flex flex-col  p-3 shrink-0'>
            <div className='w-[95%] bg-gray-800 p-2 mb-4 rounded-xl'>
                <h2 className='text-white text-xl'>{data?.createdBy.name}</h2>
                <p className='text-gray-400 text-sm'>{data?.createdBy.email}</p>
            </div>
            <h3 className='text-white text-xl font-bold'>{data.name}</h3>
            <div className='w-full flex items-center gap-4  mt-5'>
                <p className='text-gray-400 text-xl'>{data.status}</p>
                <span className={`h-[15px] w-[15px] ${data.status == "public" ? 'bg-green-500' : 'bg-red-500'}`}></span>
            </div>
            {/* <span className='text-gray-400 mt-4 text-sm'>{data._id}</span> */}
            <div className='flex gap-5 mt-8'>
                <button className='text-white cursor-pointer' onClick={()=>handelView(data)}>view</button>
                <button className='text-blue-400 cursor-pointer' onClick={()=>cloneRoadMap(data)}>clone roadmap</button>
            </div>
        </div>
    )
}

export default ExploreRoadmapCards