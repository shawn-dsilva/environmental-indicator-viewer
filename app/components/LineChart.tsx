import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';

ChartJS.register(
    CategoryScale,
    TimeScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            type: 'time',
            time: {
                tooltipFormat: "MMMM YYYY",
                displayFormats: {
                    month: 'MM YYYY'
                }
            }
        },

    },
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
    },
};

export function LineChart({ data }) {

    const fakeData = {
        datasets: [
            {
                label: 'Evapotranspiration',
                data: data.data,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            // {
            //     label: 'Precipitation',
            //     data: [{
            //         x: '2021-10-06 23:39:30',
            //         y: 500
            //     }, {
            //         x: '2021-11-07 01:00:28',
            //         y: 600
            //     }, {
            //         x: '2021-12 -07 09:00:28',
            //         y: 200
            //     }],
            //     borderColor: 'rgb(53, 162, 235)',
            //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
            // },
        ],
    };

    return <div className='w-full rounded-lg border border-gray-400'>
        <div className='bg-gray-200 p-4 rounded-t-lg border-b-gray-800'>
            <h1>Evapotranspiration & Precipitation</h1>
        </div>
        <div className='p-3 m-auto w-full max-h-[380px] h-[380px]'>
            <Line options={options} data={fakeData} />
        </div>
    </div>

}
