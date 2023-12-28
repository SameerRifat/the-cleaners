'use client'

import Image from 'next/image'
import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import Services from './Services';

const ServicesSection = () => {
    const xxs = useMediaQuery({ maxWidth: 350 });
    const xs = useMediaQuery({ maxWidth: 580 });
    const isSmallScreen = useMediaQuery({ maxWidth: 700 });

    return (
        <section>
            <div className='relative w-full h-[800px] sm:h-[600px] z-10'>
                <Image
                    // src='/wave-lg.png'
                    src={xxs ? '/wave-lg3.png' : (xs ? '/wave-lg2.png' : '/wave-lg.png')}
                    alt="background image"
                    width={1200}
                    height={1000}
                    quality={95}
                    priority={true}
                    className='absolute top-0 left-0 max-w-full w-full h-full -z-50'
                />
                <div className='absolute top-0 left-0 w-full h-full z-20'>
                    <div className='shared_container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xxxs:gap-5 xs:gap-6 md:gap-10 mt-4 xxxs:mt-8 xs:mt-12 mb-7 xs:mb-8 sm:mb-10'>
                        <div className=''>
                            <div className='flex items-center gap-1 xs:gap-3'>
                                <span className='w-8 xs:w-14 sm:w-16 h-[1px] sm:h-0.5 rounded-full bg-white'></span>
                                <h3 className='text-white font-medium sm:font-semibold text-lg xxxs:text-xl'>
                                    Services
                                </h3>
                            </div>
                            <h2 className='text-white font-semibold sm:font-bold md:font-extrabold text-xl xxxs:text-2xl xs:text-3xl sm:text-3xl md:text-4xl mt-1 xxxs:mt-2 md:mt-4'>
                                Offering Best Cleaning Services in UAE
                            </h2>
                            {/* <div className='mt-1 xs:mt-2'>
                                <h4 className='text-base xxxs:text-lg font-medium sm:font-semibold text-white my-1'>
                                    Targeted Areas:
                                </h4>
                                <div className='flex items-center gap-y-2 gap-x-3 xxs:gap-x-5 text-white flex-wrap'>
                                    <div className='font-medium sm:font-semibold text-sm xxxs:text-lg  xxs:text-xl flex items-center gap-0.5 xxs:gap-1'>
                                        <PlaceIcon className='text-theme-yellow-500' fontSize='small' />
                                        <span>Sharjah</span>
                                    </div>
                                    <div className='font-medium sm:font-semibold text-sm xxxs:text-lg  xxs:text-xl flex items-center gap-0.5 xxs:gap-1'>
                                        <PlaceIcon className='text-theme-yellow-500' fontSize='small' />
                                        <span>UAE</span>
                                    </div>
                                    <div className='font-medium sm:font-semibold text-sm xxxs:text-lg  xxs:text-xl flex items-center gap-0.5 xxs:gap-1'>
                                        <PlaceIcon className='text-theme-yellow-500' fontSize='small' />
                                        <span>Ajman</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className=' text-gray-100 text-xs xxxs:text-sm sm:text-base'>
                            Welcome to <span className='font-medium'>TheCleaners</span> Cleaning Services, your one-stop-shop for all your cleaning needs in UAE. Our team of highly skilled professionals offers a complete range of cleaning services for all types of properties, including apartments, houses, small businesses, and multi-floor commercial properties. We take pride in delivering high-quality cleaning services that leave your space sparkling clean and fresh.
                        </div>
                        <div className='block sm:hidden lg:block my-10 mb-14 sm:my-0'>
                            {/* <h4 className='text-base xxxs:text-lg font-medium sm:font-semibold text-white my-1'>
                                Targeted Areas:
                            </h4> */}
                            <div className='flex items-center gap-2 xxs:gap-5 text-white flex-wrap justify-center'>
                                <div className='w-fit relative'>
                                    <Image
                                        src='/location6.png'
                                        // src={xxs ? '/wave-lg3.png' : (xs ? '/wave-lg2.png' : '/wave-lg.png')}
                                        alt="background image"
                                        width={500}
                                        height={500}
                                        quality={95}
                                        priority={true}
                                        className='max-w-full w-64 xxs:w-80'
                                    />
                                    <div className='absolute -bottom-8 xs:-bottom-10 w-full text-center flex justify-center'>
                                        <h4 className='text-xs xxxs:text-sm xs:text-base font-medium text-white my-1'>
                                            Our Targeted Cities in UAE
                                        </h4>
                                    </div>
                                </div>
                                {/* <div className='mt-1 xxs:mt-2 font-medium sm:font-semibold text-sm xxxs:text-lg  flex items-center gap-0.5 xxs:gap-1 bg-blue-900/20 shadow-xl backdrop-blur-[10rem] p-1.5 xxxs:p-[6.2px] w-350:p-3 xxs:p-4 rounded-lg'>
                                    <PlaceIcon className='text-theme-yellow-500' fontSize='small' />
                                    <span>Sharjah</span>
                                </div>
                                <div className='font-medium sm:font-semibold text-sm xxxs:text-lg  flex items-center gap-0.5 xxs:gap-1 bg-blue-900/20 shadow-xl backdrop-blur-[10rem] p-1.5 xxxs:p-[6.2px] w-350:p-3 xxs:p-4 rounded-lg'>
                                    <PlaceIcon className='text-theme-yellow-500' fontSize='small' />
                                    <span>UAE</span>
                                </div>
                                <div className='font-medium sm:font-semibold text-sm xxxs:text-lg  flex items-center gap-0.5 xxs:gap-1 bg-blue-900/20 shadow-xl backdrop-blur-[10rem] p-1.5 xxxs:p-[6.2px] w-350:p-3 xxs:p-4 rounded-lg'>
                                    <PlaceIcon className='text-theme-yellow-500' fontSize='small' />
                                    <span>Ajman</span>
                                </div> */}
                            </div>
                            {/* <div className='bg-blue-500 flex justify-center items-center p-2 xs:p-4 rounded-full'>
                                <PhoneIcon fontSize={isSmallScreen ? 'medium' : 'large'}
                                    className='text-white'
                                />
                            </div>
                            <div>
                                <h3 className='text-base xxxs:text-lg xs:text-xl text-white mb-1 xs:mb-2'>Call us anytime</h3>
                                <Link href='tel:+971557924200' rel="noopener noreferrer"
                                    className="text-white font-medium xxxs:font-semibold xs:font-extrabold text-lg xxxs:text-xl xs:text-2xl cursor-pointer"
                                >
                                    +971 58 124 9910
                                </Link>
                            </div> */}
                        </div>
                    </div>
                    <div className=''>
                        <Services />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection