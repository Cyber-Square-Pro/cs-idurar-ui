import DashboardHeader from "./DashboardHeader";
import LargeCustomLabelCard from "./customLabelCard/largeCustomLabelCard";
import SmallCustomLabelCard from "./customLabelCard/smallCustomLabelCard";
const DashboardComponent = () => {
  const dashboardItem=[
    { title:"Enrolled Students", count:2},
    { title:"New Enquiries ", count:3},
    { title:"Monthly Revenue", count:125000}


  ];
  const dashboard_Sub_Items=[
    { title:"Enrollment Trend"},
    { title:"Revenue Trend "},
  ];



  return (
    <div className="flex h-full w-full  flex-col  bg-white">
      <DashboardHeader/>
      <div className="flex gap-4 mt-3 ml-5">
        {dashboardItem ?.map((item,index)=>(
            <SmallCustomLabelCard  label={item.title} value={item.count} cardKey={index}/>
        ))}      

      </div>
      <div className="flex gap-4 mt-3 ml-5 w-full">
      {dashboard_Sub_Items ?.map((item,index)=>(
            <LargeCustomLabelCard  label={item.title}  cardKey={index}/>
        ))}      
        </div>

  
    {/* <h1 className="font-bold text-2xl text-slate-500" >DASHBOARD PAGE</h1>  */}
    </div>
  );
};
export default DashboardComponent;
