import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { configSchema } from '../../schema/configSchema';
import Card from '../card/Card';

type ConfigValues = z.infer<typeof configSchema>;

const ConfigForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<ConfigValues>({
    resolver: zodResolver(configSchema),
    defaultValues: {
      chargePoints: 1,
      arrivalMultiplier: 100,
      carConsumption: 18,
      isPowerDifferent: false,
      defaultPower: 11
    }
  });

  const isPowerDifferent = watch('isPowerDifferent');

  const onSubmit = (data: ConfigValues) => {
    console.log(data);
  };

  return (
    <Card additionalClass="md:col-span-4">
      <h2 className="mb-6 text-2xl font-semibold">
        EV Charging Station Simulation
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          {errors.chargePoints && (
            <p className="text-sm text-red-500">
              {errors.chargePoints.message}
            </p>
          )}
        </div>

        {/* Arrival Multiplier */}
        <div>
          <label
            htmlFor="arrivalMultiplier"
            className="block text-sm font-medium text-gray-700"
          >
            Arrival Multiplier (%)
          </label>
          <Controller
            name="arrivalMultiplier"
            control={control}
            render={({ field }) => (
              <input
                type="number"
                {...field}
                id="arrivalMultiplier"
                className="mt-1 block w-full rounded-md border p-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            )}
          />
          {errors.arrivalMultiplier && (
            <p className="text-sm text-red-500">
              {errors.arrivalMultiplier.message}
            </p>
          )}
        </div>

        {/* Car Consumption */}
        <div>
          <label
            htmlFor="carConsumption"
            className="block text-sm font-medium text-gray-700"
          >
            Car Consumption (kWh)
          </label>
          <Controller
            name="carConsumption"
            control={control}
            render={({ field }) => (
              <input
                type="number"
                {...field}
                id="carConsumption"
                className="mt-1 block w-full rounded-md border p-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            )}
          />
          {errors.carConsumption && (
            <p className="text-sm text-red-500">
              {errors.carConsumption.message}
            </p>
          )}
        </div>

        {/* Power Difference Toggle */}
        <div>
          <label
            htmlFor="isPowerDifferent"
            className="inline-flex items-center text-sm font-medium text-gray-700"
          >
            Different Power for Each Charge Point
          </label>
          <Controller
            name="isPowerDifferent"
            control={control}
            render={({ field }) => (
              <input
                type="checkbox"
                {...field}
                id="isPowerDifferent"
                className="ml-2"
              />
            )}
          />
        </div>

        {/* Default Power */}
        {!isPowerDifferent && (
          <div>
            <label
              htmlFor="defaultPower"
              className="block text-sm font-medium text-gray-700"
            >
              Default Power (kW)
            </label>
            <Controller
              name="defaultPower"
              control={control}
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  id="defaultPower"
                  className="mt-1 block w-full rounded-md border p-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              )}
            />
            {errors.defaultPower && (
              <p className="text-sm text-red-500">
                {errors.defaultPower.message}
              </p>
            )}
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
                      field.onChange([...field.value!, { power: 11, count: 1 }])
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
    </Card>
  );
};

export default ConfigForm;
