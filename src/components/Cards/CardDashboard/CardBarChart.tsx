import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';



const data = [
  { year: '2016', population: 2.525 },
  { year: '1960', population: 3.018 },
  { year: '1970', population: 3.682 },
  { year: '1980', population: 3.80 },
];

export default class BarChart extends React.PureComponent<{}, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full  mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-gray-500 mb-1 text-xs font-semibold">
                Performance
              </h6>
              <h2 className="text-gray-800 text-xl font-semibold">
                Total orders
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* BarChart */}
          <div className="relative h-40vh">
              <Chart
                data={chartData}
                height={220}
              >
                <ArgumentAxis />
                <ValueAxis   />
                <BarSeries
                  valueField="population"
                  argumentField="year"
                />
                <Animation />
              </Chart>
          </div>
        </div>
      </div>
    );
  }
}