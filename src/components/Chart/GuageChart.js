import React from 'react';
import GaugeChart from 'react-gauge-chart';

const GuageChart = () => {

    const chartData = [
        {
            id: 1,
            title: 'Your Rating',
            subTitle: ' ',
            count: '1.3',
            compName: 'sample',
            footerTitle_1: 'Canceling- Seller Related',
            footerSubTitle_1: 'Very Poor',
            footerCount_1: '6%',

            footerTitle_2: 'Handling Time With SLA',
            footerSubTitle_2: 'Very Poor  ',
            footerCount_2: '88%',

        }
    ]

    const chartStyle = {
        height: 43,
        width:'100%', 

      }

    return (



        <div className='w-168_'>
            {chartData.map((chart) =>
                <div key={chart.id} className='
                small-chart-wrapper'>
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
                    {/* <div className='relative text-center self-center'> */}

                    <div className='h-92_ w-86_  mt-4 flex flex-col mx-auto     '>
                        <GaugeChart
                            arcsLength={[0.2, 0.2, 0.6,]}
                            cornerRadius={0}
                            colors={['#d0affb', '#a345f7', '#fff']}
                            percent={0.3}
                            style={chartStyle}
                            id="gauge-chart1" />
                        <div className='border border-strongPurple   rounded-b-full bg-mildYellow_ h-37_ w-auto ml-3 mr-2.5 ' >
                        <p className='text-11_ font-bold text-center'>Score</p>
                        <p className='text-11_ font-bold text-center'>1.3</p>

                        </div>


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
                                <p className='text-9_'> {chart.footerTitle_2}</p>
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

export default GuageChart