import React from 'react'
import Rankings from './Rankings'
import { BarChart } from 'lucide-react'
import RankingBarChart from './RankingBarChart'
import ReusableTitle from './ReusableTitle'

const RankingsSection = () => {
    return (
        <div className="">
            <ReusableTitle title='Rankings' />
            <Rankings firstTitle='Google Rankings' secondTitle='Google Change' iconColor='#3B82F6'/>
            <div className='bg-white h-[20rem] mx-6 border border-gray-300 rounded-md mt-4'>
                <div className="flex items-center justify-between mb-4 p-2">
                    <div className="flex items-center space-x-2">
                        <BarChart className="text-blue-500" />
                        <p className="text-gray-600 xs font-bold">Google Rankings</p>
                    </div>
                    <p className='text-lg font-bold pr-2'>8</p>
                </div>
                <RankingBarChart />
            </div>
        </div>
    )
}

export default RankingsSection
