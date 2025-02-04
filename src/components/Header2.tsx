import { CalendarDays, ChevronDown, Share2, SlidersVertical } from 'lucide-react'
import React from 'react'

const Header2 = () => {
    return (
        <div className="flex items-center bg-white justify-between p-4 mb-6">
            <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
            <div className="flex items-center space-x-2">
                <div className='flex items-center rounded-md border border-gray-300 space-x-1 bg-gray-200 py-2 px-2'>
                    <CalendarDays size={18} className='text-black' />
                    <p className="text-black text-sm">Last 30 Days</p>
                    <ChevronDown size={18} className='text-black' />
                </div>
                <div className='flex items-center rounded-md border border-gray-300 space-x-2 bg-gray-200 py-2 px-2'>
                    <SlidersVertical size={18} className='text-black' />
                    <div className="h-4 border-l border-gray-400 mx-2"></div>
                    <Share2 size={18} className='text-black' />
                </div>
                <button className="bg-blue-600 text-white px-2 py-2  rounded text-sm">
                    Edit Dashboard
                </button>
            </div>
        </div>
    )
}

export default Header2
