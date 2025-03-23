import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
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
      name: key,
      value,
      color: COLORS[index]
    })
  );

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={eventData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
        >
          {eventData.map((entry) => (
            <Cell key={`cell-${entry.name}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};
