
import { ResponsiveBar } from '@nivo/bar'

import React from 'react'

const BarChart = () => {

    const chartData = [
        {
            id: 1,
            title: 'Total Pending Orders',
            subTitle: 'Today',
            count: '10',
            compName: 'sample',
            footerTitle_1: ' ',
            footerSubTitle_1: ' ',
            footerCount_1: ' ',

            footerTitle_2: 'Current Daily Order',
            footerSubTitle_2: 'Volume limitation',
            footerCount_2: '10000',

        }
    ]

    const barChartData = [

       
        {
            "country": "T",
            "donut": 2,
        },
        {
            "country": "W",
            "hot dog": 2,
        },
        {
            "country": "T ",
            "kebab": 2,
        },
       
        {
            "country": "F",
            "sandwich": 11,
        },
      
    ]
    return (


        <div className='w-168_'>
            {chartData.map((chart) =>
                <div key={chart.id} className='
                small-chart-wrapper
                '>
                    <div className='flex justify-between'>
                        <div>
                            <p className='text-11_ font-extrabold  w-full'>
                                {chart.title}
                            </p>
                            <p className='text-11_ font-light  w-full'>
                                {chart.subTitle}
                            </p>
                        </div>
                        <p className='text-15_ font-bold'>
                            {chart.count}
                        </p>
                    </div>
                    {/* <div className='relative text-center self-center'> */}

                        <div className='h-92_  '>
                            <ResponsiveBar
                                data={barChartData}
                                keys={[
                                    'donut',
                                   'hot dog',
                                    'kebab', 
                                    'sandwich' 
                                ]}
                                indexBy="country"
                                margin={{ top: 0, right: 0, bottom: 30, left: 0 }}
                                padding={0.63}
                                // valueScale={{ type: 'linear' }}
                                indexScale={{ type: 'band', round: true }}
                                // colors={{ scheme: 'nivo' }}
                                colors={['#d0affb', '#a345f7', '#8f00f5', '#8f3fff']}
                                axisLeft={null}

                                // defs={[
                                //     {
                                //         id: 'dots',
                                //         type: 'patternDots',
                                //         background: 'inherit',
                                //         color: '#38bcb2',
                                //         size: 4,
                                //         padding: 1,
                                //         stagger: true
                                //     },
                                //     {
                                //         id: 'lines',
                                //         type: 'patternLines',
                                //         background: 'inherit',
                                //         color: '#eed312',
                                //         rotation: -45,
                                //         lineWidth: 6,
                                //         spacing: 10
                                //     }
                                // ]}
                                // fill={[
                                //     {
                                //         match: {
                                //             id: 'fries'
                                //         },
                                //         id: 'dots'
                                //     },
                                //     {
                                //         match: {
                                //             id: 'sandwich'
                                //         },
                                //         id: 'lines'
                                //     }
                                // ]}
                                borderRadius={6}
                                borderWidth={0}
                                // borderColor={{
                                //     from: 'color',
                                //     modifiers: [
                                //         [
                                //             'darker',
                                //             '2.5'
                                //         ]
                                //     ]
                                // }}

                                enableGridY={false}
                                enableLabel={false}

                                legends={[]}
                                isInteractive={false}
                                role="application"
                                ariaLabel="Nivo bar chart demo"
                            // barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
                            />


                        </div>
 
                    <div>
                        <div className='flex justify-between   border-grayMedium_ border-b-2'>
                            <div className=''>
                                <p className='text-9_'> {chart.footerTitle_1}</p>
                                <p className='text-9_'> {chart.footerSubTitle_1}</p>
                            </div>
                            <p className='text-10_'>{chart.footerCount_1}</p>
                        </div>

                        <div className='flex justify-between'>
                            <div className=''>
                                <p className='text-9_ font-extrabold'> {chart.footerTitle_2}</p>
                                <p className='text-9_'> {chart.footerSubTitle_2}</p>
                            </div>
                            <p className='text-10_'>{chart.footerCount_2}</p>
                        </div>
                    </div>


                </div>

            )
            }
        </div>

    )
}

export default BarChart

