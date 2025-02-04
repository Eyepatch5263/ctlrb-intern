import React from 'react'
import ReusableTitle from './ReusableTitle'
import LightHouseCard from './LightHouseCard'

const LightHouse = () => {
    return (
        <div>
            <ReusableTitle title='Google Lighthouse' />
            <main className='flex flex-col'>
                <div className='flex'>
                    <LightHouseCard value='70' color='green' colorRes='#B4B4B4' title='Performance Score' />
                    <LightHouseCard value='40' color='#00008B' colorRes='#B4B4B4' title='SEO Score' />
                </div>
                <div className='flex'>
                    <LightHouseCard value='80' color='red' colorRes='#B4B4B4' title='Performance Score' />
                    <LightHouseCard value='90' color='#FFD700' colorRes='#B4B4B4' title='SEO Score' />
                </div>
            </main>



        </div>
    )
}

export default LightHouse
