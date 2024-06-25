import React, { useContext, ReactNode } from 'react';
import { MobileContext } from '../../../App';
import SideBar from '../../organisms/sidebar';
import Header from '../../molecules/header';
import Navigation from '../../organisms/navigation/navigation';
import MobileNavigation from '../../organisms/navigation/mobile-navigation';
import logo from '../../../assets/icons/cs-pro-logo.jpeg';

interface DashboardTemplateProps {
  children?: ReactNode;
}

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ children }) => {
  const value = useContext(MobileContext);

  return (
    <div className="relative h-screen flex flex-col bg-blue-100">
      {value.isMobile ? (
        <div className="w-screen">
          <MobileNavigation
            footer={
              <img
                alt="nav"
                src={logo}
                className="cursor-pointer mx-5 w-[250px] h-auto md:w-[250px] md:h-auto"
              />
            }
            sidebar={<SideBar />}
          >
            {children}
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
                />
              }
              sidebar={<SideBar  />}
            >
              {children }
            </Navigation>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardTemplate;
