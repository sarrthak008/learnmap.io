import React from 'react'

const RoadMapCardSckleton = () => {
    return (
        <div className='w-[300px] cursor-pointer h-[150px] bg-gray-700 rounded-md flex flex-col  p-3'>
            <div className='h-[70px] w-[90%] bg-gray-600 animate-pulse rounded-sm'></div>
            <div className='h-[30px] w-[70%] bg-gray-500  mt-4 animate-pulse rounded-sm'></div>
        </div>
    )
}

export default RoadMapCardSckleton