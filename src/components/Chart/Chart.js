import React from 'react';
import CustomChart from './CustomPieChart';
import BarChart from './BarChart';
import GuageChart from './GuageChart';
import CustomPieChart from './CustomPieChart';
import FullPieChart from './FullPieChart';
import LineChart from './LineChart';
import TwoBarChart from './TwoBarChart';
const Chart = () => {
 
  return (
    <div>
      <div className='flex gap-6 mb-6
      //  md:w-full w-380_ flex-wrap 
       '>
        <BarChart />
        <CustomPieChart />
        <GuageChart />
        <FullPieChart />
      </div>
      <div className='flex gap-6 mb-6
      //  md:w-full w-380_ flex-wrap 
        '>
         <LineChart />
         <TwoBarChart />
      </div>
    </div>


  )
}

export default Chart