import React from 'react'

const SectionHeading = ({ lineOne, lineTwo, subtitle, text = false }) => {
    return (
        <>
            <div className='flex items-center justify-center'>
                <div className='flex items-center gap-3'>
                    <div className={`${text ? 'bg-white' : 'bg-green-900'} w-5 xxxs:w-14 h-[1px] rounded-full`}></div>
                    <h3 className={`${text ? 'text-white' : 'text-gray-800'} font-semibold uppercase text-xs xxxs:text-sm w-350:text-base`}>{subtitle}</h3>
                    <div className={`${text ? 'bg-white' : 'bg-green-900'} w-5 xxxs:w-14 h-[1px] rounded-full`}></div>
                </div>
            </div>
            <div className=' flex justify-center mt-3 xxs:mt-7 mb-16'>
                <h2 className={`${text ? 'text-white' : 'text-gray-800'} xxxs:font-bold w-350:font-extrabold text-xl xxxs:text-2xl w-350:text-3xl xs:text-4xl flex flex-col items-center justify-center gap-2`}>
                    <span className='hidden xxxs:block'>{lineOne}</span>
                    <span className='hidden xxxs:block'>{lineTwo}</span>
                    <span className='block xxxs:hidden text-center'>{lineOne} {" "} {lineTwo}</span>
                </h2>
            </div>
        </>
    )
}

export default SectionHeading