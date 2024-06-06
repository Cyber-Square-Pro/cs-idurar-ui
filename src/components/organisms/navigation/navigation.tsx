import React from "react";

export interface Route {
  name: string;
  image?: string;
  href: string;
  selectedIcon?: string;
 // includes?: any;
}

type Props = {
  children: React.ReactNode;
//   title: string|React.ReactNode;
  //routes: Route[];
  footer: React.ReactNode;
  sidebar: React.ReactNode;

};

const Navigation: React.FC<Props> = ({ children ,footer,sidebar}) => {
 

  return (
    <div className="flex flex-row	h-1/3 overflow-hidden">
      <div className=" h-screen max-w-[400px] min-w-[300px]">
        <div className=" h-screen overflow-hidden absolute border-r border-t border-b rounded-2xl min-w-[300px] bg-white">
         {/* <div className="flex justify-start mt-[20px] ">{title}</div>  */}
       
          {sidebar}

          <div className="mb-0 mt-40">
          {footer}
         </div>

        </div>
      
      </div>
     
      <div className="w-full p-5 overflow-x-hidden hideScroll">{children}</div>
    </div>
  );
};

export default Navigation;
