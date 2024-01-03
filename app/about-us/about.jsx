'use client'

import WhyChooseUs from '@/components/WhyChooseUs';
// import { metadata } from '@/data/servicesData';
// import Head from 'next/head';
import Image from 'next/image'
import React from 'react'
import { useMediaQuery } from 'react-responsive';

const cards = [
    {
        heading: 'Our Commitment',
        desc: 'Our dedication to doing our best is what sets us apart. It shows in everything we do, from the start to finish. We provide personalized cleaning options and top-notch quality to help our clients and improve communication, making sure our customers are happy'
    },
    {
        heading: 'Mission & Vision',
        desc: 'Our goal is to be the cleaning partner you can rely on. We offer personalized, cutting-edge solutions to guarantee a cleaner and healthier space for you and your community. Looking ahead, we envision achieving excellence and becoming a leading cleaning service provider in Sharjah.'
    },
    {
        heading: 'Values',
        desc: "At TheCleaners Cleaning Service, we aim to provide top-notch residential and commercial cleaning services in Dubai, UAE, guided by our key principles: Clear Communication – Honesty – Quality Work – Eco-friendliness – Timeliness – Flexibility – Tailored Solutions – Happy Customers"
    }
]

const About = () => {
    const sm = useMediaQuery({ maxWidth: 640 });

    return (
        <>
            {/* <Head>
                <title>About Us - {metadata.title}</title>
                <meta name="description" content={`Learn about TheCleaners: ${metadata.description}`} />
            </Head> */}
            <div className='relative'>
                <div className='h-[30vh] xxs:h-[40vh] sm:h-[60vh] w-full relative'>
                    <Image
                        src={sm ? '/about4-4.png' : '/about4.jpg'}
                        // src='/about4.jpg'
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
                                <h3 className={` font-semibold uppercase text-xs w-350:text-sm xxs:text-base`}>About Company</h3>
                            </div>
                            <h2 className={`xxxs:font-bold w-350:font-extrabold text-xl xxxs:text-2xl w-350:text-3xl xxs:text-4xl sm:text-5xl my-1 w-350:my-2 xxs:my-3 xs:my-5 flex flex-col gap-0 w-350:gap-1 xxs:gap-1.5 xs:gap-2 sm:gap-3`}>
                                <span>Caring about your</span>
                                <span>cleaning needs</span>
                            </h2>
                            <p className='flex flex-col text-gray-50 w-full xxs:max-w-[80%] sm:max-w-[75%] text-xs xs:text-base'>
                                <span className='md:hidden' >
                                    Highly trained staff, over 5 years of experience, and wide-ranging residential and commercial cleaning services – TheCleaners takes care of all your cleaning needs!
                                </span>
                                <span className='hidden md:flex flex-col'>
                                    {/* {
                                    `Highly trained staff, over 5 years of experience, and wide-ranging
                                    residential and commercial cleaning services – TheCleaners
                                    takes care of all your cleaning needs!
                                    `
                                } */}
                                    Highly trained staff, over 5 years of experience, and wide-ranging {" "}
                                    <span className=''>residential and commercial cleaning services – TheCleaners</span>
                                    <span className=''>takes care of all your cleaning needs!</span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='shared_container grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 py-10 sm:py-20'>
                        <div className=''>
                            <div className='flex items-center gap-5'>
                                <div className={`bg-green-950 w-5 xxxs:w-14 h-[1px] rounded-full`}></div>
                                <h3 className={` font-semibold uppercase text-xs xxxs:text-sm w-350:text-base`}>Who are we?</h3>
                            </div>
                            <h2 className={`xxxs:font-bold w-350:font-extrabold text-gray-700 text-3xl sm:text-5xl my-5 flex flex-col gap-2`}>
                                We are on a mission
                            </h2>
                            <p className='text-gray-500 text-[17px] tracking-wider'>
                                At TheCleaners, our mission is to provide exceptional cleaning services for residential and commercial properties in Sharjah. Since our establishment in 2019, we have been committed to delivering the highest cleaning standards by employing a team of well-trained, experienced, and professional cleaners who utilize the latest technology to ensure your cleaning goals are met.
                            </p>
                            <p className='my-5 text-gray-600'>
                                As the leading cleaning company in Dubai, we take great pride in our team of dedicated and passionate cleaners who strive to exceed our clients' expectations. We believe in providing reliable and efficient cleaning services that not only satisfy our clients but also create a healthy and hygienic environment for them to live and work in. Choose TheCleaners for your cleaning needs and experience a level of cleanliness that exceeds your expectations.
                            </p>
                        </div>
                        <div className=''>
                            <Image
                                src='/housCleaning4.jpg'
                                alt="banner"
                                width={1200}
                                height={1000}
                                quality={95}
                                priority={true}
                                className='max-w-full w-full h-auto -z-50'
                            />
                        </div>
                    </div>
                    <WhyChooseUs />
                    <div className='shared_container py-10 sm:py-16 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                        {cards.map((card, ind) => {
                            return (
                                <div key={ind} className='border-black/5 bg-white shadow-lg rounded-md p-10 py-14 relative'>
                                    <h3 className={` font-semibold uppercase text-xs xxxs:text-sm w-350:text-base mb-3`}>{card.heading}</h3>
                                    <p>
                                        {card.desc}
                                    </p>
                                    <div className='w-full h-1 lg:h-2 absolute bottom-0 left-0 rounded-br-md rounded-bl-md bg-gradient-to-r from-blue-600 to-green-500'> </div>
                                </div>
                            )
                        })}
                        {/* <div className='flex items-center gap-5'>
                        <div className={`bg-green-950 w-5 xxxs:w-14 h-[1px] rounded-full`}></div>
                        <h3 className={` font-semibold uppercase text-xs xxxs:text-sm w-350:text-base`}>Our Mission</h3>
                    </div>
                    <div className='flex flex-col gap-2 mt-3 text-gray-600'>
                        <p>
                            At TheCleaners, our mission is straightforward: to make your living and working spaces clean, comfortable, and stress-free. We want to lift the burden of cleaning off your shoulders, so you can enjoy a space that not only looks good but also contributes to your overall well-being.
                        </p>
                        <p>
                            We're not just about cleaning; we're about going the extra mile. Our team is dedicated to learning and applying the latest and most effective cleaning techniques. We want to provide a service that stands out, leaving your space not just clean but truly refreshed.
                        </p>
                        <p>
                            But our mission goes beyond your immediate surroundings. We believe that a clean space has a positive ripple effect, impacting your life and the world around us. We're on a mission to create a healthier and happier environment for everyone.
                        </p>
                    </div>
                    <div className='flex items-center gap-5 mt-10'>
                        <div className={`bg-green-950 w-5 xxxs:w-14 h-[1px] rounded-full`}></div>
                        <h3 className={` font-semibold uppercase text-xs xxxs:text-sm w-350:text-base`}>Our Vision</h3>
                    </div>
                    <div className='flex flex-col gap-2 mt-3 text-gray-600'>
                        <p>
                            Looking ahead, our vision is simple yet powerful: we want to be the best in the business. When you think of cleaning services, we want TheCleaners to be the first name that comes to mind. Our vision is built on a foundation of integrity and customer satisfaction.
                        </p>
                        <p>
                            We're not just here to meet expectations; we want to exceed them. Our vision includes setting new standards, continually improving, and staying on top of the latest trends in cleaning. We're committed to being a company you can trust—reliable, honest, and always striving for excellence.
                        </p>
                        <p>
                            Join us on this journey toward a cleaner, healthier, and happier living and working environment. Experience the difference with TheCleaners, where simplicity meets excellence in every clean.
                        </p>
                    </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About