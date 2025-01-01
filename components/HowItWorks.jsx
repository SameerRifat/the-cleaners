import Image from 'next/image'
import React from 'react'
import SectionHeading from './SectionHeading'

const steps = [
    {
        title: 'Reach Out to Us',
        desc: 'Let us know what service your looking for. give us a call or chat with us on WhatsApp.',
        iconImage: '/icon1.png'
    },
    {
        title: 'Plan Your Time',
        desc: "Just let us know when you want us, and we'll arrange our schedule to fit your needs. Easy peasy!",
        iconImage: '/icon2.png'
    },
    {
        title: 'Sit back & relax',
        desc: "Trust our expert cleaners with your keys, and relax. Your house will be sparkling clean in no time.",
        iconImage: '/icon3.png'
    },
    {
        title: 'Convenient Payment',
        desc: "Pay with cash at your convenience. No online hassle – just a simple and straightforward payment process.",
        iconImage: '/icon4.png'
    },
]

const HowItWorks = () => {
    return (
        <section className=' bg-white py-14 bg-gradient-to-r from-blue-300 to-green-300'>
            {/* <Image
                src="/glassBanner1.jpg"
                alt="service image"
                width={350}
                height={350}
                quality={95}
                priority={true}
                className='max-w-full w-full h-full -z-[9999]'
            /> */}
            {/* <div
                className='w-full h-full absolute left-0 top-0 bg-green-500 bg-opacity-65'
            >
            </div> */}
            <div className='flex justify-center items-center'>
                <div className='shared_container'>
                    <SectionHeading
                        lineOne="Get amazing Cleaning"
                        lineTwo="in 4 simple steps"
                        subtitle="How it works"
                    />
                    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-16'>
                        {steps.map((item, ind) => {
                            return (
                                <div className='h-fit sm:h-60 bg-gradient-to-tr from-blue-400 to-green-400 shadow-lg rounded-md px-3 py-5 xxxs:p-5 relative'>
                                    <div className='bg-gradient-to-br from-green-500 to-blue-500 shadow-lg absolute left-[10%] top-0 -translate-y-1/2  p-4 rounded-full flex justify-center items-center'>
                                        <Image
                                            src={item.iconImage}
                                            alt="icon"
                                            width={40}
                                            height={40}
                                            quality={95}
                                            priority={true}
                                            className='max-w-full w-6 xxxs:w-9 xxs:w-10 h-6 xxxs:h-9 xxs:h-10'
                                        />
                                    </div>
                                    <h3 className='text-gray-50 font-semibold xxxs:font-bold text-base xxxs:text-lg mt-7 xxxs:mt-10 capitalize'>{item.title}</h3>
                                    <div className='bg-blue-600 h-[3px] w-8 my-4 rounded-full'></div>
                                    <p className='text-gray-50 text-xs xxxs:text-sm'>
                                        {item.desc}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks