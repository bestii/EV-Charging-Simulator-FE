import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useFieldArray } from 'react-hook-form';
import { ErrorMsg } from '../../error-msg/ErrorMsg';
import { PowerGroupItem } from './PowerGroupItem';

export const PowerGroupList = () => {
  const { fields, append, remove } = useFieldArray({
    name: 'chargingPowerGroups'
  });
  const addPowerGroup = () => {
    append(
      { power: 11, count: 1 },
      {
        shouldFocus: true
      }
    );
  };
  return (
    <div className="power-group-list">
      <div className="mb-4 flex items-center">
        <p className="label-text">Charging Power Groups:</p>
        <button
          onClick={addPowerGroup}
          type="button"
          title="Add new charging group"
          className="group ms-4 flex cursor-pointer items-center gap-1 rounded-lg border border-green-500 px-3 py-1 text-sm font-medium text-green-500 transition hover:bg-green-500 hover:text-white focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
        >
          <span>ADD</span>
          <PlusCircleIcon
            height="20"
            className="text-green-500 transition group-hover:text-white"
          />
        </button>
      </div>
      {fields.map((field, index) => (
        <PowerGroupItem key={field.id} id={index} remove={remove} />
      ))}
      <ErrorMsg name="chargingPowerGroups" />
    </div>
  );
};
