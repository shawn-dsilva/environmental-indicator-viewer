import React from 'react'

const DataTable = ({ data }) => {
    return (
        <div className='w-full rounded-lg border border-gray-400 mt-5'>
            <div className='bg-gray-200 p-4 rounded-t-lg border-b-gray-800'>
                <h1>Landcover classes area (ha) by county</h1>
            </div>
            <div className='p-3  w-full max-h-[380px] h-[380px] overflow-auto'>
                <table className="w-full text-left table-auto   ">
                    <thead className='bg-sky-200'>
                        <tr>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                    County
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                    Shrubland
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                    Grassland
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Cropland</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => <tr key={index}>{Object.entries(item).map(([key, value]) => {
                            return (<td key={key} className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    {value}
                                </p>
                            </td>)
                        })}</tr>)}
                    </tbody>
                </table>

            </div>
        </div>)
}

export default DataTable