import React from 'react'

const ExploreRoadmapCards = ({ data }) => {
   
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
            <span className='text-gray-400 mt-4 text-sm'>{data._id}</span>
        </div>
    )
}

export default ExploreRoadmapCards