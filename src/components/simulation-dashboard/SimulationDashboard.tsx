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
  const simulationNotExecuted = !simulation && !isSimulationLoading;
  return (
    <Card additionalClass="lg:col-span-8 md:col-span-7 h-full">
      {isSimulationLoading && <Loader />}
      {simulationNotExecuted && (
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
