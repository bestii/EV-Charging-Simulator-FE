import { SimulationData } from '../../../../types';

type TotalEnergyCharged = {
  total: SimulationData['totalEnergyCharged']['total'];
};

export const TotalEnergyCharged = ({ total }: TotalEnergyCharged) => {
  return (
    <div className="rounded-lg bg-gray-100 p-4 text-center">
      <h3 className="text-xl font-bold">Total Energy Charged</h3>
      <p
        className="text-3xl font-semibold text-green-600"
        aria-label="The total energy charged in kilowatt-hours"
      >
        {total} kWh
      </p>
    </div>
  );
};
