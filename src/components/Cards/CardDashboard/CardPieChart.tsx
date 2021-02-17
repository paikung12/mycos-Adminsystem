import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries, 
} from '@devexpress/dx-react-chart-material-ui';
import { Animation, BarSeries } from '@devexpress/dx-react-chart';
import styled from 'styled-components';



const data = [
  { country: 'Russia', area: 10 },
  { country: 'Canada', area: 7 },
  { country: 'USA', area: 7 },
  { country: 'China', area: 7 },
];
export default class PieChart extends React.PureComponent<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="fleqqxx flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-gray-200 mb-1 text-xs font-semibold">
                    Overview
              </h6>
              <h2 className="text-white text-xl font-semibold">Total value</h2>
            </div>
          </div>
        </div>
              {/* PieChart */}
              <div className=" ">
                  <Chart   
                    data={chartData} 
                    height={255}
                    >
                       <BarSeries
                            name="Leave to day"
                            valueField="LEAVETODAY"
                            argumentField="state"
                          />
                          <BarSeries
                            name="Leave Month"
                            valueField="LEAVESMONTH"
                            argumentField="state"
                          />
                          <BarSeries
                            name="Leave in 30 day "
                            valueField="LEAVEIN30DAY"
                            argumentField="state"
                          />
                          <BarSeries
                            name="Attadance"
                            valueField="Attadance"
                            argumentField="state"
                          />
                          <PieSeries
                            valueField="area"
                            argumentField="country"
                          />
                          <Animation />
                    </Chart>
              </div> 
    </div>
    );
    
  }
}
