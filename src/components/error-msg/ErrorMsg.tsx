import { get, useFormContext } from 'react-hook-form';

type ErrorMsgProps = {
  name: string;
};

export const ErrorMsg = ({ name }: ErrorMsgProps) => {
  const {
    formState: { errors }
  } = useFormContext();
  const error = get(errors, name);

  const message = (error?.message || error?.root?.message) ?? '';

  return (
    <div className="min-h-6">
      {message && <span className="text-xs text-red-500">{message}</span>}
    </div>
  );
};
