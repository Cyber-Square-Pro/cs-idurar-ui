import React from "react";

export interface Route {
  name: string;
  image?: string;
  href: string;
  selectedIcon?: string;
}

type Props = {
  children: React.ReactNode;
  footer: React.ReactNode;
  sidebar: React.ReactNode;
};

const Navigation: React.FC<Props> = ({ children, footer, sidebar }) => {
  return (
    <div className="flex flex-row w-full h-screen overflow-hidden">
      <div className="h-full max-w-xs min-w-[300px] flex-shrink-0 relative">
        <div className="h-full overflow-hidden border-r border-t border-b rounded-2xl min-w-[300px] bg-white absolute top-0 left-0">
          {sidebar}
          <div className="absolute bottom-0 w-full">
            {footer}
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-grow ml-12 border-2 overflow-x-hidden  overflow-y-auto hideScroll">
        <div className="h-full w-full pr-14">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
