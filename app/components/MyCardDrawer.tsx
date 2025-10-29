"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const MyCardDrawer = ({ children }) => {
    const [toggle, setToggle] = useState(false)


    return (
        <div className='w-full absolute bottom-0 left-0 bg-blue-600'>
            <Button variant={"outline"} onClick={() => setToggle(!toggle)}>
                Open Drawer
            </Button>
            <div className={`w-full bg-yellow-400 ${toggle ? "h-[500px]" : "h-0"}`}>
                {children}
            </div>
        </div>
    )
}

export default MyCardDrawer