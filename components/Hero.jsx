"use client"

import Image from 'next/image'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 580 });
    const xs = useMediaQuery({ maxWidth: 450 });

    return (
        <div>
            <div className='h-[30vh] xxxs:h-[32vh] xs:h-[40vh] sm:h-[50vh] lg:h-[80vh] w-full relative'>
                <Image
                    // src={isSmallScreen ? image2 : image}
                    src='/bn2.jpg'
                    alt="banner"
                    width={1200}
                    height={1000}
                    quality={95}
                    priority={true}
                    className='max-w-full w-full h-full -z-50'
                />
                <div className='w-full h-full absolute top-0 left-0 flex items-center'>
                    <div className='shared_container flex flex-col h-fit '>
                        <div className=' flex items-center gap-1 xs:gap-3'>
                            <span className='hidden xxs:block w-8 xs:w-14 sm:w-16 h-[1px] sm:h-0.5 rounded-full bg-black'></span>
                            <h3 className='hidden xxxs:block xxxs:text-[10px] xs:text-xs sm:text-sm xxs:font-medium xs:font-semibold uppercase'>
                                Welcome to our <span className='font-medium xs:font-bold'>TheCleaners</span> cleaning services
                            </h3>
                        </div>
                        <h1
                            className='font-medium xxs:font-semibold xs:font-bold text-sm xxxs:text-lg xxs:text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl block xxxs:hidden my-3 lg:my-5'
                        >
                                The Reliable Solution to all your {" "}
                                <span className='text-base xxxs:text-xl xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0px] xs:leading-none'>Residential</span>
                                {" "} and {" "}
                                <span className='text-base xxxs:text-xl xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none'>Commercial</span>
                                {" "} Cleaning Needs
                        </h1>
                        <h1
                            className='font-medium xxxs:font-semibold xs:font-bold text-lg xxs:text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl hidden xxxs:flex xs:hidden flex-col gap-3 xxs:gap-1 leading-none my-5 xxs:my-3'
                        >
                            <span>
                                The Reliable Solution to all your
                            </span>
                            <span>
                                <span className='text-[21px] xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0px] xs:leading-none'>Residential</span>
                                {" "} and {" "}
                                <span className='text-[21px] xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none'>Commercial</span>
                            </span>
                            <span>
                                Cleaning Needs
                            </span>
                        </h1>
                        <h1
                            className='font-semibold xs:font-bold text-balance xxs:text-xl xxxs:text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl hidden xs:flex flex-col gap-0 xs:gap-0.5 sm:gap-2 leading-[0px] xs:leading-none my-1 xs:my-3 lg:my-5'
                        >
                            <span>
                                The Reliable Solution
                            </span>
                            <span>
                                to all your <span className='text-lg xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0px] xs:leading-none'>Residential</span>
                            </span>
                            <span>
                                and <span className='text-lg xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none'>Commercial</span>
                            </span>
                            <span>
                                Cleaning Needs
                            </span>
                        </h1>
                        {/* <Link
                            href='/services'
                            className='px-5 py-3 items-center gap-2 w-fit bg-yellow-500 text-white font-semibold shadow-lg rounded-sm hover:shadow-xl hover:scale-105 inline-block transition-all group:'
                            style={{}}
                        >
                            Request a Call Back
                            <ArrowForwardIcon className='ml-2 group-hover:translate-x-[50px]'/>
                        </Link> */}
                        <Link
                            href="#contact"
                            className="group w-fit bg-theme-yellow-500 text-white font-medium text-sm xxxs:text-base px-3 xxs:px-4 xs:px-5 sm:px-6 md:px-7 py-2 xxs:py-2.5 md:py-3 rounded-sm flex items-center justify-between gap-1 xs:gap-2
                                        outline-none shadow-lg hover:scale-105 hover:shadow-xl focus:scale-110 hover:bg-theme-yellow-600 active:scale-105 transition-all"
                        >
                            <span className='hidden xxs:flex'>Explore</span> Our Services{" "}
                            <ArrowForwardIcon className=" xxs:opacity-80 group-hover:translate-x-1 transition-all" fontSize={isSmallScreen ? 'small' : 'medium'} />
                            {/* <ArrowForwardIcon className=" xxs:opacity-80 group-hover:translate-x-1 transition-all" fontSize={isSmallScreen ? 'small' : 'medium'} style={xs ? {fontSize: '12px'} : {fontSize: '16px'}} /> */}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero