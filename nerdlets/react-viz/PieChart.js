import React from "react";
import { PieChart } from 'nr1'

export default class Piechart extends React.Component{
    render(){
        const piechart = [
            {
                metadata: {
                  id: 'series-1',
                  name: 'Serie 1',
                  color: 'red',
                  viz: 'main',
                  units_data: {
                    y: 'BYTES',
                  },
                },
                data: [{ y: 128 }],
              },
              {
                metadata: {
                  id: 'series-2',
                  name: 'Series 2',
                  color: '#85c956',
                  viz: 'main',
                  units_data: {
                    y: 'BYTES',
                  },
                },
                data: [{ y: 256 }],
              }
        ]
        return <PieChart
        accountId={4043702}
        query="SELECT latest(host.process.cpuPercent) as 'CPU %', latest(host.process.threadCount) as 'Threads' FROM Metric FACET processId, processDisplayName WHERE `entityGuid` = 'NDA0MzcwMnxJTkZSQXxOQXw2NjI0NjM0MjI4Nzc1Mjc1NTQx' ORDER BY cpuPercent asc LIMIT 100"
        fullWidth
      />;
    }
}