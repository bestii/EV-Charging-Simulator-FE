import { simulationData } from '../../../../data';

export const TotalEnergyCharged = () => {
  return (
    <div className="rounded-lg bg-gray-100 p-4 text-center">
      <h3 className="text-xl font-bold">Total Energy Charged</h3>
      <p className="text-3xl font-semibold text-green-600">
        {simulationData.totalEnergyCharged.total} kWh
      </p>
    </div>
  );
};
