
import SideBar ,{sidebarItems} from "../../organisms/sidebar";
import Header from "../../molecules/header";
import Navigation from "../../organisms/navigation/navigation";
import MobileNavigation from "../../organisms/navigation/mobile-navigation";
import logo from "../../../assets/icons/cs-pro-logo.jpeg";
import { MobileContext } from "../../../App";
import { useState,useContext } from "react";


import React from "react";
type Props = {
  children: React.ReactNode;
};

const DashboardTemplate: React.FC<Props> = ({children}) => {
  const [selectedItem, setSelectedItem] = useState(sidebarItems[0]);
  const value = useContext(MobileContext);

  return (
    <div className="relative h-screen flex flex-col bg-blue-100">
      {value.isMobile ? (
        <div className="w-screen">
          <MobileNavigation
            sidebar={<SideBar onItemClick={setSelectedItem}/>}
            footer={
              <img
                alt="nav"
                src={logo}
                className="cursor-pointer mx-5 w-[250px] h-auto md:w-[250px] md:h-auto"
              />
            }
          >
            <div className="flex-grow h-full  overflow-auto">{children}</div>
          </MobileNavigation>
        </div>
      ) : (
        <>
          <Header isMobile={false} />
          <div className="flex-grow flex overflow-hidden mt-11">
            <Navigation
              footer={
                <img
                  alt="nav"
                  src={logo}
                  className="cursor-pointer mx-5 w-[250px] h-auto md:w-[250px] md:h-auto"
                  // onClick={() => navigate(ROUTES.dashboard)}
                />
              }
              // routes={routes(t)}
              // title={" " }
              sidebar={<SideBar onItemClick={setSelectedItem} />}
            >
           {/* Render the selected component */}
           {children ? children : React.createElement(selectedItem.component)}
            </Navigation>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardTemplate;
