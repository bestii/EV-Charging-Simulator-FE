import { z } from 'zod';
import { configSchema } from '../schema/configSchema';

export type ConfigValues = z.infer<typeof configSchema>;
