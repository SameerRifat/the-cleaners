"use client"

import React, { useRef } from 'react'
import SendIcon from '@mui/icons-material/Send';
import SendBtn from './SendBtn';
import { toast } from 'react-hot-toast';
import { sendEmail } from '@/actions/sendEmail';

const services = [
    {
        id: 1,
        title: 'Mattress Cleaning',
    },
    {
        id: 2,
        title: 'Rugs Cleaning',
    },
    {
        id: 3,
        title: 'Villa Cleaning',
    },
    {
        id: 4,
        title: 'Appartment Cleaning',
    },
    {
        id: 5,
        title: 'Balcony Cleaning',
    },
    {
        id: 6,
        title: 'Appliance Cleaning',
    },
    {
        id: 7,
        title: 'Kitchen Cleaning',
    },
    {
        id: 8,
        title: 'Washroom Cleaning',
    },
    {
        id: 8,
        title: 'Floor Cleaning',
    },
    {
        id: 9,
        title: 'House Maid Services',
    },
    {
        id: 10,
        title: 'Deep Cleaning',
    },
    {
        id: 11,
        title: 'House Cleaning',
    },
    {
        id: 12,
        title: 'Ironing and Washing Clothes',
    },
    {
        id: 13,
        title: 'Office Cleaning',
    },
]

const ContactForm = () => {
    const formRef = useRef(null)

    return (
        <div className='py-6 px-4 sm:p-6 sm:py-10 w-full max-w-4xl mx-auto bg-white shadow-lg rounded-md'>
            <form
                ref={formRef}
                className="flex flex-col gap-3"
                action={async (FormData) => {
                    const { data, error } = await sendEmail(FormData)
                    if (data?.error) {
                        toast.error(data.error.message)
                        return;
                    }
                    toast.success("Email sent successfully")

                    if (formRef.current) {
                        formRef.current.reset();
                    }
                }}
            >
                <div className='flex flex-col gap-1'>
                    <label className='font-medium'>Name<span className='text-orange-500'>*</span></label>
                    <input
                        className="h-12 p-2 bg-gray-50 border border-black/5 rounded-sm focus:outline-none placeholder:text-xs"
                        name="senderName"
                        type="text"
                        placeholder="Your Name"
                        required
                        maxLength={50}
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='font-medium'>Email<span className='text-orange-500'>*</span></label>
                    <input
                        className="h-12 p-2 bg-gray-50 border border-black/5 rounded-sm focus:outline-none placeholder:text-xs"
                        name="senderEmail"
                        type="email"
                        placeholder="Your Email"
                        required
                        maxLength={50}
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='font-medium'>Phone<span className='text-orange-500'>*</span></label>
                    <input
                        className="h-12 p-2 bg-gray-50 border border-black/5 rounded-sm focus:outline-none placeholder:text-xs"
                        name="senderPhone"
                        type="text"
                        placeholder="Your Phone Number"
                        required
                        maxLength={20}
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='font-medium clear-start'>Choose a service<span className='text-orange-500'>*</span></label>
                    <select name="service" id="cars"
                        required
                        className="h-12 p-2 bg-gray-50 border border-black/5 rounded-sm focus:outline-none placeholder:text-xs"
                    >
                        {services.map((service, ind) => {
                            return (
                                <option value={service.title} key={service.id}>
                                    {service.title}
                                </option>
                            )
                        })}
                    </select>
                    {/* <input
                        className="h-12 p-2 bg-gray-50 border border-black/5 rounded-sm focus:outline-none placeholder:text-xs"
                        name="subject"
                        type="text"
                        placeholder="Your Subject"
                        required
                        maxLength={500}
                    /> */}
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='font-medium'>Message</label>
                    <textarea
                        placeholder="Your message"
                        name="message"
                        className="h-52 p-2 bg-gray-50 border border-black/5 rounded-sm focus:outline-none placeholder:text-xs"
                        required
                        maxLength={5000}
                    ></textarea>
                </div>
                <SendBtn />
                {/* <button
                    type="submit"
                    className="group mt-5 flex items-center justify-center gap-2 h-[3rem] w-full bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-md outline-none transition-all hover:scale-[1.01]"
                >
                    Submit{" "}
                    <SendIcon className="text-base opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </button> */}
            </form>
        </div>
    )
}

export default ContactForm