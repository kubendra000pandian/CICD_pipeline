import React from 'react';
import { ResponsiveLine } from '@nivo/line'


const LineChart = () => {
    const chartData = [
        {
            id: 1,
            title: 'Total Pending Orders',
            subTitle: 'Today',
            count: '10',
            compName: 'sample',
            footerTitle_1: 'Sample',
            footerSubTitle_1: 'test',
            footerCount_1: '777',

            footerTitle_2: 'Current Daily Order',
            footerSubTitle_2: 'Volume limitation',
            footerCount_2: '10000',

        }
    ]

    const lineChartData = [
        {
            "id": "Last Week",
            "color": "hsl(336, 70%, 50%)",
            "data": [
                {
                    "x": "01",
                    "y": 22
                },
                {
                    "x": "02",
                    "y": 40
                },
                {
                    "x": "03",
                    "y": 15
                },
                {
                    "x": "04",
                    "y": 38
                },
                {
                    "x": "05",
                    "y": 25
                },
                {
                    "x": "06",
                    "y": 28
                },
            ]
        },
        {
            "id": "This Week",
            "color": "hsl(347, 70%, 50%)",
            "data": [
                {
                    "x": "01",
                    "y": 18
                },
                {
                    "x": "02",
                    "y": 12
                },
                {
                    "x": "03",
                    "y": 38
                },
                {
                    "x": "04",
                    "y": 21
                },
                {
                    "x": "05",
                    "y": 17
                },
                {
                    "x": "06",
                    "y": 39
                },
            ]
        },

    ]

    return (
        <div className='w-363_'>
            {chartData.map((chart) =>
                <div key={chart.id} className='
                large-chart-wrapper
                '>
                    <div className='flex justify-between'>
                        <div>
                            <p className='text-11_ font-extrabold  w-full'>
                                {chart.title}
                            </p>
                            <p className='text-11_ font-extrabold  w-full'>
                                {chart.subTitle}
                            </p>
                        </div>
                        <p className='text-15_ font-bold'>
                            {chart.count}
                        </p>
                    </div>
                    <div className='relative text-center self-center'>
                        <div className="h-218_ w-363_ p-3 flex self-center   ">
                            <ResponsiveLine
                                data={lineChartData}
                                margin={{ top: 20, right: 10, bottom: 50, left: 30 }}
                                xScale={{ type: 'point' }}
                                yScale={{
                                    type: 'linear',
                                    min: 'auto',
                                    max: 'auto',
                                    // stacked: true,
                                    reverse: false
                                }}
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    orient: 'bottom',
                                    tickSize: 0,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: '',
                                    legendOffset: 36,
                                    legendPosition: 'middle'
                                }}
                                axisLeft={{
                                    orient: 'left',
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: '',
                                    legendOffset: -40,
                                    legendPosition: 'middle'
                                }}
                                enableGridX={false}
                                lineWidth={3}
                                enablePoints={false}
                                pointSize={10}
        colors={['#FFE600','#7367F0'] }

                                // pointColor={{ theme: 'background' }}
                                pointBorderWidth={2}
                                // pointBorderColor={{ from: 'serieColor' }}
                                pointLabelYOffset={-12}
                                areaOpacity={0}
                                useMesh={true}
                                legends={[
                                    {
                                        anchor: 'bottom',
                                        direction: 'row',
                                        justify: false,
                                        translateX: 7,
                                        translateY: 41,
                                        itemsSpacing: 0,
                                        itemDirection: 'left-to-right',
                                        itemWidth: 80,
                                        itemHeight: 20,
                                        itemOpacity: 0.75,
                                        symbolSize: 12,
                                        symbolShape: 'circle',
                                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                                    itemOpacity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]}
                            />
                        </div>
                         
                    </div>
                     


                </div>

            )
            }
        </div>

    )
}

export default LineChart