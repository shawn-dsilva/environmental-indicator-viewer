"use client"
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import InfoCard from './InfoCard'

const INFO = [
    {
        title: "Water Availability and Usage Analysis",
        desc: "Includes data on evapotranspiration, precipitation, water footprint, virtual water, and water productivity.",
        value: "154.17",
    }, {
        title: "Ecosystem and Land Insights",
        desc: "Provides information on biomass production, land cover classification, and hydronomic zones.",
        value: "154.17",
    }, {
        title: "Climate and Environmental Conditions",
        desc: "Offers data related to drought conditions and climate change.",
        value: " 154.17",
    }, {
        title: "Additional Data and Resources",
        desc: "Contains data on cropping intensity, elevation, population, and surface water.",
        value: " 154.17",
    },
]


const MyCardDrawer = ({ children }) => {
    const [toggle, setToggle] = useState(false)

    return (
        <div className='w-full absolute bottom-0 left-0 '>
            <Button variant={"ghost"} size={"lg"} className='bg-gray-500/60 rounded-none rounded-t-lg mx-auto md:ml-3 hover:bg-gray-500/40 text-white *:size-7! cursor-pointer' onClick={() => setToggle(!toggle)}>
                {toggle ? <ChevronDown /> : <ChevronUp />}
            </Button>
            <div className={`w-full bg-gray-500/60 duration-300 ease-linear ${toggle ? "h-[500px] p-10" : "h-0"}  w-full flex flex-row gap-8`}>
                {toggle && INFO.map((item, index) => <InfoCard key={index} data={item} />)}
            </div>
        </div>
    )
}

export default MyCardDrawer