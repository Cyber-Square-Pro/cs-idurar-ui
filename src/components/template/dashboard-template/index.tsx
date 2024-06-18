import React from "react";
import SideBar from "../../organisms/sidebar";
import Header from "../../molecules/header";
import Navigation from "../../organisms/navigation/navigation";
import MobileNavigation from "../../organisms/navigation/mobile-navigation";
import logo from "../../../assets/icons/cs-pro-logo.jpeg";
import { MobileContext } from "../../../App";

/*
  Author: Reshma on June 7th, 2024
  Purpose: Provides a template for the dashboard layout with responsive navigation.
  Props:
    - children: React.ReactNode - The main content to be displayed.
  Updated by: - Muhammed Adnan on June 13th, 2024 - Enhance Layout and Style.
*/

type Props = {
  children: React.ReactNode;
};

const DashboardTemplate: React.FC<Props> = ({ children }) => {
  const value = React.useContext(MobileContext);

  return (
    <div className="relative h-screen flex flex-col bg-blue-100">
      {value.isMobile ? (
        <div className="w-screen">
          <MobileNavigation
            sidebar={<SideBar />}
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
              sidebar={<SideBar />}
            >
              {children}
            </Navigation>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardTemplate;
