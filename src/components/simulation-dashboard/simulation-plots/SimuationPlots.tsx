import { SimulationData } from '../../../types';
import { AggregatedDataChart } from './aggregated-data-chart/AggregatedDataChart';
import { ChargingEventsChart } from './charging-events-chart/ChargingEventsChart';
import { ChargingValuesChart } from './charging-values-chart/ChargingValuesChart';
import { ExemplaryDayChart } from './exemplary-day-chart/ExemplaryDayChart';
import { TotalEnergyCharged } from './total-energy-charged/TotalEnergyCharged';

type SimuationPlotsProps = {
  data: SimulationData;
};
export const SimuationPlots = ({ data }: SimuationPlotsProps) => {
  const {
    chargePointData,
    exemplaryDayData,
    totalEnergyCharged,
    chargingEventsFrequency,
    aggregatedChartData
  } = data;
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
      <TotalEnergyCharged total={totalEnergyCharged.total} />
      <ChargingValuesChart chargePointData={chargePointData} />
      <ExemplaryDayChart exemplaryDayData={exemplaryDayData} />
      <ChargingEventsChart chargingEventsFrequency={chargingEventsFrequency} />
      <AggregatedDataChart aggregatedChartData={aggregatedChartData} />
    </div>
  );
};
