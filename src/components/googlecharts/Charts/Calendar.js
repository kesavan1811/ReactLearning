import React from 'react'
import Chart from 'react-google-charts'

function Googlecharts() {
  return (
    <div>
        <Chart
        width={1000}
        height={2000}
        chartType="Calendar"
        loader={<div>Loading Chart</div>}
        data={[
            [{type:'date',id:'Date'},{type:'number',id:'Won/Loss'}],
            [ new Date(2012, 3, 13), 37032 ],
            [ new Date(2012, 3, 14), 38024 ],
            [ new Date(2012, 3, 15), 38024 ],
            [ new Date(2012, 3, 16), 38108 ],
            [ new Date(2012, 3, 17), 38229 ],
            // Many rows omitted for brevity.
            [ new Date(2013, 9, 4), 38177 ],
            [ new Date(2013, 9, 5), 38705 ],
            [ new Date(2013, 9, 12), 38210 ],
            [ new Date(2013, 9, 13), 38029 ],
            [ new Date(2013, 9, 19), 38823 ],
            [ new Date(2013, 9, 23), 38345 ],
            [ new Date(2013, 9, 24), 38436 ],
            [ new Date(2022, 3, 8), 40000 ]
        ]}
        options={{
            title:"Red Sox Attendance"
        }}
        rootProps={{"data-testid":"1"}}
        />
    </div>
  )
}

export default Googlecharts