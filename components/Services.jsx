'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useMediaQuery } from 'react-responsive';

const services = [
    {
        imgSrc: '/service1.jpg',
        title: 'Mattress Cleaning',
        rate: 25
    },
    {
        imgSrc: '/service1.jpg',
        title: 'Carpet Cleaning',
        rate: 25
    },
    {
        imgSrc: '/service1.jpg',
        title: 'Rugs Cleaning',
        rate: 25
    },
    {
        imgSrc: '/service1.jpg',
        title: 'Curtains Cleaning',
        rate: 25
    },
]

const Services = () => {
    const xxs = useMediaQuery({ maxWidth: 350 });

    return (
        <section className='shared_container pb-20'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
                {services.map((service, index) => {
                    return (
                        <Link
                            key={service.title}
                            href={`/services/${encodeURIComponent(service.title.replace(/\s+/g, '-'))}`}
                            className='rounded-md border border-white bg-white group hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl outline-none'
                        >
                            <Image
                                key={service.title}
                                src={service.imgSrc}
                                alt="service image"
                                width={350}
                                height={350}
                                quality={95}
                                priority={true}
                                className='max-w-full w-full h-[170px] xxxs:h-[250px] xxs:h-[270px] rounded-tl-md rounded-tr-md'
                            />
                            <div className=' flex items-center justify-between py-4 px-2 xxxs:p-4'>
                                <div className=' h-fit'>
                                    <h2 className='text-base xxxs:text-lg font-medium xxxs:font-semibold text-gray-800 mb-2 group-hover:text-blue-500 transition-all'>
                                        {service.title}
                                    </h2>
                                    <p className='text-sm xxxs:text-base'>
                                        Starting from <span className='font-medium xxxs:font-semibold'>AED {service.rate}/hr</span>
                                    </p>
                                </div>
                                <span className='border border-black/5 p-1.5 xxxs:p-2 w-9 h-9 xxxs:h-auto xxxs:w-auto flex justify-center items-center rounded-full text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300'>
                                    <ArrowForwardIcon fontSize={xxs ? 'small' : 'medium'}/>
                                </span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Services