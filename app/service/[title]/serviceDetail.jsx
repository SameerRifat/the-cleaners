'use client'

import {servicesDetail } from '@/data/servicesData';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DoneIcon from '@mui/icons-material/Done';


const ServiceDetail = ({ params }) => {
    const formattedTitle = params.title ? params.title.replace(/-/g, ' ') : '';
    const service = servicesDetail.find((s) => s.title.toLowerCase() === formattedTitle);

    const [forceRerender, setForceRerender] = useState(false);

    const sm = useMediaQuery({ maxWidth: 640 });

    useEffect(() => {
        setForceRerender(prevState => !prevState);
    }, [sm]);

    const { banner1, banner2, title, description, features, methods, benefits } = service;


    return (
        <>
            {/* <Head>
                <title>{`${title} - ${metadata.title}`}</title>
                <meta name="description" content={`Details about ${service.title} service: ${metadata.description}`} />
            </Head> */}
            <div className='h-[20vh] xxxs:h-[30vh] xxs:h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full relative as'>
                <Image
                    src={sm ? banner2 : banner1}
                    // src={banner1}
                    alt={`${title} Image`}
                    width={1200}
                    height={1000}
                    quality={95}
                    priority={true}
                    className='max-w-full w-full h-full -z-50'
                    key={forceRerender}
                />
                <div className='absolute top-0 left-0 w-full h-full z-50 flex items-center'>
                    <div className='shared_container w-full h-fit flex justify-center items-center'>
                        <div className='flex flex-col bg-black/20 p-2 w-350:p-3 xxs:p-4 xs:p-5 rounded-md'>
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
                <div className='shared_container pt-10 pb-20 sm:py-20 w-full lg:w-[60%]'>
                    <h1 className='text-gray-800 xxxs:font-bold w-350:font-extrabold text-xl xxxs:text-2xl w-350:text-3xl xs:text-4xl mb-5'>{title} Service</h1>
                    {/* <img src={imgSrc} alt={`${title} Image`} /> */}
                    <p className='text-gray-700 leading-relaxed text-sm xxxs:text-base'>{description}</p>

                    <div className='mt-10 sm:mt-14'>
                        <h2 className='text-xl font-bold'>Key Features</h2>
                        <ul className='mt-5 flex flex-col gap-4'>
                            {features.map((feature, index) => (
                                <li key={index}
                                    className='flex items-center gap-3 text-sm xxxs:text-base'
                                >
                                    <div className='self-start'>
                                        <span className='w-5 h-5 xxxs:w-6 xxxs:h-6 sm:h-7 sm:w-7 flex justify-center items-center self-start p-0.5 rounded-full bg-gradient-to-br from-blue-500 to-green-500 mt-0.5'>
                                            <DoneIcon
                                                fontSize={sm ? 'small' : 'medium'}
                                                className='text-white font-bold'
                                            />
                                        </span>
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='my-10 sm:my-14'>
                        <h2 className='text-xl font-bold'>Cleaning Methods</h2>
                        <ul className='mt-5 flex flex-col gap-4'>
                            {methods.map((method, index) => (
                                <li
                                    key={index}
                                    className='flex items-center gap-3 text-sm xxxs:text-base'
                                >
                                    <div className='w-4 h-4 flex justify-center items-center self-start sm:self-center mt-[4px] sm:mt-0'>
                                        <div className=' bg-gradient-to-r from-blue-500 to-green-500 w-3 h-3 rounded-full'></div>
                                    </div>
                                    <span>
                                        {method}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-xl font-bold'>Benefits</h2>
                        <ul className='mt-5 flex flex-col gap-4'>
                            {benefits.map((benefit, index) => (
                                <li key={index}
                                    className='flex items-center gap-3 text-sm xxxs:text-base'
                                >
                                    <div className='self-start'>
                                        <span className='w-5 h-5 xxxs:w-6 xxxs:h-6 sm:h-7 sm:w-7 flex justify-center items-center self-start p-0.5 rounded-full bg-gradient-to-br from-blue-500 to-green-500 mt-0.5'>
                                            <DoneIcon
                                                fontSize={sm ? 'small' : 'medium'}
                                                className='text-white font-bold'
                                            />
                                        </span>
                                    </div>
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