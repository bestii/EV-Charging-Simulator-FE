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
    <div className="border-1 border-black/10 p-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chargePointData} margin={{ bottom: 30 }}>
          <XAxis
            dataKey="chargePoint"
            label={{
              value: 'Charge Points',
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
      <h3 className="text-md text-center font-bold text-gray-500">
        Charging Values per Charge Point
      </h3>
    </div>
  );
};
