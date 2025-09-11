import React from 'react'

import { ResponsivePie } from '@nivo/pie'

 
const PieChart = ({ data }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
        innerRadius={0.7}
        activeOuterRadiusOffset={4} 
        colors={['#d0affb','#a345f7', '#8f00f5','#0000']}
 
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2} 
        enableArcLabels={false}
        arcLabelsRadiusOffset={0.7}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }} 
        legends={[]}
    />
)

export default PieChart
