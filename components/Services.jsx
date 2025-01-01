'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useMediaQuery } from 'react-responsive';

const services = [
    {
        imgSrc: '/housCleaning4.jpg',
        title: 'House Cleaning',
    },
    {
        imgSrc: '/appartment3.jpg',
        title: 'Appartment Cleaning',
    },
    {
        imgSrc: '/villa2.jpg',
        title: 'Villa Cleaning',
    },
    {
        imgSrc: '/officeCleaning2.jpg',
        title: 'Office Cleaning',
    },
    {
        imgSrc: '/kitchen4.jpg',
        title: 'Kitchen Cleaning',
    },
    {
        imgSrc: '/washroom1.jpg',
        title: 'Washroom Cleaning',
    },
    {
        imgSrc: '/balcony1.jpg',
        title: 'Balcony Cleaning',
    },
    {
        imgSrc: '/floor1.jpg',
        title: 'Floor Cleaning',
    },
    {
        imgSrc: '/appliance1.jpg',
        title: 'Appliance Cleaning',
    },
    {
        imgSrc: '/houseMaid2.jpg',
        title: 'House Maid Services',
    },
    {
        imgSrc: '/deep1.jpg',
        title: 'Deep Cleaning',
    },
    {
        imgSrc: '/ironing1.jpg',
        title: 'Ironing and Washing Clothes',
    },
    {
        imgSrc: '/mattress1.jpg',
        title: 'Mattress Cleaning',
    },
    {
        imgSrc: '/rugs3.jpg',
        title: 'Rugs Cleaning',
    },
]

const Services = () => {
    const xxs = useMediaQuery({ maxWidth: 350 });

    return (
        <section className='shared_container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-24 md:gap-x-10'>
                {services.map((service, index) => {
                    return (
                        <Link
                            key={service.title}
                            href={`/service/${encodeURIComponent(service.title.toLowerCase().replace(/\s+/g, '-'))}`}
                            className='rounded-md border border-white bg-white group cursor-pointer shadow-lg hover:shadow-xl outline-none relative group'
                        >
                            {/* aspect-ratio: 350/300 */}
                            <div className='overflow-hidden rounded-md aspect-[350/300]'>
                                <Image
                                    key={service.title}
                                    src={service.imgSrc}
                                    alt="service image"
                                    width={350}
                                    height={350}
                                    quality={95}
                                    priority={true}
                                    className='!w-full !h-full object-cover rounded-md group-hover:scale-110 transition-all duration-1000 group-hover:rounded-3xl'
                                />
                            </div>
                            <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/3 bg-white group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-green-500 w-[90%] flex items-center justify-between py-4 px-2 xxxs:p-4 transition-all duration-500 rounded-md shadow-lg group-hover:shadow-xl'>
                                <div className='h-fit'>
                                    <p className='text-green-700 group-hover:text-gray-100 duration-300'>Residential Service</p>
                                    <h2 className='text-base xxxs:text-lg font-medium xxxs:font-semibold text-green-700 mb-2 group-hover:text-white transition-all duration-300'>
                                        {service.title}
                                    </h2>
                                    {/* <p className='text-sm xxxs:text-base'>
                                        Starting from <span className='font-medium xxxs:font-semibold'>AED {service.rate}/hr</span>
                                    </p> */}
                                </div>
                                <span className='border border-black/5 p-1.5 xxxs:p-2 w-9 h-9 xxxs:h-auto xxxs:w-auto flex justify-center items-center rounded-full text-green-800 group-hover:bg-white group-hover:text-green-800 transition-all duration-500'>
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