'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import Services from './Services';

const ServicesSection = () => {
    const xxs = useMediaQuery({ maxWidth: 350 });
    const xs = useMediaQuery({ maxWidth: 580 });
    const md = useMediaQuery({ maxWidth: 768 });
    const isSmallScreen = useMediaQuery({ maxWidth: 700 });

    const [forceRerender, setForceRerender] = useState(false);
    useEffect(() => {
        setForceRerender(prevState => !prevState);
    }, [md]);

    return (
        <section>
            <div className='relative w-full h-[550px] xxxs:h-[600px] sm:h-[700px]'>
                <Image
                    src={md ? '/wave-new4.png' : '/wave-new.png'}
                    alt="background image"
                    width={1200}
                    height={1000}
                    quality={95}
                    priority={true}
                    key={forceRerender}
                    className='absolute top-0 left-0 max-w-full w-full h-full -z-[9999]'
                />
                <div className='absolute top-0 left-0 w-full h-full'>
                    <div className='shared_container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xxxs:gap-5 xs:gap-6 md:gap-10 mt-4 xxxs:mt-8 xs:mt-14 mb-7 xs:mb-8 sm:mb-10'>
                        <div className=''>
                            <div className='flex items-center gap-1 xs:gap-3'>
                                <span className='w-8 xs:w-14 sm:w-16 h-[1px] sm:h-0.5 rounded-full bg-white'></span>
                                <h3 className='text-white font-medium sm:font-semibold text-lg xxxs:text-xl'>
                                    Services
                                </h3>
                            </div>
                            <h2 className='text-white font-semibold sm:font-bold md:font-extrabold text-xl xxxs:text-2xl xs:text-3xl sm:text-3xl md:text-4xl mt-1 xxxs:mt-2 md:mt-4'>
                                Offering Best Cleaning Services in Sharjah
                            </h2>
                        </div>
                        <div className=' text-gray-100 text-xs xxxs:text-sm sm:text-base'>
                            Welcome to <span className='font-medium'>TheCleaners</span> Cleaning Services, your one-stop-shop for all your cleaning needs in Sharjah. Our team of highly skilled professionals offers a complete range of cleaning services for all types of properties, including apartments, houses, small businesses, and multi-floor commercial properties. We take pride in delivering high-quality cleaning services that leave your space sparkling clean and fresh.
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pb-40 -mt-40 w-220:-mt-52 xxxs:-mt-48 xxs:-mt-60 xs:-mt-64 sm:-mt-80 md:-mt-[350px] z-50'>
                <Services />
            </div>
        </section>
    )
}

export default ServicesSection