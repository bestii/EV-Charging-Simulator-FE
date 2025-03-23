import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { simulationData } from '../../../../data';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const eventData = Object.entries(simulationData.chargingEventsFrequency).map(
  ([key, value], index) => ({
    name: key,
    value,
    color: COLORS[index]
  })
);

export const ChargingEventsChart = () => {
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
          {eventData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};
