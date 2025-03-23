import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { simulationData } from '../../../../data';

export const ChargingValuesChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={simulationData.chargePointData}>
        <XAxis
          dataKey="chargePoint"
          label={{
            value: 'Charge Point',
            position: 'insideBottom',
            offset: -5
          }}
        />
        <YAxis
          label={{ value: 'Power (kW)', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip />
        <Bar dataKey="power" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};
