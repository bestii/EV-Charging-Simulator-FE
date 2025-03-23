import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { simulationData } from '../../../../data';

export const AggregatedDataChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={simulationData.aggregatedChartData}>
        <XAxis dataKey="timeUnit" />
        <YAxis
          label={{ value: 'Values', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="events" fill="#8884d8" name="Charging Events" />
        <Bar dataKey="maxPower" fill="#82ca9d" name="Max Power (kW)" />
        <Bar
          dataKey="energyConsumed"
          fill="#ff7300"
          name="Energy Consumed (kWh)"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
