import React, { useState, useContext } from "react";
import { MobileContext } from "../../../App";
import SideBar, { sidebarItems } from "../../organisms/sidebar";
import Navigation from "../../organisms/navigation/navigation";
import MobileNavigation from "../../organisms/navigation/mobile-navigation";
import logo from "../../../assets/icons/cs-pro-logo.jpeg";

const DashboardTemplate: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(sidebarItems[0]);
  const value = useContext(MobileContext);

  return (
    <div className="relative">
      <div className="flex gap-10">
        {value.isMobile ? (
          <MobileNavigation sidebar={<SideBar onItemClick={setSelectedItem} />}>
            {/* Pass the selected component as children */}
            {React.createElement(selectedItem.component)}
          </MobileNavigation>
        ) : (
          <div className="flex-grow flex overflow-hidden mt-11">
            <Navigation
              footer={
                <img
                  alt="nav"
                  src={logo}
                  className="cursor-pointer mx-5 w-[250px] h-auto md:w-[250px] md:h-auto"
                />
              }
              sidebar={<SideBar onItemClick={setSelectedItem} />}
            >
              {/* Pass the selected component as children */}
              {React.createElement(selectedItem.component)}
            </Navigation>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardTemplate;
