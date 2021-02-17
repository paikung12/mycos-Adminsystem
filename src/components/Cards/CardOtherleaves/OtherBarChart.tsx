import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';

import { Stack, Animation } from '@devexpress/dx-react-chart';

export const population = [{
  state: 'December', LEAVETODAY: 5, LEAVESMONTH: 6, LEAVEIN30DAY: 8, Attadance: 28,
}, {
  state: 'January', LEAVETODAY: 5, LEAVESMONTH: 5, LEAVEIN30DAY: 3, Attadance: 30, 
}, {
  state: 'February', LEAVETODAY: 5, LEAVESMONTH: 5, LEAVEIN30DAY: 3, Attadance: 30, 
}, {
  state: 'March', LEAVETODAY: 5, LEAVESMONTH: 5, LEAVEIN30DAY: 3, Attadance: 30, 
}, 
]
const Root = (props: any) => (
  <Legend.Root
    {...props}
    style={{
      display: 'grid',
      gridTemplateColumns: 'auto auto auto',
      margin: 'auto',
    }}
  />
);


export default class OtherBarChart extends React.PureComponent<{},any> {
  constructor(props: any) {
    super(props);

    this.state = {
      population,
    };
  }

  render() {
    const { population: chartData } = this.state;
    return (
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full  mb-6 shadow-lg rounded ">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-gray-500 mb-1 text-xs font-semibold">
                Performance
              </h6>
              <h2 className="text-gray-800 text-xl font-semibold">
                Total Leave  4 month
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* BarChart */}
          <div className="relative h-40vh">
              <Chart
              data={chartData}
              height={400}
            >
              <ArgumentAxis />
              <ValueAxis />
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
              <Animation />
              <Legend position="bottom" rootComponent={Root} />
              <Stack/>
            </Chart>
          </div>
        </div>
      </div>      
    );
  }
}
