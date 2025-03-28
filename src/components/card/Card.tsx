import { PropsWithChildren } from 'react';

type CardType = {
  additionalClass?: string;
} & PropsWithChildren;

export const Card = ({ additionalClass, children }: CardType) => {
  return (
    <div
      className={`border-1 border-black/10 bg-white p-4 ${additionalClass ?? ''}`}
    >
      {children}
    </div>
  );
};
