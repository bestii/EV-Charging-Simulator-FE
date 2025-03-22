import { PropsWithChildren } from 'react';

type CardType = {
  additionalClass?: string;
} & PropsWithChildren;

const Card = ({ additionalClass, children }: CardType) => {
  return (
    <div className={`rounded-lg bg-white p-4 shadow ${additionalClass ?? ''}`}>
      {children}
    </div>
  );
};

export default Card;
