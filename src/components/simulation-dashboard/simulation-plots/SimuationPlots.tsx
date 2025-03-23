import { AggregatedDataChart } from './aggregated-data-chart/AggregatedDataChart';
import { ChargingEventsChart } from './charging-events-chart/ChargingEventsChart';
import { ChargingValuesChart } from './charging-values-chart/ChargingValuesChart';
import { ExemplaryDayChart } from './exemplary-day-chart/ExemplaryDayChart';
import { TotalEnergyCharged } from './total-energy-charged/TotalEnergyCharged';

export const SimuationPlots = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
      <ChargingValuesChart />
      <ExemplaryDayChart />
      <TotalEnergyCharged />
      <ChargingEventsChart />
      <AggregatedDataChart />
    </div>
  );
};
