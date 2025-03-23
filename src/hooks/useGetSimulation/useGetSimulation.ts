import { useMutation } from '@tanstack/react-query';
import { getSimulationData } from '../../services/simulation.service';

export const useGetSimulation = () => {
  return useMutation({
    mutationFn: getSimulationData
  });
};
