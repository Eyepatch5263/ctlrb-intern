import React from 'react'
import ReusableTitle from './ReusableTitle'
import { Link } from 'lucide-react'
import BacklinksChart from './BacklinksChart'
import ContinousDonutChart from './ContinousDonutChart'

const Backlinks = () => {
    return (
        <div>
            <ReusableTitle title='Backlinks' />
            <div className='grid grid-cols-3'>
                <div>
                    <div className='flex flex-col flex-1 h-[15.8rem] border border-gray-300 p-5 items-center scale-80 ml-6 my-4 bg-white  rounded-md w-[16rem]'>
                        <div className='flex items-center space-x-2 pb-4 justify-center'>
                            <Link className='text-blue-500'/>
                            <p className='text-lg font-medium text-gray-600'>{"Citation Flow"}</p>
                        </div>
                        <ContinousDonutChart value='55' color={"#F864EC"} ColorRes='#FCB3F6' />
                    </div>
                </div>
                <div className='md:col-span-2 col-span-1'>
                    <div className='bg-white h-[15.8rem] mr-6 border border-gray-300 rounded-md mt-4'>
                        <div className="flex items-center justify-between mb-4 p-2">
                            <div className="flex items-center space-x-2 ml-4 mt-2">
                            <Link className='text-blue-500'/>
                                <p className="text-gray-600 xs font-bold ">New/Lost Links</p>
                            </div>
                        </div>
                        <BacklinksChart />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Backlinks
