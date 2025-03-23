import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { SimulationData } from '../../../../types';

type ChargingValuesChartProps = {
  chargePointData: SimulationData['chargePointData'];
};

export const ChargingValuesChart = ({
  chargePointData
}: ChargingValuesChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chargePointData}>
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
