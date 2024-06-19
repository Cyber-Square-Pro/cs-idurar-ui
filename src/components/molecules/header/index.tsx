import React from "react";

/*
  Author: Reshma on June 6th, 2024
  Purpose: Renders a header component 
  Props:
    - isMobile: boolean - Determines if the view is mobile or not
  updated by: - Mohammed Adnan on June 13th, 2024 - Added dynamic positioning 
                based on screen size.
*/

type Props = {
  isMobile: boolean;
};

const Header: React.FC<Props> = ({ isMobile }) => {
  return (
    <div
      className={`w-full h-11 ${
        isMobile ? "relative" : "fixed top-0 left-0"
      } z-10 bg-blue-100 text-lg flex items-center px-4 overflow-hidden`}
    >
      <span className="text-md font-semibold">Header</span>
    </div>
  );
};

export default Header;
