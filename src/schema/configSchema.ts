import { z } from 'zod';

export const configSchema = z
  .object({
    chargePoints: z
      .number()
      .min(1, { message: 'Charge points should not be 0.' }),
    arrivalMultiplier: z
      .number()
      .min(20, { message: 'Arrival multiplier should be between 20 and 200.' })
      .max(200, {
        message: 'Arrival multiplier should be between 20 and 200.'
      }),
    carConsumption: z
      .number()
      .min(1, { message: 'Car consumption should not be 0.' }),
    isPowerDifferent: z.boolean(),
    defaultPower: z
      .number()
      .optional()
      .refine((val) => val !== 0, {
        message: 'Default power should not be 0.'
      }),
    chargingPowerGroups: z
      .array(
        z.object({
          power: z
            .number()
            .min(1, { message: 'Power should be at least 1 kW.' }),
          count: z.number().min(1, { message: 'Count should be at least 1.' })
        })
      )
      .optional()
  })
  .refine(
    (data) => {
      // Only validate chargingPower when isPowerDifferent is true
      if (!data.isPowerDifferent || !data.chargingPowerGroups) return true;

      const totalCount = data.chargingPowerGroups.reduce(
        (sum, item) => sum + item.count,
        0
      );
      return totalCount === data.chargePoints;
    },
    {
      message:
        'The total count of charging stations should equal the total charge points.',
      path: ['chargingPowerGroups']
      // Attach error to chargingPower field
    }
  );
