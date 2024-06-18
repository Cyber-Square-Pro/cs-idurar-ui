import React from 'react';
import { Icons } from '../../../components/organisms/icons/icons';

interface Props {
  label: string;
  value: number;
  cardKey?: string | number; 
}

const SmallCustomLabelCard: React.FC<Props> = ({ label, value, cardKey }) => {
 
  return (
    <div
      className=" border border-gray-300 rounded-md shadow-md h-32 sm:h-32 md:h-32 lg:h-64 w-full font-sans"
      key={cardKey}
    >
      <div className="flex text-xl gap-4 border-b-2  p-4 h-14 justify-between" >
          <div className='flex justify-between w-[50%]'>
           <label className="text-xl font-semibold">{label}</label> 
           {Icons.FilterIcon}
          </div>
         <div >
          {Icons.MoreIcon}
         </div>

      </div>
      <div className='flex justify-center items-center align-middle '>
         <label className="text-3xl font-semibold  mt-[10%]">{value}</label>
 
      </div>
   
     
      
    </div>
  );
}

export default SmallCustomLabelCard;
