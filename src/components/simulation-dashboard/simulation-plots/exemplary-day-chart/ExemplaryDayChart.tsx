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
    <div className="border-1 border-black/10 p-4">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={exemplaryDayData}>
          <XAxis dataKey="hour" />
          <YAxis
            label={{
              value: 'Power Demand (kW)',
              angle: -90,
              position: 'insideLeft',
              dy: 10
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
      <h3 className="text-md text-center font-bold text-gray-500">
        Power Demand (kW)
      </h3>
    </div>
  );
};
