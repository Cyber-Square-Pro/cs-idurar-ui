import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "../../atoms";
import { mobileNavExpand } from "../../../assets/icons";
import Header from "../../molecules/header";
// import { useNavigate, useLocation } from "react-router";

/*
  Author: Reshma on June 7th, 2024
  Purpose: Renders a mobile navigation layout
  Props:
    - children: React.ReactNode - The main content to be displayed.
    - footer: React.ReactNode - The footer component to be displayed.
    - sidebar: React.ReactNode - The sidebar content to be displayed.
  Updated by: - Muhammed Adnan on June 13th, 2024 - Enhance Layout 
*/

type Props = {
  children: React.ReactNode;
  //   title: any;
  //   routes: Route[];
  footer: React.ReactNode;
  sidebar: React.ReactNode;
};

const MobileNavigation: React.FC<Props> = ({
  children,
  //   title,
  //   routes,
  footer,
  sidebar,
}) => {
  const [open, setOpen] = useState(false);
  //   const navigate = useNavigate();
  //   const location = useLocation();

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between items-center gap-2 bg-[#262a37c4] py-5 px-4 md:px-6">
        {/* {title} */}
        <IconButton
          icon={mobileNavExpand}
          label=""
          onClick={() => setOpen(true)}
          size="large"
        />
      </div>
      <Drawer
        anchor={"left"}
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ className: "w-full bg-[#262a37c4]" }}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center py-5 px-4 md:px-6 bg-[#262a37c4]">
            {/* {title} */}
            <IconButton
              icon={mobileNavExpand}
              label=""
              onClick={() => setOpen(false)}
              size="large"
            />
          </div>
          {/* <div className="flex flex-col gap-5 mt-[20px] p-5">
            {routes.map((route: Route, index: number) => (
              <div
              key={route.name}
              className={
                index < routes.length - 1
                ? "border-b	border-[#FFFFFF] pb-[10px]"
                    : ""
                }
                >
                <IconButton
                icon={
                  location.pathname === route.href
                  ? route.selectedIcon
                  : route.image
                  }
                  label={route.name}
                  textColor={
                    location.pathname === route.href ? "#ECBE44" : "#FFFFFF"
                    }
                    onClick={() => {
                      navigate(route.href);
                      setOpen(false);
                      }}
                      size="medium"
                      className="w-full"
                      />
                      </div>
                      ))}
                      </div> */}
          <div className="flex-grow overflow-auto">{sidebar}</div>
          {footer}
        </div>
      </Drawer>
      <div className="flex flex-col flex-grow overflow-auto">
        <Header isMobile={true} />
        {children}
      </div>
    </div>
  );
};

export default MobileNavigation;
