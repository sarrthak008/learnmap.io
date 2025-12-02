import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Levels =({level}) =>{
    return(
        <div className='my-10'>
             <h2 className='text-2xl text-white ml-5'>🏹 {level?.level}</h2>
             <div>
                 {
                    level?.modules?.map((data,index)=>(
                        <div key={index} className='ml-10 my-4'>
                            <h3 className='text-gray-200 text-xl'> ☛ {data?.module}</h3>
                             <div>
                                 {
                                    data?.topics?.map((topic,index)=>(
                                        <p key={index} className='text-gray-400 text-xl my-3 ml-5'>🔑  {topic}</p>
                                    ))
                                 }
                             </div>
                        </div>
                    ))
                 }
             </div>
        </div>
    )
}



const ViewRoadMap = () => {

    let { id } = useParams()
    const [roadMap, setRoadMap] = useState({});
    const [isreMoveable ,setIsRemoveable] = useState(false);
    const navigate = useNavigate()


    const loadRoadmaps = () => {
        let allRoadMaps = JSON.parse(localStorage.getItem("roadmaps"));
        let findedRoadMap = allRoadMaps.find((roadmap) => roadmap._id == id);
        setRoadMap(JSON.parse(findedRoadMap.roadmap));
        if("isreMoveable" in  allRoadMaps[allRoadMaps.length - 1]){
          setIsRemoveable(true);
        }
    }


    const handelBack =()=>{
         if(isreMoveable){
            let roadmaps = JSON.parse(localStorage.getItem("roadmaps")) || [];
            roadmaps.pop()
            localStorage.setItem("roadmaps",JSON.stringify(roadmaps));
            navigate("/explore");
            setIsRemoveable(false)
         }else{
            navigate("/dashboard")
         }
    }

    useEffect(() => {
        loadRoadmaps()
    }, [])


    return (
        <div className='h-screen w-screen overflow-x-hidden'>
          <div className='m-10'><i className="ri-arrow-left-line text-white text-2xl cursor-pointer" onClick={()=>handelBack()}></i></div>
            <div className='w-[80%] mx-auto'>
                <h3 className='text-white text-3xl font-bold mt-14'> 📌 {roadMap?.title}</h3>
                 <div>
                    <span className='text-gray-300 text-2xl mt-5 block'> 🖇 levels</span>
                     <div className='mt-4'>
                         {
                            roadMap?.levels?.map((level,index)=>(
                                 <Levels key={index} level={level}/>
                            ))

                         }
                     </div>
                 </div>

                 <div className=''>
                    <span className='text-gray-300 text-2xl mt-5 block'> 🔍 resources</span>
                       <div>
                         {roadMap?.resources?.map((res,index)=>(
                             <div key={index}>
                                <h3 className='text-gray-300 text-xl my-3 ml-10'> 🔖 {res?.name}</h3>
                                 <a  href={res?.url} target='_blank' rel='noreferrer'className='text-blue-500 ml-20 cursor-pointer'>{res?. url}</a>
                             </div>
                         ))}
                       </div>
                 </div>
            </div>
        </div>
    )
}

export default ViewRoadMap