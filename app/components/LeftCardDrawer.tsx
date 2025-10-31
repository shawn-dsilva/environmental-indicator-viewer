"use client"
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import InfoCard from './InfoCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"




const LeftCardDrawer = ({ children }) => {
    const [toggle, setToggle] = useState(false)
    const [selectedStats, setSelectedStats] = useState("total")

    return (
        <div className='h-full absolute left-0 top-0 flex '>
            <div className={` bg-white duration-300 ease-out ${toggle ? "w-3/4 p-10 border-2-gray-300" : "w-0"} `}>

                {/* <Button className={selectedStats === "total" ? "bg-blue-900 text-white" : ""} variant={"outline"} onClick={() => setSelectedStats("total")}>Total Area Stats</Button>
                <Button className={selectedStats === "cropland" ? "bg-blue-900 text-white" : ""} variant={"outline"} onClick={() => setSelectedStats("cropland")}>Cropland Area Stats</Button> */}
                <div className={!toggle ? "hidden" : ""}>
                    <h1 className='text-4xl font-medium  pb-5'>Evapo Transpiration</h1>
                    <p className='text-lg font-normal text-gray-400 '>Explore patterns and trends in water availability and usage across various indicators.</p>
                    <p className='text-lg font-normal text-gray-400  pb-4'>Select a Category below to view detailed charts and insights.</p>

                </div>

            </div>
            <Button variant={"ghost"} size={"lg"} className='bg-white rounded-none rounded-r-lg my-auto! py-7! px-3! hover:bg-gray-200 text-blue-800 *:size-7! cursor-pointer' onClick={() => setToggle(!toggle)}>
                {toggle ? <ChevronLeft /> : <ChevronRight />}
            </Button>

        </div>
    )
}

export default LeftCardDrawer