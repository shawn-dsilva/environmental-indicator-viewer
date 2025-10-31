import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { fa, faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
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
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Evapotranspiration',
            data: labels.map(() => faker.number.float({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Precipitation',
            data: labels.map(() => faker.number.float({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export function LineChart() {
    return <div className='w-full rounded-lg border border-gray-400'>
        <div className='bg-gray-200 p-4 rounded-t-lg border-b-gray-800'>
            <h1>Evapotranspiration & Precipitation</h1>
        </div>
        <div className='p-3 m-auto w-full max-h-[380px]'>
            <Line options={options} data={data} />
        </div>
    </div>

}
