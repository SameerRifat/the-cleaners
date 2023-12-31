"use client"

import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import React from 'react'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

const items = [
    {
        icon: <EmailOutlinedIcon className='text-green-600' fontSize='large' />,
        title: 'Email',
        desc: 'info@thecleaners.com'
    },
    {
        icon: <LocalPhoneOutlinedIcon className='text-green-600' fontSize='large' />,
        title: 'Phone',
        desc: '+971-55-142-7008'
    },
    {
        icon: <WhatsAppIcon className='text-green-600' fontSize='large' />,
        title: 'WhatsApp',
        desc: '+971-55-142-7008'
    },
]
const contactInfo = [
    {
        icon: WhatsAppIcon,
        title: 'WhatsApp',
        subTitle: '+971-58-124-9910',
        link: 'https://wa.me/971581249910' // WhatsApp link
    },
    {
        icon: LocalPhoneOutlinedIcon,
        title: 'Call',
        subTitle: '+971-58-124-9910',
        link: 'tel:+971581249910' // Phone call link
    },
    {
        icon: EmailOutlinedIcon,
        title: 'Email',
        subTitle: 'info@thewashers.com',
        link: 'mailto:info@thewashers.com' // Email link
    }
]


const page = () => {
    const sm = useMediaQuery({ maxWidth: 640 });

    return (
        <div className='relative'>
            <div className='h-[30vh] xxs:h-[40vh] sm:h-[50vh] w-full relative'>
                <Image
                    src={sm ? '/cu3-3.png' : '/cu3.jpg'}
                    // src='/cu3.jpg'
                    alt="banner"
                    width={1200}
                    height={1000}
                    quality={95}
                    priority={true}
                    className='max-w-full w-full h-full -z-50'
                />
                <div className='absolute top-0 left-0 w-full h-full z-50 flex items-center'>
                    <div className='shared_container w-full h-fit flex flex-col justify-end text-white'>
                        <div className='flex items-center gap-2 sm:gap-5'>
                            <div className={`bg-white w-5 xxxs:w-8 xs:w-14 h-[1px] rounded-full`}></div>
                            <h3 className={` font-semibold uppercase text-xs xxxs:text-sm w-350:text-base`}>Contact</h3>
                        </div>
                        <h2 className={`xxxs:font-bold w-350:font-extrabold text-xl xxxs:text-2xl w-350:text-3xl xs:text-5xl my-2 xs:my-5`}>
                            Get in touch
                        </h2>
                        <p className='flex flex-col text-gray-50 max-w-[80%] xxs:max-w-[75%] text-xs xs:text-base'>
                            <span className='sm:hidden' > If you have any questions or queries, feel free to write to us or visit us anytime</span>
                            <span className='hidden sm:flex flex-col'>
                                If you have any questions or queries, feel free to write to us {" "}
                                <span className=''>or visit us anytime</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='py-10 sm:py-20'>
                <div className='shared_container grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16'>
                    <div className=''>
                        <div className='flex items-center gap-5'>
                            <div className={`bg-green-950 w-5 xxxs:w-14 h-[1px] rounded-full`}></div>
                            <h3 className={` font-semibold uppercase text-xs xxxs:text-sm w-350:text-base`}>Offices</h3>
                        </div>
                        <h2 className={`xxxs:font-bold w-350:font-extrabold text-gray-800 text-3xl sm:text-5xl my-5 flex flex-col gap-2`}>
                            <span className='hidden sm:block'>Delivering Quality</span>
                            <span className='hidden sm:block'>Cleaning Services in</span>
                            <span className='hidden sm:block'>UAE for over a decade!</span>
                            <span className='block sm:hidden'>
                                Delivering Quality Cleaning Services in UAE for over a decade!
                            </span>
                        </h2>
                        <p className='flex flex-col gap-1 text-gray-700'>
                            <span className='hidden xs:block'>Reach out to us today! Try us once, and we bet you will</span>
                            <span className='hidden xs:block'>never go anywhere else!</span>
                            <span className='block xs:hidden'>
                                Reach out to us today! Try us once, and we bet you will never go anywhere else!
                            </span>
                        </p>
                        <div className='border border-black/5 my-8'></div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-2 xl:gap-5'>
                            <div className=''>
                                <h3 className='font-bold text-lg text-gray-800 mb-3'>Address</h3>
                                <p>
                                    {
                                        `ABC Business Complex,
                                        5th Floor, Office #504,
                                        34th St - Bu Shaghara Sharjah,
                                        United Arab Emirates`
                                    }
                                </p>
                            </div>
                            <div className=' flex flex-col gap-5'>
                                {contactInfo.map((item, ind) => {
                                    return (
                                        <div className='flex items-center gap-4'>
                                            <span>
                                                <item.icon
                                                    className='text-green-600'
                                                    fontSize='medium'
                                                />
                                            </span>
                                            <p>
                                                <span className='font-semibold'>{item.title}: </span>
                                                <Link
                                                    href={item.link} target='_blank'
                                                >
                                                    {item.subTitle}
                                                </Link>
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div className='w-[100%] sm:w-[90%] mx-auto max-w-[1600px] my-10'>
                <h2
                    className='mb-5 text-center xxxs:font-bold w-350:font-extrabold text-gray-800 text-xl xxxs:text-2xl w-350:text-3xl xs:text-4xl'
                >
                    Get Direction
                </h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.003889845189!2d55.396579599999995!3d25.3376505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b007500145f%3A0x8977c523f157ebeb!2sThe%20Cleaners!5e0!3m2!1sen!2s!4v1704018252525!5m2!1sen!2s"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"
                viewBox="-25 -25 250 250" class="float">
                <defs>
                    <linearGradient id="lgrad" x1="100%" y1="50%" x2="0%" y2="50%" >
                        <stop offset="0%" style={{ stopColor: "#00FF84", stopOpacity: 1.00 }} />
                        <stop offset="100%" style={{ stopColor: "#008EE6", stopOpacity: 1.00 }} />
                    </linearGradient>
                </defs>
                <path d="M189.55802818141814 55.510005751221804 C179.52625142447948 28.762578362246895 117.42637242189691 -4.793500404624708 89.36701689825597 0.566908574871178 C55.087056898505445 7.115690682307769 -5.534254813252903 73.68005487903925 0.32730604581234957 108.08418702869028 C7.149519950344808 148.1268231742699 101.24043573669647 205.34672524095515 139.55089694980055 191.84621141052176 C173.79153253416231 179.77989428376821 202.30705294048136 89.5023505058462 189.55802818141814 55.510005751221804Z" stroke="none" fill="url(#lgrad)" />
            </svg> */}
        </div>
    )
}

export default page