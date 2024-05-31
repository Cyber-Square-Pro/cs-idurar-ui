import React from "react";
import logo from "../../../assets/icons/cs-pro-logo.jpeg";
type Props = {
  children: React.ReactNode;
};

const AuthTemplate: React.FC<Props> = ({ children }) => {

  return (
    // <div className="h-full relative ">
    <div className="flex flex-col md:flex-row h-full justify-center items-center">
     <div className=" w-full md:w-[40%] flex flex-col justify-center items-center p-8 mb-8 md:mb-0">
      <div className="mb-4">
        <img src={logo} height="200px" width="300px" alt="logo" />
      </div>
      <div className="py-2">
        <h3 className="text-gray-600 text-lg">Automate your work</h3>
        <p>Focus on bringing sales to increase the revenue.</p>
      </div>
      <div>
        <h3 className="text-gray-600 text-lg">One place for everyone</h3>
        <p>Focus on bringing sales to increase the revenue.</p>
      </div>
    </div>
    <div className=" w-full  flex justify-center items-center p-8">
        {children}
    </div>
    </div>
    // </div>
  );
};

export default AuthTemplate;
