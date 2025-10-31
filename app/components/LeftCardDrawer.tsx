"use client"
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import BackBtn from './BackBtn'
import { LineChart } from './LineChart'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import useMapStore from '@/app/hooks/useMapStore'; // Adjust path as needed
import subdivlist from "@/app/assets/Kenya_Subdiv_List.json";
import useSWR from 'swr'
import DataTable from './DataTable'

const fetcher = url => fetch(url).then(r => r.json())

const LeftCardDrawer = ({ children }) => {
    const [toggle, setToggle] = useState(true)
    const [currSelection, setCurrSelection] = useState("Kenya")
    const { data, isLoading, error } = useSWR('/api/data/2019/2025', fetcher)
    const { data: landcover, isLoading: isLandcoverLoading } = useSWR('/api/landcover', fetcher)


    const setGeojson = useMapStore((state) => state.setSelectedGeojson)

    const selectSubdiv = async (subdiv) => {
        const res = await fetch(`http://localhost:3000/api/geojson/${subdiv.name}`)
        if (res.ok) {
            const geojson = await res.json()
            console.log(geojson)
            setGeojson(geojson)
            setCurrSelection(`${subdiv.name} ( County )`)
        }
    }
    return (
        <div className='h-full absolute left-0 top-0 flex  '>
            <div className={` bg-white h-full duration-300 ease-out ${toggle ? "w-3/4 p-10 border-2-gray-300 overflow-auto" : "w-0"} `}>
                <div className={!toggle ? "hidden" : ""}>
                    <div className='flex gap-3 pb-5'>
                        <BackBtn />
                        <h1 className='text-3xl font-medium w-full m-0 '>Evapotranspiration</h1>
                    </div>

                    <p className='text-lg font-normal text-gray-400 '>Explore patterns and trends in water availability and usage across various indicators.</p>
                    <p className='text-lg font-normal text-gray-400  pb-4'>Select a Category below to view detailed charts and insights.</p>

                    <p>Showing Results For: <span className='text-sky-800 font-medium'>{currSelection}</span></p>
                    <div className='py-3'>

                        <Select>
                            <SelectTrigger className="w-[280px]">
                                <SelectValue placeholder="Select a Country" />
                            </SelectTrigger>
                            <SelectContent>
                                {subdivlist["Kenya"].map((subdiv, index) => <SelectItem value={subdiv.name} key={index} onPointerDown={() => selectSubdiv(subdiv)} >
                                    {subdiv.name}
                                </SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>

                    {
                        isLoading ?
                            "Chart is Loading" :
                            <LineChart data={data} />
                    }

                    {isLandcoverLoading ? "Loading Table" :
                        <DataTable data={landcover} />
                    }
                </div>
            </div>
            <Button variant={"ghost"} size={"lg"} className='bg-white rounded-none rounded-r-lg my-auto! py-7! px-3! hover:bg-gray-200 text-blue-800 *:size-7! cursor-pointer' onClick={() => setToggle(!toggle)}>
                {toggle ? <ChevronLeft /> : <ChevronRight />}
            </Button>

        </div>
    )
}

export default LeftCardDrawer