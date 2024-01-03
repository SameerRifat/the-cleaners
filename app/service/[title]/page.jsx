import React from 'react'
import ServiceDetail from './serviceDetail'
import { Metadata } from 'next'

export async function generateMetadata({ params }) {
    return {
        title: `${params.title} service | TheCleaners`,
    }
}

const page = ({ params }) => {
    return (
        <ServiceDetail params={params}/>
    )
}

export default page