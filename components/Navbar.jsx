"use client"

import { Collapse, Drawer, Paper } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive';

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


const Navbar = () => {
    const [open2, setOpen2] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false)
    const isSmallScreen = useMediaQuery({ maxWidth: 580 });

    const [open, setOpen] = useState(null);

    const handleToggle = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <nav className="bg-white border-b border-gray-100 shadow-md z-[9999]">
            <div className="shared_container flex justify-between items-center h-[50px] xxxs:h-[60px] sm:h-[70px] ">
                <div className="">
                    <Link href='/'>
                        <Image src="/logo3.png" alt="Logo" width={150} height={100} className='max-w-full w-[80px] xxxs:w-[90px] xxs:w-28 sm:w-32 h-auto' />
                    </Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 justify-center items-center h-full">
                    <div className='space-x-10 text-base flex items-center'>
                        {navigation.map((navLink, ind) => {
                            if (navLink.children) {
                                return (
                                    <div className="" key={ind}>
                                        <Link
                                            href={navLink.href.toLowerCase()}
                                            onMouseEnter={() => setOpen2(true)}
                                            onMouseLeave={() => setOpen2(false)}
                                            className="font-extrabold py-0.5 pb-[26px] relative group text-gray-600 hover_text_gradient group"
                                        >
                                            Services
                                            <span className="underline absolute bottom-[20px] left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg_gradient transition-all group-hover:w-full"></span>
                                            <KeyboardArrowDownIcon className='group-hover:text-green-500' />
                                        </Link>
                                        {open2 && (
                                            <Paper
                                                onMouseEnter={() => setOpen2(true)}
                                                onMouseLeave={() => setOpen2(false)}
                                                sx={{
                                                    position: 'absolute',
                                                    left: '0',
                                                    right: '0',
                                                    top: '115px',
                                                    width: '400px',
                                                    margin: '0 auto',
                                                    borderRadius: '10px',
                                                    zIndex: 999
                                                }}
                                                elevation={9}
                                            >
                                                <div className="grid grid-cols-2 gap-x-5 gap-y-3 p-5">
                                                    {navLink.children.map((child) => {
                                                        return (
                                                            <Link
                                                                key={child.id}
                                                                href={child.href.toLowerCase()}
                                                                className='text-gray-700 text-sm flex items-center hover_text_gradient group'
                                                                onClick={() => setOpen2(false)}
                                                            >
                                                                <ArrowRightIcon className='group-hover:text-blue-500' />
                                                                {child.title}
                                                            </Link>
                                                        )
                                                    })}
                                                </div>
                                            </Paper>
                                        )}
                                    </div>
                                )
                            } else {
                                return (
                                    <Link
                                        key={navLink.name}
                                        href={navLink.href.toLowerCase()}
                                        className='text-gray-600 py-0.5 font-semibold hover_text_gradient duration-500 relative group'
                                    >
                                        {navLink.name}
                                        <span className="underline absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg_gradient transition-all group-hover:w-full"></span>
                                    </Link>
                                )
                            }
                        })}

                    </div>
                </div>
                <div className="hidden lg:flex">
                    <Link
                        href='/contact'
                        rel="noopener noreferrer"
                        className='bg_gradient px-3 py-2.5 font-semibold text-white rounded-md hover_bg_gradient shadow-lg hover:shadow-xl inline-block hover:scale-105'
                    >
                        Conact Now
                    </Link>
                </div>
                <button onClick={() => setOpenSidebar(true)} className='lg:hidden text-gray-800'>
                    <MenuOutlinedIcon fontSize={isSmallScreen ? 'small' : 'medium'} />
                </button>
            </div>
            <Drawer
                anchor="left"
                open={openSidebar}
                onClose={() => setOpenSidebar(false)}
                variant="temporary"
                PaperProps={{
                    sx: {
                        width: isSmallScreen ? '100%' : 270,
                        border: '0 !important',
                        padding: '24px'
                    },
                }}
            >
                <div className="flex items-center justify-between">
                    <div className='flex items-start justify-start w-20'>
                        <Image src="/logo3.png" alt="Logo" quality={95} priority={true} width={150} height={100} className='max-w-full w-full h-auto' />
                    </div>
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700 self-start"
                        onClick={() => setOpenSidebar(false)}
                    >
                        <CloseOutlinedIcon />
                    </button>
                </div>
                <div className="mt-5 flow-root">
                    <div className="flex flex-col justify-start gap-1 ">
                        {navigation.map((navLink, index) => {
                            if (navLink.children) {
                                return (
                                    <div key={index}>
                                        <div className="flex w-full items-center justify-between rounded-md hover:bg-gray-50 px-2 py-3">
                                            <Link
                                                href={navLink.href.toLowerCase()}
                                                className="font-semibold hover_text_gradient text-base"
                                            >
                                                Services
                                            </Link>
                                            <span className="flex items-center cursor-pointer" onClick={() => handleToggle(index)}>
                                                {open ? (
                                                    <KeyboardArrowUpIcon className=" text-gray-900" aria-hidden="true" fontSize='medium' />
                                                ) : (
                                                    <KeyboardArrowDownIcon className=" text-gray-900" aria-hidden="true" fontSize='medium' />
                                                )}
                                            </span>
                                        </div>
                                        <Collapse in={open === index} timeout="auto" unmountOnExit>
                                            <div className="pl-3">
                                                <div className="space-y-1">
                                                    {navLink.children.map((child, ind) => (
                                                        <Link
                                                            key={ind}
                                                            href={child.href.toLowerCase()}
                                                            onClick={() => setOpenSidebar(false)}
                                                            className="flex items-center text-sm py-2 px-2 font-normal hover:bg-slate-50 hover_text_gradient w-full h-full rounded-md"
                                                        >
                                                            {child.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </Collapse>
                                    </div>
                                )
                            } else {
                                return (
                                    <Link key={navLink.name}
                                        href={navLink.href.toLowerCase()}
                                        onClick={() => setOpenSidebar(false)}
                                        className='text-black px-2 py-3 font-semibold w-full rounded-md hover:bg-gray-100 hover_text_gradient'
                                    >
                                        {navLink.name}
                                    </Link>
                                )
                            }
                        })}
                    </div>
                </div>
            </Drawer>
        </nav>
    )
}

export default Navbar