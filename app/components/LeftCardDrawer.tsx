"use client"
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import BackBtn from './BackBtn'
import { LineChart } from './LineChart'




const LeftCardDrawer = ({ children }) => {
    const [toggle, setToggle] = useState(false)
    const [selectedStats, setSelectedStats] = useState("total")

    return (
        <div className='h-full absolute left-0 top-0 flex '>
            <div className={` bg-white duration-300 ease-out ${toggle ? "w-3/4 p-10 border-2-gray-300" : "w-0"} `}>

                {/* <Button className={selectedStats === "total" ? "bg-blue-900 text-white" : ""} variant={"outline"} onClick={() => setSelectedStats("total")}>Total Area Stats</Button>
                <Button className={selectedStats === "cropland" ? "bg-blue-900 text-white" : ""} variant={"outline"} onClick={() => setSelectedStats("cropland")}>Cropland Area Stats</Button> */}
                <div className={!toggle ? "hidden" : ""}>
                    <div className='flex gap-3 pb-5'>
                        <BackBtn />
                        <h1 className='text-3xl font-medium w-full m-0 '>Evapotranspiration</h1>
                    </div>

                    <p className='text-lg font-normal text-gray-400 '>Explore patterns and trends in water availability and usage across various indicators.</p>
                    <p className='text-lg font-normal text-gray-400  pb-4'>Select a Category below to view detailed charts and insights.</p>
                    <LineChart />
                </div>


            </div>
            <Button variant={"ghost"} size={"lg"} className='bg-white rounded-none rounded-r-lg my-auto! py-7! px-3! hover:bg-gray-200 text-blue-800 *:size-7! cursor-pointer' onClick={() => setToggle(!toggle)}>
                {toggle ? <ChevronLeft /> : <ChevronRight />}
            </Button>

        </div>
    )
}

export default LeftCardDrawer