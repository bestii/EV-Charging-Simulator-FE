import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useFieldArray } from 'react-hook-form';
import PowerGroupItem from './PowerGroupItem';

const PowerGroupList = () => {
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
      <div className="flex justify-end">
        <button onClick={addPowerGroup} className="" type="button">
          <PlusCircleIcon height="24" className="text-primary" />
          <span>Add Power Group</span>
        </button>
      </div>
      {fields.map((field, index) => (
        <PowerGroupItem key={field.id} id={index} remove={remove} />
      ))}
    </div>
  );
};

export default PowerGroupList;
