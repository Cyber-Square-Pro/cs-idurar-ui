
import SideBar from "../../organisms/sidebar";
import Header from "../../molecules/header";

import React from "react";
type Props = {
  children: React.ReactNode;
};

const DashboardTemplate: React.FC<Props> = ({ children }) => {

  return (
    <div className="relative ">
        <Header/>
        <div className=" flex gap-10 ">
            <div  >
            <SideBar/>        

            </div>
            <div className="mt-10">
            {children}  

            </div>

        </div>
      
   
    </div>
  );
};

export default DashboardTemplate;
