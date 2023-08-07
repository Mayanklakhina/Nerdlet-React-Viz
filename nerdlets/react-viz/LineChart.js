import React from "react";
import { LineChart } from 'nr1'

export default class Linechart extends React.Component{
    render(){
        const linechart = {
            metadata :{
                id: 'line-chart',
                name: 'Version A',
                viz: 'main',
                color: 'green'
            },
            data :[
                {x: 0 , y:0},
                {x: 10, y:20},
                {x: 30, y:40}
            ]
        }
        //  return <LineChart data={[linechart1]} fullWidth />;
        return <LineChart
        accountId={4043702}
        query="SELECT average(host.memoryUsedPercent) AS 'Memory used %' FROM Metric WHERE `entityGuid` = 'NDA0MzcwMnxJTkZSQXxOQXw2NjI0NjM0MjI4Nzc1Mjc1NTQx' TIMESERIES auto" 
        fullWidth
      />;
    }
}