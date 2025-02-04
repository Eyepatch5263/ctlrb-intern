import React from 'react'

const ReusableTitle = ({ title }: { title: string }) => {
    return (
        <div className='text-gray-700 p-3 mx-6 bg-white border border-gray-300 rounded-md font-semibold text-lg'>
            {title}
        </div>
    )
}

export default ReusableTitle
