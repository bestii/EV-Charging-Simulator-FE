import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { SimulationData } from '../../../../types';

type ChargingEventsChartProps = {
  chargingEventsFrequency: SimulationData['chargingEventsFrequency'];
};

export const ChargingEventsChart = ({
  chargingEventsFrequency
}: ChargingEventsChartProps) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const eventData = Object.entries(chargingEventsFrequency).map(
    ([key, value], index) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1),
      value,
      fill: COLORS[index % COLORS.length]
    })
  );

  return (
    <div className="border-1 border-black/10 p-4">
      <h3 className="text-md text-center font-bold text-gray-500">
        Charging Events Frequency per Year/Month/Week/Day
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart
          innerRadius="20%"
          outerRadius="90%"
          data={eventData}
          startAngle={90}
          endAngle={-270}
        >
          <RadialBar
            label={{ position: 'insideStart', fill: '#000' }}
            background
            dataKey="value"
          />
          <Tooltip />
          <Legend />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};
