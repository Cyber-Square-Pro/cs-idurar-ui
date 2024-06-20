import React from 'react';
import { Icons } from '../../../components/organisms/icons/icons';
interface Props {
  label: string;
  cardKey?: string | number;  
}

const LargeCustomLabelCard: React.FC<Props> = ({ label,cardKey }) => {
  return (

   
    <div
    className=" w-[100%] border border-gray-300 rounded-md shadow-md h-[400px] sm:h-[400px] md:h-[400px] lg:h-[400px] bg-white"
    key={cardKey}
  >
   <div className="flex text-xl gap-4 border-b-2  p-4 h-14 justify-between" >
          <div className='flex justify-between w-[50%]'>
           <label className="text-xs sm:text-sm xs:text-xs md:text-sm lg:text-lg font-medium leading-normal lg:leading-none">{label}</label> 
           {Icons.FilterIcon}
          </div>
         <div >
          {Icons.MoreIcon}
         </div>

      </div>
       <div className="text-xs sm:text-sm xs:text-xs md:text-sm lg:text-lg font-medium leading-normal lg:leading-none">
 
      </div>
   
  </div>


  );
}

export default LargeCustomLabelCard;