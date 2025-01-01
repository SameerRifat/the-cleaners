"use client"

import Image from 'next/image'
import React from 'react'
import SectionHeading from './SectionHeading'
import ContactForm from './ContactForm'
import { useMediaQuery } from 'react-responsive'

const GetInTouch = () => {
    const sm = useMediaQuery({ maxWidth: 640 });

    return (
        <>
            {/* <section className="h-[400px] sm:h-[500px] relative mb-20 -z-[9999]"> */}
            <section className="aspect-[2956/1000] min-h-[400px] sm:min-h-[500px] max-h-[600px] w-full relative mb-20 -z-[9999]">
                <div className='absolute top-0 left-0 w-full h-full'>
                    <Image
                        src='/banner1.jpg'
                        alt="icon"
                        width={1200}
                        height={700}
                        quality={95}
                        priority={true}
                        className='max-w-full w-full h-full object-cover'
                    />
                    <div className='absolute top-0 left-0 w-full h-full bg-blue-500/50 sm:bg-blue-500/45 py-14'>
                        <SectionHeading
                            lineOne="Be a Part of Hundreds"
                            lineTwo="of Happy Families"
                            subtitle="Get In Touch"
                            text
                        />
                    </div>
                </div>
            </section>
            <div className='z-50 -mt-64 sm:-mt-80 2xl:-mt-[400px] pb-20'>
                <div className='shared_container w-full xl:w-[80%]'>
                    <ContactForm />
                </div>
            </div>
        </>
    )
}

export default GetInTouch