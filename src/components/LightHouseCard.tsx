import React from 'react'
import ContinousDonutChart from './ContinousDonutChart'

interface LightHouseCardProps {
    title:string
    color:string
    colorRes: string
    value:string
}
const LightHouseCard = ({title,color,colorRes,value}:LightHouseCardProps) => {
    return (
        <div className='flex flex-col flex-1 h-[15.8rem] border border-gray-300 p-5 items-center scale-[.8] bg-white  rounded-md w-[16rem]'>
            <div className='flex items-center space-x-2 pb-4 justify-center'>
            <div className='size-6 rounded-full bg-gray-400'/>
            <p className='text-lg font-medium text-gray-600'>{title}</p>
            </div>
            <ContinousDonutChart color={color} ColorRes={colorRes} value={value}/>
        </div>
    )
}

export default LightHouseCard
