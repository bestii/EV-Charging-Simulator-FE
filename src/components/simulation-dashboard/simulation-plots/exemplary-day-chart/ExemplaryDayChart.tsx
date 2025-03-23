import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { SimulationData } from '../../../../types';

type ExemplaryDayChartProps = {
  exemplaryDayData: SimulationData['exemplaryDayData'];
};

export const ExemplaryDayChart = ({
  exemplaryDayData
}: ExemplaryDayChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={exemplaryDayData}>
        <XAxis dataKey="hour" />
        <YAxis
          label={{
            value: 'Power Demand (kW)',
            angle: -90,
            position: 'insideLeft'
          }}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="powerDemand"
          stroke="#82ca9d"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
