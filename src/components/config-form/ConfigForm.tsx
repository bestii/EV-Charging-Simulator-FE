import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { configSchema } from '../../schema/configSchema';
import Card from '../card/Card';
import { ErrorMsg } from '../error-msg/ErrorMsg';
import PowerGroupList from './power-groups/PowerGroupList';

type ConfigValues = z.infer<typeof configSchema>;

const ConfigForm = () => {
  const methods = useForm<ConfigValues>({
    resolver: zodResolver(configSchema),
    defaultValues: {
      chargePoints: 1,
      arrivalMultiplier: 100,
      carConsumption: 18,
      isPowerDifferent: false,
      defaultPower: 11
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = methods;

  const isPowerDifferent = watch('isPowerDifferent');

  const onSubmit = (data: ConfigValues) => {
    console.log(data);
  };

  return (
    <Card additionalClass="md:col-span-4">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
          <div>
            <label htmlFor="chargePoints" className="label-text">
              Charge Points
            </label>
            <input
              id="chargePoints"
              type="number"
              {...register('chargePoints', { valueAsNumber: true })}
              className="input-field w-full"
            />
            <ErrorMsg name="chargePoints" />
          </div>
          <div>
            <label htmlFor="arrivalMultiplier" className="label-text">
              Arrival Multiplier: <span>{watch('arrivalMultiplier')}%</span>
            </label>
            <input
              id="arrivalMultiplier"
              type="range"
              min="0"
              max="200"
              step="1"
              {...register('arrivalMultiplier', { valueAsNumber: true })}
              className="w-full cursor-pointer"
            />
            <ErrorMsg name="arrivalMultiplier" />
          </div>
          <div>
            <label htmlFor="carConsumption" className="label-text">
              Car Consumption (kWh)
            </label>
            <input
              id="carConsumption"
              type="number"
              {...register('carConsumption', { valueAsNumber: true })}
              className="input-field w-full"
            />
            <ErrorMsg name="carConsumption" />
          </div>
          <div className="mb-6 flex">
            <label
              htmlFor="isPowerDifferent"
              className="label-text inline-flex cursor-pointer items-center"
            >
              Do you have charging points with different power?
            </label>
            <input
              id="isPowerDifferent"
              type="checkbox"
              {...register('isPowerDifferent')}
              className="ml-2 cursor-pointer"
            />
          </div>
          {!isPowerDifferent && (
            <div>
              <label htmlFor="defaultPower" className="label-text">
                Default Power (kW)
              </label>
              <input
                id="defaultPower"
                type="number"
                {...register('defaultPower', { valueAsNumber: true })}
                className="input-field w-full"
              />
              <ErrorMsg name="defaultPower" />
            </div>
          )}
          {isPowerDifferent && (
            <div>
              <PowerGroupList />
              {errors.chargingPowerGroups && (
                <p className="text-sm text-red-500">
                  {errors.chargingPowerGroups.message}
                </p>
              )}
            </div>
          )}
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-blue-600 p-3 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </FormProvider>
    </Card>
  );
};

export default ConfigForm;
