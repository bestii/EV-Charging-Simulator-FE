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
    <Card additionalClass="md:col-span-8">
      {isSimulationLoading && <Loader />}
      {!simulation && !isSimulationLoading && (
        <span>
          Please run simulation using your configuration to get the simulation
        </span>
      )}
      {!isSimulationLoading && simulation && <SimuationPlots />}
    </Card>
  );
};

export default SimulationDashboard;
