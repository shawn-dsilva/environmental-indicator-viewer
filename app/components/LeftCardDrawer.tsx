"use client"
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronLeft, ChevronRight, TableProperties } from 'lucide-react'
import React, { useState } from 'react'
import BackBtn from './BackBtn'
import { LineChart } from './LineChart'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import geojsonSubdiv from "../assets/Kenya_Rename_Subdiv.json";
import useMapStore from '@/app/hooks/useMapStore'; // Adjust path as needed
import { createVectorSource } from '../utils/createVectorSource'


const SUBDIVS =
    [{
        "name": "Mombasa",
        "code": 1,
        "capital": "Mombasa City"
    }, {
        "name": "Kwale",
        "code": 2,
        "capital": "Kwale"
    }, {
        "name": "Kilifi",
        "code": 3,
        "capital": "Kilifi"
    }, {
        "name": "Tana River",
        "code": 4,
        "capital": "Hola"

    }, {
        "name": "Lamu",
        "code": 5,
        "capital": "Lamu"
    }, {
        "name": "Taita-Taveta",
        "code": 6,
        "capital": "Voi"
    }, {
        "name": "Garissa",
        "code": 7,
        "capital": "Garissa"
    }, {
        "name": "Wajir",
        "code": 8,
        "capital": "Wajir"
    }, {
        "name": "Mandera",
        "code": 9,
        "capital": "Mandera"
    }, {
        "name": "Marsabit",
        "code": 10,
        "capital": "Marsabit"
    }, {
        "name": "Isiolo",
        "code": 11,
        "capital": "Isiolo"
    }, {
        "name": "Meru",
        "code": 12,
        "capital": "Meru"
    }, {
        "name": "Tharaka-Nithi",
        "code": 13,
        "capital": "Chuka"
    }, {
        "name": "Embu",
        "code": 14,
        "capital": "Embu"
    }, {
        "name": "Kitui",
        "code": 15,
        "capital": "Kitui"
    }, {
        "name": "Machakos",
        "code": 16,
        "capital": "Machakos"
    }, {
        "name": "Makueni",
        "code": 17,
        "capital": "Wote"
    }, {
        "name": "Nyandarua",
        "code": 18,
        "capital": "Ol Kalou"
    }, {
        "name": "Nyeri",
        "code": 19,
        "capital": "Nyeri"
    }, {
        "name": "Kirinyaga",
        "code": 20,
        "capital": "Kerugoya/Kutus"
    }, {
        "name": "Murang'a",
        "code": 21,
        "capital": "Murang'a"
    }, {
        "name": "Kiambu",
        "code": 22,
        "capital": "Kiambu"
    }, {
        "name": "Turkana",
        "code": 23,
        "capital": "Lodwar"
    }, {
        "name": "West Pokot",
        "code": 24,
        "capital": "Kapenguria"
    }, {
        "name": "Samburu",
        "code": 25,
        "capital": "Maralal"
    }, {
        "name": "Trans-Nzoia",
        "code": 26,
        "capital": "Kitale"
    }, {
        "name": "Uasin Gishu",
        "code": 27,
        "capital": "Eldoret"
    }, {
        "name": "Elgeyo-Marakwet",
        "code": 28,
        "capital": "Iten"
    }, {
        "name": "Nandi",
        "code": 29,
        "capital": "Kapsabet"
    }, {
        "name": "Baringo",
        "code": 30,
        "capital": "Kabarnet"
    }, {
        "name": "Laikipia",
        "code": 31,
        "capital": "Rumuruti"
    }, {
        "name": "Nakuru",
        "code": 32,
        "capital": "Nakuru"
    }, {
        "name": "Narok",
        "code": 33,
        "capital": "Narok"
    }, {
        "name": "Kajiado",
        "code": 34
    }, {
        "name": "Kericho",
        "code": 35,
        "capital": "Kericho"
    }, {
        "name": "Bomet",
        "code": 36,
        "capital": "Bomet"
    }, {
        "name": "Kakamega",
        "code": 37,
        "capital": "Kakamega"
    }, {
        "name": "Vihiga",
        "code": 38,
        "capital": "Vihiga"
    }, {
        "name": "Bungoma",
        "code": 39,
        "capital": "Bungoma"
    }, {
        "name": "Busia",
        "code": 40,
        "capital": "Busia"
    }, {
        "name": "Siaya",
        "code": 41,
        "capital": "Siaya"
    }, {
        "name": "Kisumu",
        "code": 42,
        "capital": "Kisumu"
    }, {
        "name": "Homa Bay",
        "code": 43,
        "capital": "Homa Bay"
    }, {
        "name": "Migori",
        "code": 44,
        "capital": "Migori"
    }, {
        "name": "Kisii",
        "code": 45,
        "capital": "Kisii"
    }, {
        "name": "Nyamira",
        "code": 46,
        "capital": "Nyamira"
    }, {
        "name": "Nairobi",
        "code": 47,
        "capital": "Nairobi City"
    }]

const selectSubdiv = (subdiv) => {
    const selectedSubdiv = geojsonSubdiv.features.filter(feature => feature.properties.shapeName === subdiv.name)
    console.log(selectedSubdiv)
}


const LeftCardDrawer = ({ children }) => {
    const [toggle, setToggle] = useState(false)
    const [selectedStats, setSelectedStats] = useState("total")

    const setGeojson = useMapStore((state) => state.setSelectedGeojson)

    const selectSubdiv = (subdiv) => {
        const selectedSubdiv = geojsonSubdiv.features.filter(feature => feature.properties.shapeName === subdiv.name)
        const newGeojson = { ...geojsonSubdiv, features: selectedSubdiv }
        const vectorSource = createVectorSource(newGeojson)
        setGeojson(vectorSource)
    }
    return (
        <div className='h-full absolute left-0 top-0 flex '>
            <div className={` bg-white h-full duration-300 ease-out ${toggle ? "w-3/4 p-10 border-2-gray-300" : "w-0"} `}>

                {/* <Button className={selectedStats === "total" ? "bg-blue-900 text-white" : ""} variant={"outline"} onClick={() => setSelectedStats("total")}>Total Area Stats</Button>
                <Button className={selectedStats === "cropland" ? "bg-blue-900 text-white" : ""} variant={"outline"} onClick={() => setSelectedStats("cropland")}>Cropland Area Stats</Button> */}
                <div className={!toggle ? "hidden" : ""}>
                    <div className='flex gap-3 pb-5'>
                        <BackBtn />
                        <h1 className='text-3xl font-medium w-full m-0 '>Evapotranspiration</h1>
                    </div>

                    <p className='text-lg font-normal text-gray-400 '>Explore patterns and trends in water availability and usage across various indicators.</p>
                    <p className='text-lg font-normal text-gray-400  pb-4'>Select a Category below to view detailed charts and insights.</p>

                    <div className='py-3'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">Select Sub-Division</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='max-h-56'>
                                {SUBDIVS.map((subdiv, index) => <DropdownMenuItem key={index} onClick={() => selectSubdiv(subdiv)}>
                                    {subdiv.name}
                                </DropdownMenuItem>)}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
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