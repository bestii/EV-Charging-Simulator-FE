import { SimulationData } from '../../types';
import { Card } from '../card/Card';
import { Loader } from '../loader/Loader';
import { SimuationPlots } from './simulation-plots/SimuationPlots';

type SimulationDashboardProps = {
  isSimulationLoading: boolean;
  simulation: SimulationData | null;
};

const SimulationDashboard = ({
  isSimulationLoading,
  simulation
}: SimulationDashboardProps) => {
  return (
    <Card additionalClass="lg:col-span-8 md:col-span-7 h-full">
      {isSimulationLoading && <Loader />}
      {!simulation && !isSimulationLoading && (
        <div className="flex h-full items-center justify-center">
          <span>
            Run the simulation with your configuration to generate results.
          </span>
        </div>
      )}
      {!isSimulationLoading && simulation && (
        <SimuationPlots data={simulation} />
      )}
    </Card>
  );
};

export default SimulationDashboard;
