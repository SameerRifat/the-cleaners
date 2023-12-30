import Image from 'next/image'
import React from 'react'
import SectionHeading from './SectionHeading'

const cards = [
    {
        title: 'Professional Expertise',
        desc: 'Working since 2019, TheCleaners Cleaning Services brings 5 years of hands-on experience in delivering top-notch cleaning services to the residents of the UAE.',
        iconImage: '/experience.png'
    },
    {
        title: 'One-Stop Shop',
        desc: "For all your cleaning requirements in the UAE, TheCleaners Cleaning Services is your one-stop solution. From floors and walls to carpets and curtains, we ensure every corner of your property is impeccably clean.",
        iconImage: '/globe.png'
    },
    {
        title: 'Eco-friendly',
        desc: "Specializing in the use of eco-friendly products, we employ cutting-edge technology to provide high-quality, non-toxic cleaning services. Our commitment is to offer a thorough and outstanding clean with a focus on environmental responsibility.",
        iconImage: '/leaf.png'
    },
    {
        title: 'Customized Solutions',
        desc: "Recognizing that each client has unique cleaning needs, we engage in open communication to understand your specific requirements. Our approach involves crafting customized cleaning plans tailored to your individual situation.",
        iconImage: '/customize.png'
    },
]

const WhyChooseUs = () => {
    return (
        <section className='bg-white py-20'>
            <div className='shared_container'>
                <SectionHeading
                    lineOne="The Best Cleaning Company"
                    lineTwo="in UAE"
                    subtitle="Why Choose Us"
                />
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 xl:px-10'>
                    {cards.map((item, ind) => {
                        return (
                            <div key={ind} className='flex gap-1 xxxs:gap-3 xxs:gap-5 border border-black/5 shadow-sm p-3 xxxs:p-4 xxs:p-5 rounded-lg'>
                                <div className=''>
                                    <div className='bg_gradient w-12 h-12 xxs:w-16 xxs:h-16 rounded-full flex justify-center items-center'>
                                        <Image
                                            src={item.iconImage}
                                            alt="icon"
                                            width={40}
                                            height={40}
                                            quality={95}
                                            priority={true}
                                            className='max-w-full w-7 xxs:w-8 h-7 xxs:h-8'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h2 className='font-semibold xxs:font-bold mb-1 xxs:mb-2 capitalize xxs:text-lg text-gray-800'>{item.title}</h2>
                                    <p className='text-sm xxs:text-base text-gray-700'>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                            // <div key={ind} className='flex gap-1 xxxs:gap-3 xxs:gap-5 bg-[#fdfdfd] shadow-lg p-3 xxxs:p-4 xxs:p-5 rounded-lg'>
                            //     <div className=''>
                            //         <div className='bg_gradient w-12 h-12 xxs:w-16 xxs:h-16 rounded-full flex justify-center items-center'>
                            //             <Image
                            //                 src={item.iconImage}
                            //                 alt="icon"
                            //                 width={40}
                            //                 height={40}
                            //                 quality={95}
                            //                 priority={true}
                            //                 className='max-w-full w-7 xxs:w-8 h-7 xxs:h-8'
                            //             />
                            //         </div>
                            //     </div>
                            //     <div>
                            //         <h2 className='font-semibold xxs:font-bold mb-1 xxs:mb-2 capitalize xxs:text-lg text-gray-800'>{item.title}</h2>
                            //         <p className='text-sm xxs:text-base text-gray-700'>
                            //             {item.desc}
                            //         </p>
                            //     </div>
                            // </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs