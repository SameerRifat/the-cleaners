'use client'

import React, { useState } from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Link from 'next/link';
import Image from 'next/image';
import { Collapse } from '@mui/material';

const navigation = [
    { name: 'Home', href: '/' },
    {
        name: 'Services',
        href: '/services',
        children: [
            {
                id: 1,
                title: 'Mattress Cleaning',
                href: '/service/Mattress-Cleaning',
            },
            {
                id: 2,
                title: 'Rugs Cleaning',
                href: '/service/Rugs-Cleaning',
            },
            {
                id: 3,
                title: 'Villa Cleaning',
                href: '/service/Villa-Cleaning',
            },
            {
                id: 4,
                title: 'Appartment Cleaning',
                href: '/service/Appartment-Cleaning',
            },
            {
                id: 5,
                title: 'Balcony Cleaning',
                href: '/service/Balcony-Cleaning',
            },
            {
                id: 6,
                title: 'Appliance Cleaning',
                href: '/service/Appliance-Cleaning',
            },
            {
                id: 7,
                title: 'Kitchen Cleaning',
                href: '/service/Kitchen-Cleaning',
            },
            {
                id: 8,
                title: 'Washroom Cleaning',
                href: '/service/Washroom-Cleaning',
            },
            {
                id: 9,
                title: 'Floor Cleaning',
                href: '/service/Floor-Cleaning',
            },
            {
                id: 10,
                title: 'House Maid Services',
                href: '/service/House-Maid-Services',
            },
            {
                id: 11,
                title: 'Deep Cleaning',
                href: '/service/Deep-Cleaning',
            },
            {
                id: 12,
                title: 'House Cleaning',
                href: '/service/House-Cleaning',
            },
            {
                id: 13,
                title: 'Ironing and Washing Clothes',
                href: '/service/Ironing-and-Washing-Clothes',
            },
            {
                id: 14,
                title: 'Office Cleaning',
                href: '/service/Office-Cleaning',
            },
        ],
    },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact' },
]

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [open, setOpen] = useState(null);

    const handleToggle = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <footer className='relative'>
            <div className='absolute top-0 left-0 w-full h-full -z-[9999]'>
                <Image
                    src='/footerBanner3.png'
                    alt="icon"
                    width={1200}
                    height={700}
                    quality={95}
                    priority={true}
                    className='max-w-full w-full h-full'
                />
            </div>
            <div className='pt-10 bg-blue-950/40'>
                <div className='shared_container grid grid-cols-1 sm:grid-cols-4 gap-6 text-white'>
                    <div className='order-4 sm:order-1'>
                        <h2 className='font-bold text-xl sm:text-2xl text-white mb-2'>Information</h2>
                        <div className='flex gap-2 pb-3 text-center'>
                            <div className='text-center'>
                                <FmdGoodIcon className='text-green-500' fontSize='small' />
                            </div>
                            <div className='flex flex-col gap-1 text-start'>
                                <h3 className='font-medium sm:font-semibold sm:text-lg'>Head Office</h3>
                                <span className='text-sm'>ABC Business Complex,</span>
                                <span className='text-sm'>34th St - Bu Shaghara - </span>
                                <span className='text-sm'>Sharjah, UAE</span>
                            </div>
                        </div>
                        <div className='flex gap-2 pb-3'>
                            <div>
                                <LocalPhoneOutlinedIcon className='text-green-500' fontSize='small' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 className='font-medium sm:font-semibold sm:text-lg'>Phone Number</h3>
                                {/* <span className='text-sm'>+971-58-124-9910</span> */}
                                <Link
                                    href='tel:+971581249910' target='_blank'
                                    className='text-sm'
                                >
                                    +971-58-124-9910
                                </Link>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div>
                                <EmailOutlinedIcon className='text-green-500' fontSize='small' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 className='font-medium sm:font-semibold sm:text-lg'>Email Address</h3>
                                <span className='text-sm'>info@thecleaners.com</span>
                            </div>
                        </div>
                    </div>
                    <div className=' order-2'>
                        <h2 className='font-bold text-xl sm:text-2xl text-white mb-2'>Quick Links</h2>
                        <ul className='ml-1 flex flex-col gap-y-5'>
                            {navigation.map((navLink, index) => {
                                if (!navLink.children) {
                                    return (
                                        <li key={index} className='flex gap-2 items-center w-fit text-white'>
                                            <span className='bg-green-500 w-2 h-2 rounded-sm'></span>
                                            <Link href={navLink.href.toLowerCase()} className='hover:text-green-500 relative group'>
                                                {navLink.name}
                                                <span className="underline absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
                                            </Link>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                    <div className='order-3'>
                        <h2 className='font-bold text-xl sm:text-2xl text-white mb-2'>Services</h2>
                        <ul className='ml-1 grid grid-cols-2 gap-2'>
                            {navigation.map((navLink, index) => {
                                if (navLink.children) {
                                    return (
                                        <div key={index}>
                                            {navLink.children.map((child) => (
                                                <li key={child.id} className='flex gap-1.5 items-center w-fit text-white p-0.5'>
                                                    <span className='bg-green-500 w-[6px] h-[6px] rounded-[1px]'></span>
                                                    <Link href={child.href.toLowerCase()} className='hover:text-green-500 text-xs group relative'>
                                                        {child.title}
                                                        <span className="underline absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </div>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                    <div className='order-1 sm:order-4 flex flex-col '>
                        <div className='flex items-start justify-start w-32'>
                            <Image src="/logo3.png" alt="Logo" quality={95} priority={true} width={150} height={100} className='max-w-full w-full h-auto' />
                        </div>
                        <p className='text-sm pl-3 mt-5'>
                            <span className='font-medium'>TheCleaners</span> is a professional cleaning company that is fully insured and bonded and will serve all your cleaning services needs in a professional way through an immense range of environment friendly safe - cleaning products, and with a dedicated team of professionals, to build the customers' satisfaction, at a very reasonable cost.
                        </p>
                    </div>
                </div>
                <div className='py-5 border-t border-gray-200 mt-8 text-center text-xs text-white'>
                    Copyright © {currentYear} TheCleaners. All right reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer