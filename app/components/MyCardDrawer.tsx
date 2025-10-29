"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const MyCardDrawer = ({ children }) => {
    const [toggle, setToggle] = useState(false)


    return (
        <div className='w-full absolute bottom-0 left-0 '>
            <Button variant={"ghost"} className='bg-gray-500/60 rounded-none rounded-t-lg ml-3 hover:bg-gray-500/80 text-white' onClick={() => setToggle(!toggle)}>
                Open Drawer
            </Button>
            <div className={`w-full bg-gray-500/60 ${toggle ? "h-[500px]" : "h-0"}`}>
                {children}
            </div>
        </div>
    )
}

export default MyCardDrawer