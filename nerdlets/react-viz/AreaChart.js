import React from "react";
import { AreaChart } from 'nr1'

export default class Areachart extends React.Component{
    render(){
        const areachart = [
            {
                metadata: {
                  id: 'series-1',
                  name: 'Series 1',
                  color: '#a35ebf',
                  viz: 'main',
                  units_data: {
                    y: 'BYTES',
                  },
                },
                data: [{ y: 128 }],
              }
        ]
        return <AreaChart
        accountId={4043702}
        query="SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'NDA0MzcwMnxJTkZSQXxOQXw2NjI0NjM0MjI4Nzc1Mjc1NTQx' TIMESERIES auto" 
        fullWidth
      />;
    }
}