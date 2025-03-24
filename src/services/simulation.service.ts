import { simulationData } from '../data';
import { ConfigValues, SimulationData } from '../types';

export const getSimulationData = async (
  requestParams: ConfigValues
): Promise<SimulationData> => {
  console.table(requestParams);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(simulationData);
    }, 1500);
  });
};
