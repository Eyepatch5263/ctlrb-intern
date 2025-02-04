"use client"
import React from 'react'
import ReusableTitle from './ReusableTitle'
import AnalyticsPieChart from './AnalyticsPieChart'
import { BarChart } from 'lucide-react'

const Analytics = () => {
    return (
        <div>
            <ReusableTitle title='Google Analytics' />
            <div className='bg-white h-[20rem] mx-6 border border-gray-300 rounded-md mt-4'>
                <div className="flex items-center justify-between mb-4 p-2">
                    <div className="flex items-center space-x-2">
                        <BarChart className="text-orange-500" />
                        <p className="text-gray-600 xs font-bold">Sessions</p>
                    </div>
                </div>
                <AnalyticsPieChart />
                <div className='flex mt-16'>
                    <div className='flex w-full'>
                        <main className='flex flex-col md:flex-row justify-start w-full'>
                            <div className='flex flex-1 rounded-md border border-gray-300 flex-col items-center space-y-2 py-4 h-[8rem] w-full md:w-[12rem] mr-4 text-black mt-4 bg-white '>
                                <div className='flex items-center space-x-2'>
                                    <BarChart className='text-xs font-bold' color={"orange"} />
                                    <p className='text-xs text-gray-600 font-bold'>Sessions</p>
                                </div>
                                <div className='flex justify-center items-center flex-grow'>
                                    <p className='text-black text-center font-bold text-2xl'>2,787</p>
                                </div>
                            </div>
                            <div className='flex flex-1 rounded-md border border-gray-300 flex-col items-center space-y-2 py-4 h-[8rem] w-full md:w-[12rem]  text-black  mt-4 bg-white'>
                                <div className='flex items-center space-x-2'>
                                    <BarChart className='text-xs font-bold' color={"orange"} />
                                    <p className='text-xs text-gray-600 font-bold'>Global Completions</p>
                                </div>
                                <div className='flex justify-center items-center flex-grow space-x-2'>
                                    <p className='text-black text-center font-bold text-2xl'>3,306</p>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics


