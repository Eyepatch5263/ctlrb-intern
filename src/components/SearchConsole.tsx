import React from 'react'
import ReusableTitle from './ReusableTitle'
import LineChartImp from './LineChartImp'
import { Link } from 'lucide-react'

const SearchConsole = () => {
    return (
        <div className='flex flex-col'>
            <ReusableTitle title='Google Search Console' />
            <div className='bg-white h-[15.8rem] mx-6 border border-gray-300 rounded-md mt-4'>
                <div className="flex items-center justify-between mb-4 p-2">
                    <div className="flex items-center space-x-2 ml-4 mt-2">
                        <Link className='text-blue-500' />
                        <p className="text-gray-600 xs font-bold ">New/Lost Links</p>
                    </div>
                </div>
                <p className='font-bold text-gray-600 text-4xl text-center'>262 K</p>
                <LineChartImp />
            </div>
        </div>
    )
}

export default SearchConsole
