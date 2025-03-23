import { z } from 'zod';
import { simulationData } from '../data';
import { configSchema } from '../schema/configSchema';

export type ConfigValues = z.infer<typeof configSchema>;
export type SimulationData = typeof simulationData;
