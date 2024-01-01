'use client'

import { servicesDetail } from '@/data/servicesData';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DoneIcon from '@mui/icons-material/Done';


const ServiceDetail = ({ params }) => {
    const formattedTitle = params.title ? params.title.replace(/-/g, ' ') : '';
    const service = servicesDetail.find((s) => s.title === formattedTitle);

    const [forceRerender, setForceRerender] = useState(false);

    const isSmallScreen = useMediaQuery({ maxWidth: 640 });

    useEffect(() => {
        setForceRerender(prevState => !prevState);
    }, [isSmallScreen]);

    const { imgSrc, title, description, features, methods, benefits } = service;


    return (
        <>
            <div className='h-[30vh] xxs:h-[40vh] sm:h-[60vh] w-full relative'>
                <Image
                    // src={sm ? '/about4-4.png' : '/about4.jpg'}
                    src={imgSrc}
                    alt={`${title} Image`}
                    width={1200}
                    height={1000}
                    quality={95}
                    priority={true}
                    className='max-w-full w-full h-full -z-50'
                />
                <div className='absolute top-0 left-0 w-full h-full z-50 flex items-center'>
                    <div className='shared_container w-full h-fit flex justify-center items-center'>
                        <div className='flex flex-col bg-black/20 p-5 rounded-md'>
                            <div className='flex items-center justify-center gap-2 sm:gap-5'>
                                <div className={`bg-white w-5 xxxs:w-8 xs:w-14 h-[1px] rounded-full`}></div>
                                <h3 className={` font-semibold uppercase text-xs w-350:text-sm xxs:text-base text-white`}>Service Detail</h3>
                                <div className={`bg-white w-5 xxxs:w-8 xs:w-14 h-[1px] rounded-full`}></div>
                            </div>
                            <h2 className={`text-white text-center xxxs:font-bold w-350:font-extrabold text-xl xxxs:text-2xl w-350:text-3xl xxs:text-4xl sm:text-5xl my-1 w-350:my-2 xxs:my-3 xs:my-5 flex flex-col gap-0 w-350:gap-1 xxs:gap-1.5 xs:gap-2 sm:gap-3`}>
                                {title}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white'>
                <div className='shared_container py-20 w-full lg:w-[60%]'>
                    <h1 className='text-gray-800 xxxs:font-bold w-350:font-extrabold text-xl xxxs:text-2xl w-350:text-3xl xs:text-4xl mb-5'>{title} Service</h1>
                    {/* <img src={imgSrc} alt={`${title} Image`} /> */}
                    <p className='text-gray-700 leading-relaxed'>{description}</p>

                    <div className='mt-14'>
                        <h2 className='text-xl font-bold'>Key Features</h2>
                        <ul className='mt-5 flex flex-col gap-4'>
                            {features.map((feature, index) => (
                                <li key={index}
                                    className='flex items-center gap-3'
                                >
                                    <span className='p-0.5 rounded-full bg-gradient-to-br from-blue-500 to-green-500'>
                                        <DoneIcon
                                            fontSize='medium'
                                            className='text-white font-bold'
                                        />
                                    </span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='my-14'>
                        <h2 className='text-xl font-bold'>Methods</h2>
                        <ul className='mt-5 flex flex-col gap-4'>
                            {methods.map((method, index) => (
                                <li
                                    key={index}
                                    className='flex items-center gap-3'
                                >
                                    <span className='bg-gradient-to-r from-blue-500 to-green-500 w-3 h-3 rounded-full'></span>
                                    {method}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-xl font-bold'>Benefits</h2>
                        <ul className='mt-5 flex flex-col gap-4'>
                            {benefits.map((benefit, index) => (
                                <li key={index}
                                    className='flex items-center gap-3'
                                >
                                    <span className='p-0.5 rounded-full bg-gradient-to-br from-blue-500 to-green-500'>
                                        <DoneIcon
                                            fontSize='medium'
                                            className='text-white font-bold'
                                        />
                                    </span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceDetail