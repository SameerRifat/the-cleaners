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
                title: 'Carpet Cleaning',
                href: '/services/Carpet-Cleaning',
            },
            {
                id: 2,
                title: 'Rugs Cleaning',
                href: '/services/Rugs-Cleaning',
            },
            {
                id: 3,
                title: 'Curtains Cleaning',
                href: '/services/Curtains-Cleaning',
            },
            {
                id: 4,
                title: 'Deep Cleaning',
                href: '/services/Deep-Cleaning',
            },
            {
                id: 5,
                title: 'Glass Cleaning',
                href: '/services/Glass-Cleaning',
            },
            {
                id: 6,
                title: 'House Maid',
                href: '/services/House-Maid',
            },
            {
                id: 7,
                title: 'Mattress Cleaning',
                href: '/services/Mattress-Cleaning',
            },
            {
                id: 8,
                title: 'House Cleaning',
                href: '/services/House-Cleaning',
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
        <nav className="bg-white border-b border-gray-100 shadow-2xl z-[9999]">
            <div className="shared_container flex justify-between items-center h-[50px] xxs:h-[60px] sm:h-[70px] ">
                <div className="">
                    <Link href='/'>
                        <Image src="/logo1.png" alt="Logo" width={150} height={100} className='max-w-full w-[80px] xxs:w-28 sm:w-32 h-auto' />
                        {/* <h2 className='font-bold xxxs:font-extrabold text-transparent text-xl xxxs:text-2xl bg-clip-text bg-gradient-to-tr from-blue-500 to-green-500'>TheWashers</h2> */}
                    </Link>
                </div>
                <div className="hidden md:flex md:flex-1 justify-center items-center h-full">
                    <div className='space-x-10 text-base flex items-center'>
                        {navigation.map((navLink) => {
                            if (navLink.children) {
                                return (
                                    <div className="">
                                        <Link
                                            href={navLink.href}
                                            onMouseEnter={() => setOpen2(true)}
                                            onMouseLeave={() => setOpen2(false)}
                                            className="font-extrabold py-0.5 pb-[26px] relative group text-gray-600 transition-all hover:text-blue-500"
                                        >
                                            Services
                                            <span className="underline absolute bottom-[20px] left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                                            <KeyboardArrowDownIcon />
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
                                                            // <div className="flex items-center border border-red-500" key={child.id}>
                                                            // <ArrowRightIcon />
                                                            <Link
                                                                key={child.id}
                                                                href={child.href}
                                                                className='text-gray-700 text-sm flex items-center hover:text-blue-500'
                                                            >
                                                                <ArrowRightIcon />
                                                                {child.title}
                                                            </Link>
                                                            // </div>
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
                                        href={navLink.href}
                                        className='text-gray-600 py-0.5 font-semibold hover:text-blue-500 transition-all duration-500 relative group'
                                    >
                                        {navLink.name}
                                        <span className="underline absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                                    </Link>
                                )
                            }
                        })}

                    </div>
                </div>
                <div className="hidden md:flex">
                    <Link href={`https://wa.me/${971557924200}`}
                        rel="noopener noreferrer"
                        className="px-3 py-2.5 font-semibold border border-transparent bg-blue-500 text-white rounded-md shadow-md hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 transition-all outline-none hover:shadow-lg hover:scale-[1.03] inline-block"
                    >
                        Conact Now
                    </Link>
                </div>
                <button onClick={() => setOpenSidebar(true)} className='md:hidden text-gray-800'>
                    <MenuOutlinedIcon fontSize={isSmallScreen ? 'small' : 'medium'}/>
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
                        // boxShadow: (theme) => theme.shadows[8],
                        padding: '24px'
                    },
                }}
            >
                <div className="flex items-center justify-between">
                    <div className='flex items-start justify-start w-20'>
                        {/* <Link href='/' className=' w-full h-full relative'> */}
                        <Image src="/logo1.png" alt="Logo" quality={95} priority={true} width={150} height={100} className='max-w-full w-full h-auto' />
                        {/* <h2 className='font-bold xxxs:font-extrabold text-transparent text-xl xxxs:text-2xl bg-clip-text bg-gradient-to-tr from-blue-500 to-green-500'>TheWashers</h2> */}
                        {/* </Link> */}
                    </div>
                    {/* <Link href='/' className="-m-1.5 p-1.5" onClick={() => setOpen(false)}>
                            <h2 className='font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-tr from-blue-500 to-green-500'>TheWashers</h2>
                        </Link> */}
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
                                    <>
                                        <div className="flex w-full items-center justify-between rounded-md hover:bg-gray-50 hover:text-blue-500 px-2 py-3"
                                        >
                                            <Link
                                                href={navLink.href}
                                                className="font-semibold"
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
                                                    {navLink.children.map((child) => (
                                                        // <div key={child.id} className="flex items-center text-sm py-2 px-2 font-normal hover:bg-slate-50 hover:text-blue-500 w-full h-full">
                                                        <Link
                                                            href={child.href}
                                                            className="flex items-center text-sm py-2 px-2 font-normal hover:bg-slate-50 hover:text-blue-500 w-full h-full rounded-md"
                                                        >
                                                            {child.title}
                                                        </Link>
                                                        // </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </Collapse>
                                    </>
                                )
                            } else {
                                return (
                                    <Link key={navLink.name}
                                        href={navLink.href}
                                        onClick={() => setOpen(false)}
                                        className='text-black px-2 py-3 font-semibold w-full rounded-md hover:bg-gray-50 hover:text-blue-500'
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