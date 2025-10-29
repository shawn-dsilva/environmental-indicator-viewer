"use client"
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import InfoCard from './InfoCard'

const MyCardDrawer = ({ children }) => {
    const [toggle, setToggle] = useState(false)


    return (
        <div className='w-full absolute bottom-0 left-0 '>
            <Button variant={"ghost"} size={"lg"} className='bg-gray-500/60 rounded-none rounded-t-lg mx-auto md:ml-3 hover:bg-gray-500/40 text-white *:size-7! cursor-pointer' onClick={() => setToggle(!toggle)}>
                {toggle ? <ChevronDown /> : <ChevronUp />}
            </Button>
            <div className={`w-full bg-gray-500/60 duration-300 ease-linear ${toggle ? "h-[500px] p-10" : "h-0"}  w-full flex flex-row gap-8`}>
                {toggle && [...Array(4)].map((item, index) => <InfoCard key={index} item={item} />)}
            </div>
        </div>
    )
}

export default MyCardDrawer