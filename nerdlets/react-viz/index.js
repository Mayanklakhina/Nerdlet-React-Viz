import React from 'react';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

import Linechart from './LineChart.js';
import Piechart from './PieChart.js';
import Areachart from './AreaChart.js';

export default class HomeNerdlet extends React.Component {
  render() {
    return (
      <div>
        <h1>Line Chart</h1>
        <Linechart />
        <h1>Pie chart</h1>
        <Piechart />
        <h1>Area Chart</h1>
        <Areachart />

      </div>
    );
  }
}