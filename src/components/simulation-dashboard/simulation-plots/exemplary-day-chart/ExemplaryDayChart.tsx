import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { simulationData } from '../../../../data';

export const ExemplaryDayChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={simulationData.exemplaryDayData}>
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
