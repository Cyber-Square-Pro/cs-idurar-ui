
import SideBar from "../../organisms/sidebar";
import Header from "../../molecules/header";
import Navigation from "../../organisms/navigation/navigation";
import MobileNavigation from "../../organisms/navigation/mobile-navigation";
import logo from "../../../assets/icons/cs-pro-logo.jpeg";
import { MobileContext } from "../../../App";


import React from "react";
type Props = {
  children: React.ReactNode;
};

const DashboardTemplate: React.FC<Props> = ({ children }) => {
  const value = React.useContext(MobileContext);

  return (
    <div className="relative ">

        <Header/>
        <div className=" flex gap-10 ">
        {value.isMobile ? ( 
          <MobileNavigation
          
            sidebar={<SideBar/>}
          >
            {children}
          </MobileNavigation>
        ) : (
            <div  className="mt-10">
            <Navigation
            footer={ <img
              alt="nav"
              src={logo}
             className="cursor-pointer mx-5 w-[250px] h-auto md:w-[250px] md:h-auto"
              // onClick={() => navigate(ROUTES.dashboard)}
            />}
            // routes={routes(t)}
            // title={" " }
            sidebar={<SideBar/>}

           
          >
            {children}
          </Navigation>   
          </div>
        )}

        </div>
      
   
    </div>
  );
};

export default DashboardTemplate;
