

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
    <div className="flex  h-full w-full overflow-y-auto bg-zinc-100 p-1">   
    <div className="flex flex-col w-full">
          <DashboardHeader/>
       <div className="flex p-2 gap-3 sm:flex-shrink xs:flex-wrap ">
         {dashboardItem.map((item, index)=>(
          <SmallCustomLabelCard  label={item.title} value={item.count} cardKey={index}/>

         ))}

      </div>
      <div className="flex p-2 gap-3 sm:flex-shrink xs:flex-wrap">
      {dashboard_Sub_Items.map((item, index)=>(
          <LargeCustomLabelCard  label={item.title} cardKey={index}/>

         ))}

         </div>

    </div>
     


    </div>
  )
}

export default DashboardComponent;