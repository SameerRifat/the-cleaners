import Image from 'next/image'
import React from 'react'

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
        <section className='h-[1300px] xxs:h-[1200px] sm:h-[900px] lg:h-[600px]  mb-72 sm:mb-40 relative'>
            <Image
                src="/glassBanner1.jpg"
                alt="service image"
                width={350}
                height={350}
                quality={95}
                priority={true}
                className='max-w-full w-full h-full -z-[9999]'
            />
            <div
                className='w-full h-full absolute left-0 top-0 bg-green-500 bg-opacity-65'
                // className='w-full h-full absolute left-0 top-0 bg-[#0A7ABF] bg-opacity-65'
            >
            </div>
            <div className=' w-full h-full absolute top-0 left-0 flex justify-center items-center'>
                <div className='shared_container h-fit my-auto'>
                    <div className=' flex items-center justify-center'>
                        <div className='flex items-center gap-3'>
                            <div className='bg-white w-5 xxxs:w-14 h-0.5 rounded-full'></div>
                            <h3 className='text-white font-semibold uppercase text-xs xxxs:text-sm w-350:text-base'>How it works</h3>
                            <div className='bg-white w-5 xxxs:w-14 h-0.5 rounded-full'></div>
                        </div>
                    </div>
                    <div className=' flex justify-center mt-3 xxs:mt-7 mb-16'>
                        <h2 className='text-white xxxs:font-bold w-350:font-extrabold text-xl xxxs:text-2xl w-350:text-3xl xs:text-4xl flex flex-col items-center justify-center gap-2'>
                            <span className='hidden xxxs:block'>Get amazing Cleaning</span>
                            <span className='hidden xxxs:block'>in 4 simple steps</span>
                            <span className='block xxxs:hidden text-center'>Get amazing Cleaning in 4 simple steps</span>
                        </h2>
                    </div>
                    {/* #f9fafb */}
                    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-16'>
                        {steps.map((item, ind) => {
                            return (
                                <div className='h-fit sm:h-60 bg-green-700 bg-opacity-85 shadow-lg rounded-md px-3 py-5 xxxs:p-5 relative'>
                                    <div className='bg-green-500 absolute left-[10%] top-0 -translate-y-1/2  p-4 rounded-full flex justify-center items-center'>
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
                                    <h3 className='text-white font-semibold xxxs:font-bold text-base xxxs:text-lg mt-7 xxxs:mt-10 capitalize'>{item.title}</h3>
                                    <div className='bg-green-500 h-[3px] w-8 my-4'></div>
                                    <p className='text-gray-200 text-xs xxxs:text-sm'>
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
// import Image from 'next/image'
// import React from 'react'

// const steps = [
//     {
//         title: 'Reach Out to Us',
//         desc: 'Let us know what service your looking for. give us a call or chat with us on WhatsApp.',
//         iconImage: '/icon1.png'
//     },
//     {
//         title: 'Plan Your Time',
//         desc: "Just let us know when you want us, and we'll arrange our schedule to fit your needs. Easy peasy!",
//         iconImage: '/icon2.png'
//     },
//     {
//         title: 'Sit back & relax',
//         desc: "Trust our expert cleaners with your keys, and relax. Your house will be sparkling clean in no time.",
//         iconImage: '/icon3.png'
//     },
//     {
//         title: 'Convenient Payment',
//         desc: "Pay with cash at your convenience. No online hassle – just a simple and straightforward payment process.",
//         iconImage: '/icon4.png'
//     },
// ]

// const HowItWorks = () => {
//     return (
//         <section className='h-[1300px] xxs:h-[1200px] sm:h-[900px] lg:h-[600px]  mb-72 sm:mb-40 relative'>
//             <Image
//                 src="/glassBanner1.jpg"
//                 alt="service image"
//                 width={350}
//                 height={350}
//                 quality={95}
//                 priority={true}
//                 className='max-w-full w-full h-full -z-[9999]'
//             />
//             <div
//                 className='w-full h-full absolute left-0 top-0 bg-green-500 bg-opacity-65'
//                 // className='w-full h-full absolute left-0 top-0 bg-[#0A7ABF] bg-opacity-65'
//             >
//             </div>
//             <div className=' w-full h-full absolute top-0 left-0 flex justify-center items-center'>
//                 <div className='shared_container h-fit my-auto'>
//                     <div className=' flex items-center justify-center'>
//                         <div className='flex items-center gap-3'>
//                             <div className='bg-white w-5 xxxs:w-14 h-0.5 rounded-full'></div>
//                             <h3 className='text-white font-semibold uppercase text-xs xxxs:text-sm w-350:text-base'>How it works</h3>
//                             <div className='bg-white w-5 xxxs:w-14 h-0.5 rounded-full'></div>
//                         </div>
//                     </div>
//                     <div className=' flex justify-center mt-3 xxs:mt-7 mb-16'>
//                         <h2 className='text-white xxxs:font-bold w-350:font-extrabold text-xl xxxs:text-2xl w-350:text-3xl xs:text-4xl flex flex-col items-center justify-center gap-2'>
//                             <span className='hidden xxxs:block'>Get amazing Cleaning</span>
//                             <span className='hidden xxxs:block'>in 4 simple steps</span>
//                             <span className='block xxxs:hidden text-center'>Get amazing Cleaning in 4 simple steps</span>
//                         </h2>
//                     </div>
//                     {/* #f9fafb */}
//                     <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-16'>
//                         {steps.map((item, ind) => {
//                             return (
//                                 <div className='h-fit sm:h-60 bg-[#2C5BC6] bg-opacity-85 shadow-lg rounded-md px-3 py-5 xxxs:p-5 relative'>
//                                     <div className='bg-blue-500 absolute left-[10%] top-0 -translate-y-1/2  p-4 rounded-full flex justify-center items-center'>
//                                         <Image
//                                             src={item.iconImage}
//                                             alt="icon"
//                                             width={40}
//                                             height={40}
//                                             quality={95}
//                                             priority={true}
//                                             className='max-w-full w-6 xxxs:w-9 xxs:w-10 h-6 xxxs:h-9 xxs:h-10'
//                                         />
//                                     </div>
//                                     <h3 className='text-white font-semibold xxxs:font-bold text-base xxxs:text-lg mt-7 xxxs:mt-10'>{item.title}</h3>
//                                     <div className='bg-green-500 h-[3px] w-8 my-4'></div>
//                                     <p className='text-gray-200 text-xs xxxs:text-sm'>
//                                         {item.desc}
//                                     </p>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default HowItWorks