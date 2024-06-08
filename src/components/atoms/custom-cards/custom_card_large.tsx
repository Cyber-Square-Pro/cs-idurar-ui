
interface Props {
  label: string;
  cardKey: string | number; 
}

const LargeCustomLabelCard: React.FC<Props> = ({ label,cardKey }) => {
  return (

   
    <div
    className=" border border-emerald-200 rounded-md shadow-md h-[400px] sm:h-[400px] md:h-[400px] lg:h-[400px] p-4"
    key={cardKey}
  >
    <div className="flex flex-col justify-between gap-4">
      <label className="text-lg font-semibold">{label}</label>
    </div>
  </div>


  );
}

export default LargeCustomLabelCard;