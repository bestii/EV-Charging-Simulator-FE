import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { configSchema } from '../../schema/configSchema';
import Card from '../card/Card';
import { ErrorMsg } from '../error-msg/ErrorMsg';

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
    control,
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
              className="input-field"
            />
            <ErrorMsg name="chargePoints" />
          </div>
          <div>
            <label htmlFor="arrivalMultiplier" className="label-text">
              Arrival Multiplier (%)
            </label>
            <input
              id="arrivalMultiplier"
              type="number"
              {...register('arrivalMultiplier', { valueAsNumber: true })}
              className="input-field"
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

          {/* Default Power */}
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

          {/* Dynamic Charging Power */}
          {isPowerDifferent && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Charging Power
              </label>
              <Controller
                name="chargingPower"
                control={control}
                render={({ field }) => (
                  <>
                    {field.value?.map((item, index) => (
                      <div key={index} className="flex space-x-2">
                        <input
                          type="number"
                          value={item.power}
                          onChange={(e) => {
                            const newChargingPower = [...field.value!];
                            newChargingPower[index].power = parseFloat(
                              e.target.value
                            );
                            field.onChange(newChargingPower);
                          }}
                          className="w-24 rounded-md border p-2"
                          placeholder="Power (kW)"
                        />
                        <input
                          type="number"
                          value={item.count}
                          onChange={(e) => {
                            const newChargingPower = [...field.value!];
                            newChargingPower[index].count = parseInt(
                              e.target.value
                            );
                            field.onChange(newChargingPower);
                          }}
                          className="w-24 rounded-md border p-2"
                          placeholder="Count"
                        />
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() =>
                        field.onChange([
                          ...field.value!,
                          { power: 11, count: 1 }
                        ])
                      }
                      className="mt-2 text-blue-500"
                    >
                      Add Power
                    </button>
                  </>
                )}
              />
              {errors.chargingPower && (
                <p className="text-sm text-red-500">
                  {errors.chargingPower.message}
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
