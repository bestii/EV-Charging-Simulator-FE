import { XCircleIcon } from '@heroicons/react/16/solid';
import { UseFieldArrayRemove, useFormContext } from 'react-hook-form';

type PowerGroupItemProps = {
  id: number;
  remove: UseFieldArrayRemove;
};

const PowerGroupItem = ({ id, remove }: PowerGroupItemProps) => {
  const { register } = useFormContext();

  const removeGroup = () => {
    remove(id);
  };
  return (
    <div className="flex">
      <div className="mr-4 flex-1">
        <label
          className="label-text"
          htmlFor={`chargingPowerGroups.${id}.power`}
        >
          {`Power Group ${id + 1}`}
        </label>
        <div className="flex items-center">
          <input
            id={`chargingPowerGroups.${id}.power`}
            type="number"
            {...register(`chargingPowerGroups.${id}.power`, {
              valueAsNumber: true
            })}
            className="input-field"
          />
          <span>x</span>
          <input
            id={`chargingPowerGroups.${id}.count`}
            type="number"
            {...register(`chargingPowerGroups.${id}.count`, {
              valueAsNumber: true
            })}
            className="input-field"
          />
          {id > 1 && (
            <div className="tooltip" data-tip="delete">
              <button className="mr-2" onClick={removeGroup}>
                <XCircleIcon height="36" className="text-red-500" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PowerGroupItem;
