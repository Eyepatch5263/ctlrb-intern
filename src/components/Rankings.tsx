"use client"
import React from 'react'
import { BarChart } from 'lucide-react'

interface RankingsProps {
    firstTitle: string;
    secondTitle: string;
    iconColor: string;
}

const Rankings = ({ firstTitle, secondTitle, iconColor }:RankingsProps) => {
    return (
        <div className='flex flex-col'>
            <main className='flex flex-col md:flex-row justify-start w-full'>
                <div className='flex flex-1 rounded-md border border-gray-300 flex-col items-center space-y-2 py-4 h-[8rem] w-full md:w-[14rem] text-black ml-6 mt-4 bg-white md:ml-6'>
                    <div className='flex items-center space-x-2'>
                        <BarChart className='text-xs font-bold' color={iconColor} />
                        <p className='text-xs text-gray-600 font-bold'>{firstTitle}</p>
                    </div>
                    <div className='flex justify-center items-center flex-grow'>
                        <p className='text-black text-center font-bold text-2xl'>10</p>
                    </div>
                </div>
                <div className='flex flex-1 rounded-md border border-gray-300 flex-col items-center space-y-2 py-4 h-[8rem] w-full md:w-[14rem] text-black mx-6 mt-4 bg-white'>
                    <div className='flex items-center space-x-2'>
                        <BarChart className='text-xs font-bold' color={iconColor} />
                        <p className='text-xs text-gray-600 font-bold'>{secondTitle}</p>
                    </div>
                    <div className='flex justify-center items-center flex-grow space-x-2'>
                        <span className="text-green-600">▲</span>
                        <p className='text-black text-center font-bold text-2xl'>4</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Rankings