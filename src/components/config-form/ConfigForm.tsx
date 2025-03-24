import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { configSchema } from '../../schema/configSchema';
import { ConfigValues } from '../../types';
import { Card } from '../card/Card';
import { ErrorMsg } from '../error-msg/ErrorMsg';
import { PowerGroupList } from './power-groups/PowerGroupList';

const defaultValues: ConfigValues = {
  chargePoints: 20,
  arrivalMultiplier: 100,
  carConsumption: 18,
  isPowerDifferent: false,
  defaultPower: 11,
  chargingPowerGroups: [
    { power: 11, count: 1 },
    { power: 11, count: 1 }
  ]
};

type ConfigFormProps = {
  onSimulate: (data: ConfigValues) => void;
  onReset: () => void;
};

const ConfigForm = ({ onSimulate, onReset }: ConfigFormProps) => {
  const methods = useForm<ConfigValues>({
    resolver: zodResolver(configSchema),
    defaultValues,
    mode: 'onChange'
  });

  const { register, handleSubmit, watch, setValue, reset, trigger } = methods;

  const chargePoints = watch('chargePoints');
  const isPowerDifferent = watch('isPowerDifferent');

  useEffect(() => {
    if (chargePoints <= 2) {
      setValue('isPowerDifferent', false);
    }
    if (chargePoints) {
      trigger('chargingPowerGroups');
    }
  }, [chargePoints, setValue, trigger]);

  const onSubmit = (data: ConfigValues) => {
    onSimulate(data);
  };

  return (
    <Card additionalClass="lg:col-span-4 md:col-span-5">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
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
              className="w-full cursor-pointer focus-visible:shadow-[0_0_8px_theme('colors.blue.700')] focus-visible:ring-0 focus-visible:outline-none"
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
              className="input-field"
            />
            <ErrorMsg name="carConsumption" />
          </div>
          <div>
            <label htmlFor="chargePoints" className="label-text">
              Charge Points
            </label>
            <input
              id="chargePoints"
              type="number"
              {...register('chargePoints', { valueAsNumber: true })}
              className="input-field"
            />
            <ErrorMsg name="chargePoints" />
          </div>
          <div className="mb-6 flex">
            <label
              htmlFor="isPowerDifferent"
              className={`label-text inline-flex items-center ${
                chargePoints < 2
                  ? 'cursor-not-allowed !text-gray-400'
                  : 'cursor-pointer'
              }`}
            >
              Do you have charging points with different power?
            </label>
            <input
              id="isPowerDifferent"
              type="checkbox"
              {...register('isPowerDifferent')}
              className="ml-2 cursor-pointer disabled:cursor-not-allowed"
              disabled={chargePoints < 2}
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
                className="input-field"
              />
              <ErrorMsg name="defaultPower" />
            </div>
          )}
          {isPowerDifferent && <PowerGroupList />}
          <div className="mt-4 flex justify-between">
            <button
              type="button"
              className="btn btn-secondary w-[45%]"
              onClick={() => {
                reset(defaultValues);
                onReset();
              }}
            >
              Reset
            </button>
            <button type="submit" className="btn btn-primary w-[45%]">
              Simulate
            </button>
          </div>
        </form>
      </FormProvider>
    </Card>
  );
};

export default ConfigForm;
