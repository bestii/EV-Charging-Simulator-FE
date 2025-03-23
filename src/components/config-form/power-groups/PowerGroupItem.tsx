import { XMarkIcon } from '@heroicons/react/16/solid';
import { TrashIcon } from '@heroicons/react/24/outline';
import { UseFieldArrayRemove, useFormContext } from 'react-hook-form';

type PowerGroupItemProps = {
  id: number;
  remove: UseFieldArrayRemove;
};

export const PowerGroupItem = ({ id, remove }: PowerGroupItemProps) => {
  const { register } = useFormContext();

  const removeGroup = () => {
    remove(id);
  };

  return (
    <div className="mb-3 flex flex-wrap items-end gap-x-3">
      <div className="flex w-25 flex-col">
        <label
          htmlFor={`chargingPowerGroups.${id}.power`}
          className="label-text"
        >
          Power (kW)
        </label>
        <input
          id={`chargingPowerGroups.${id}.power`}
          type="number"
          {...register(`chargingPowerGroups.${id}.power`, {
            valueAsNumber: true
          })}
          className="input-field text-center"
        />
      </div>
      <div className="flex items-center">
        <XMarkIcon className="mx-2 text-gray-400" height="24" />
      </div>
      <div className="flex w-25 flex-col">
        <label
          htmlFor={`chargingPowerGroups.${id}.count`}
          className="label-text"
        >
          Count
        </label>
        <input
          id={`chargingPowerGroups.${id}.count`}
          type="number"
          {...register(`chargingPowerGroups.${id}.count`, {
            valueAsNumber: true
          })}
          className="input-field text-center"
        />
      </div>
      {id > 1 && (
        <button
          onClick={removeGroup}
          className="group ml-2 cursor-pointer rounded p-1 transition hover:bg-red-500 hover:text-white"
          aria-label="Delete power group"
        >
          <TrashIcon
            height="24"
            className="text-red-500 transition group-hover:text-white"
          />
        </button>
      )}
    </div>
  );
};
