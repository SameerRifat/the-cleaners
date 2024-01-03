import Services from '@/components/Services'
import React from 'react'

export const metadata = {
    title: 'Services | TheCleaners',
};

const page = () => {
    return (
        <div className='pt-16 sm:pt-24 pb-40'>
            <h2 className={`text-gray-800 xxxs:font-bold w-350:font-extrabold text-xl xxxs:text-2xl w-350:text-3xl xs:text-4xl flex flex-col items-center justify-center gap-2`}>
                Our Services
            </h2>
            <div className='pt-10 sm:pt-16'>
                <Services />
            </div>
        </div>
    )
}

export default page