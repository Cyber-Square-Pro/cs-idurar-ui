import React from 'react';

interface Props {
  label: string;
  value: number;
  cardKey: string | number; 
}

const SmallCustomLabelCard: React.FC<Props> = ({ label, value, cardKey }) => {
  return (
    <div
      className=" border border-emerald-200 rounded-md shadow-md h-32 sm:h-32 md:h-32 lg:h-32 w-full p-4"
      key={cardKey}
    >
      <div className="flex flex-col justify-between gap-4">
        <label className="text-lg font-semibold">{label}</label> 
        <label className="text-xl">{value}</label>
      </div>
    </div>
  );
}

export default SmallCustomLabelCard;
