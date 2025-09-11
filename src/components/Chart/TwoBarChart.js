import React from 'react'
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TwoBarChart = () => {

    const chartData = [
        {
            id: 1,
            title: 'Order Volume',
            subTitle1: '5.51K',
            subTitle2: '2.1%',
            subTitle3: 'vs Last Week',
            sideContent: 'View Report',
        }
    ]


    const barChartData = [
        {
            name: '01',
            uv: 1200,
            pv: 2200,
            amt: 2400,
        },
        {
            name: '02',
            uv: 2200,
            pv: 1800,
            amt: 2210,
        },
        {
            name: '03',
            uv: 1000,
            pv: 2000,
            amt: 2290,
        },
        {
            name: '04',
            uv: 2000,
            pv: 1500,
            amt: 2000,
        },
        {
            name: '05',
            uv: 1800,
            pv: 2300,
            amt: 2181,
        },
        {
            name: '06',
            uv: 1200,
            pv: 2800,
            amt: 2500,
        },
        {
            name: '07',
            uv: 1200,
            pv: 2200,
            amt: 2100,
        },
        {
            name: '08',
            uv: 2300,
            pv: 1800,
            amt: 2100,
        },
        {
            name: '09',
            uv: 1000,
            pv: 2000,
            amt: 2100,
        },
    ];

    return (

        <div className='w-363_ bg-white rounded-lg'>
            {chartData.map((chart) =>
                <div key={chart.id} className='
                large-chart-wrapper '>
                    <div>
                        <div className='flex justify-between'>
                            <div >
                                <p className=' text-base font-extrabold  w-full'>
                                    {chart.title}
                                </p>
                            </div>
                            <p className='text-8_  text-grayMedium_ font-medium'>
                                {chart.sideContent}
                            </p>
                        </div>
                        <div className='flex self-start'>
                            <p className=' text-base font-extrabold  mr-9_ '>
                                {chart.subTitle1}
                            </p>
                            <p className=' text-base font-extrabold  mr-9_ '>
                                {chart.subTitle2}
                            </p>
                            <p className=' text-base font-extrabold text-grayMedium_   '>
                                {chart.subTitle3}
                            </p>
                        </div>
                    </div>

                    <div className='relative text-center self-center'>
                        <div className="h-197_ w-363_ p-3 flex self-center   ">

                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={barChartData}

                                >
                                    <CartesianGrid strokeDasharray="0 3" />
                                    <XAxis dataKey="name" />

                                    <Tooltip />
                                    <Legend />
                                    <Bar name=" This Week" legendType="circle" dataKey="pv" fill="#7367F0" barSize={5} />

                                    <Bar name=" Last Week" legendType="circle" dataKey="uv" fill="#FFE600" barSize={5} />

                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                    </div>



                </div>

            )
            }
        </div>
    )
}


export default TwoBarChart