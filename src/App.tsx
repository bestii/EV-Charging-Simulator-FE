import { useState } from 'react';
import { ConfigForm, Footer, Header, SimulationDashboard } from './components';
import { useGetSimulation } from './hooks/useGetSimulation/useGetSimulation';
import { ConfigValues, SimulationData } from './types';

const App = () => {
  const { mutate, isPending } = useGetSimulation();
  const [simulations, setSimulations] = useState<SimulationData | null>(null);

  const handleSimulation = async (data: ConfigValues) => {
    mutate(data, {
      onSuccess: (simulatedData) => {
        setSimulations(simulatedData);
      }
    });
  };
  const handleReset = () => {
    setSimulations(null);
  };

  return (
    <>
      <Header />
      <main className="main container mx-auto mb-4 p-4">
        <div className="my-6 text-center">
          <h1 className="my-6 text-5xl tracking-tighter">
            Plan Your EV Charging Setup Smartly
          </h1>
          <p className="mx-auto max-w-3xl">
            Simulate energy consumption, peak power demand, and charging events
            to optimize your charge point installation. Adjust parameters and
            visualize the impact effortlessly. 🚗⚡📊
          </p>
        </div>
        <div className="grid auto-rows-auto grid-cols-1 items-start gap-4 md:grid-cols-12">
          <ConfigForm
            onSimulate={handleSimulation}
            onReset={handleReset}
            isSimulationLoading={isPending}
          />
          <SimulationDashboard
            simulation={simulations}
            isSimulationLoading={isPending}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
