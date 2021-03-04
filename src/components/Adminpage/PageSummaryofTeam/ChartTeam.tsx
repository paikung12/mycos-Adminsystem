import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { country: 'Russia', area: 12 },
  { country: 'Canada', area: 7 },
]
export default class ChartTeam extends React.PureComponent<{}, { data: any }>{
  constructor(props : any) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    return (
        <Chart
          data={chartData}
          height={300}
        >
          <PieSeries
            valueField="area"
            argumentField="country"
          />
          <Animation />
        </Chart>
    );
  }
}
