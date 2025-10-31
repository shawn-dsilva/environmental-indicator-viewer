"use client"
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import InfoCard from './InfoCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
const INFO = [
    {
        title: "Water Availability & Usage",
        desc: "Includes data on evapotranspiration, precipitation, water footprint, virtual water, and water productivity.",
        value: "154.17",
    }, {
        title: "Ecosystem & Land Insights",
        desc: "Provides information on biomass production, land cover classification, and hydronomic zones.",
        value: "154.17",
    }, {
        title: "Climate & Environmental Conditions",
        desc: "Offers data related to drought conditions and climate change.",
        value: " 154.17",
    }, {
        title: "Additional Data & Resources",
        desc: "Contains data on cropping intensity, elevation, population, and surface water.",
        value: " 154.17",
    },
]




const MyCardDrawer = ({ children }) => {
    const [toggle, setToggle] = useState(false)
    const [selectedStats, setSelectedStats] = useState("total")

    return (
        <div className='w-full absolute bottom-0 left-0 '>
            <Button variant={"ghost"} size={"lg"} className='bg-gray-500/60 rounded-none rounded-t-lg mx-auto md:ml-3 hover:bg-gray-500/40 text-white *:size-7! cursor-pointer' onClick={() => setToggle(!toggle)}>
                {toggle ? <ChevronDown /> : <ChevronUp />}
            </Button>
            <div className={`w-full bg-gray-500/60 duration-300 ease-linear ${toggle ? "max-h-4/6 p-10" : "h-0"} `}>

                {/* <Button className={selectedStats === "total" ? "bg-blue-900 text-white" : ""} variant={"outline"} onClick={() => setSelectedStats("total")}>Total Area Stats</Button>
                <Button className={selectedStats === "cropland" ? "bg-blue-900 text-white" : ""} variant={"outline"} onClick={() => setSelectedStats("cropland")}>Cropland Area Stats</Button> */}
                <div className={!toggle ? "hidden" : ""}>
                    <h1 className='text-2xl font-medium text-white py-2'>View Overall Stats</h1>
                    <p className='text-lg font-light text-white pb-4'>Switch between Total and Cropland stats using the buttons below Click on the cards to view them.</p>

                    <Tabs defaultValue="total" >
                        <TabsList>
                            <TabsTrigger value="total">Total Area Stats</TabsTrigger>
                            <TabsTrigger value="cropland">Cropland Area Stats</TabsTrigger>
                        </TabsList>
                        <TabsContent value="total"></TabsContent>
                        <TabsContent value="cropland"></TabsContent>
                    </Tabs>

                    <Separator className='my-4' />
                </div>

                <div className=' w-full flex flex-row gap-2 md:gap-8 overflow-auto'>
                    {toggle && INFO.map((item, index) => <InfoCard key={index} data={item} />)}
                </div>
            </div>
        </div>
    )
}

export default MyCardDrawer