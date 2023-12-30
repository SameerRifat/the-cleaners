'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useMediaQuery } from 'react-responsive';

const services = [
    {
        imgSrc: '/mattress1.jpg',
        title: 'Mattress Cleaning',
        rate: 25
    },
    {
        imgSrc: '/rugs3.jpg',
        title: 'Carpet/Rugs Cleaning',
        rate: 25
    },
    {
        imgSrc: '/villa.jpg',
        title: 'Villa Cleaning',
        rate: 25
    },
    {
        imgSrc: '/appartment.jpg',
        title: 'Appartment Cleaning',
        rate: 25
    },
    {
        imgSrc: '/balcony1.jpg',
        title: 'Balcony Cleaning',
        rate: 25
    },
    {
        imgSrc: '/appliance1.jpg',
        title: 'Appliance Cleaning',
        rate: 25
    },
    {
        imgSrc: '/kitchen1.jpg',
        title: 'Kitchen Cleaning',
        rate: 25
    },
    {
        imgSrc: '/washroom1.jpg',
        title: 'Washroom Cleaning',
        rate: 25
    },
    {
        imgSrc: '/floor1.jpg',
        title: 'Floor Cleaning',
        rate: 25
    },
    {
        imgSrc: '/houseMaid2.jpg',
        title: 'House Maid Services',
        rate: 25
    },
    {
        imgSrc: '/deep1.jpg',
        title: 'Deep Cleaning',
        rate: 25
    },
    
    {
        imgSrc: '/housCleaning1.jpg',
        title: 'House Cleaning',
        rate: 25
    },
    {
        imgSrc: '/ironing1.jpg',
        title: 'Ironing and Washing Clothes',
        rate: 25
    },
    {
        imgSrc: '/office.jpg',
        title: 'Office Cleaning',
        rate: 25
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
                            href={`/services/${encodeURIComponent(service.title.replace(/\s+/g, '-'))}`}
                            className='rounded-md border border-white bg-white group cursor-pointer shadow-lg hover:shadow-xl outline-none relative group'
                        >
                            <div className='overflow-hidden rounded-md'>
                                <Image
                                    key={service.title}
                                    src={service.imgSrc}
                                    alt="service image"
                                    width={350}
                                    height={350}
                                    quality={95}
                                    priority={true}
                                    className='max-w-full w-full h-[170px] xxxs:h-[250px] xxs:h-[280px] rounded-md group-hover:scale-110 transition-all duration-1000 group-hover:rounded-3xl'
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
// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { useMediaQuery } from 'react-responsive';

// const services = [
//     {
//         imgSrc: '/mattress1.jpg',
//         title: 'Mattress Cleaning',
//         rate: 25
//     },
//     {
//         imgSrc: '/carpet1.jpg',
//         title: 'Carpet Cleaning',
//         rate: 25
//     },
//     {
//         imgSrc: '/rugs1.jpg',
//         title: 'Rugs Cleaning',
//         rate: 25
//     },
//     {
//         imgSrc: '/curtains1.jpg',
//         title: 'Curtains Cleaning',
//         rate: 25
//     },
//     {
//         imgSrc: '/houseMaid2.jpg',
//         title: 'House Maid',
//         rate: 25
//     },
//     {
//         imgSrc: '/deep1.jpg',
//         title: 'Deep Cleaning',
//         rate: 25
//     },
//     {
//         imgSrc: '/glass1.jpg',
//         title: 'Glass Cleaning',
//         rate: 25
//     },
    
//     {
//         imgSrc: '/housCleaning1.jpg',
//         title: 'House Cleaning',
//         rate: 25
//     },
// ]

// const Services = () => {
//     const xxs = useMediaQuery({ maxWidth: 350 });

//     return (
//         <section className='shared_container'>
//             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10'>
//                 {services.map((service, index) => {
//                     return (
//                         <Link
//                             key={service.title}
//                             href={`/services/${encodeURIComponent(service.title.replace(/\s+/g, '-'))}`}
//                             className='rounded-lg border border-white bg-white group hover:-translate-y-2 hover:translate-x-0 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl outline-none'
//                         >
//                             <Image
//                                 key={service.title}
//                                 src={service.imgSrc}
//                                 alt="service image"
//                                 width={350}
//                                 height={350}
//                                 quality={95}
//                                 priority={true}
//                                 className='max-w-full w-full h-[170px] xxxs:h-[250px] xxs:h-[260px] rounded-tl-lg rounded-tr-lg'
//                             />
//                             <div className=' flex items-center justify-between py-4 px-2 xxxs:p-4'>
//                                 <div className=' h-fit'>
//                                     <h2 className='text-base xxxs:text-lg font-medium xxxs:font-semibold text-gray-800 mb-2 group-hover:text-blue-500 transition-all'>
//                                         {service.title}
//                                     </h2>
//                                     <p className='text-sm xxxs:text-base'>
//                                         Starting from <span className='font-medium xxxs:font-semibold'>AED {service.rate}/hr</span>
//                                     </p>
//                                 </div>
//                                 <span className='border border-black/5 p-1.5 xxxs:p-2 w-9 h-9 xxxs:h-auto xxxs:w-auto flex justify-center items-center rounded-full text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300'>
//                                     <ArrowForwardIcon fontSize={xxs ? 'small' : 'medium'}/>
//                                 </span>
//                             </div>
//                         </Link>
//                     )
//                 })}
//             </div>
//         </section>
//     )
// }

// export default Services