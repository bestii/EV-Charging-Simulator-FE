import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { SimulationData } from '../../../../types';

type AggregatedDataChartProps = {
  aggregatedChartData: SimulationData['aggregatedChartData'];
};

export const AggregatedDataChart = ({
  aggregatedChartData
}: AggregatedDataChartProps) => {
  return (
    <div className="border-1 border-black/10 p-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={aggregatedChartData}>
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
      <h3 className="text-md mt-2 text-center font-bold text-gray-500">
        Charging Events, Max Power Demand, and Energy Consumed per
        Day/Week/Month
      </h3>
    </div>
  );
};
