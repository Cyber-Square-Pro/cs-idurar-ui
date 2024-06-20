import React from "react";

/*
  Author: Reshma on June 7th, 2024
  Purpose: Renders a button with an icon 
  Props:
    - icon: React.ReactElement - The icon to be displayed inside the button.
    - onClick: () => void - Function to be called when the button is clicked.
  Updated by: - Muhammed Adnan on June 13th, 2024 - Enhance Style
*/

interface Props {
  icon: React.ReactElement;
  textColor?: string;
  label?: string;
  border?: string;
  onClick?: () => void;
}

export default function ButtonIcon({ icon, onClick ,textColor,label,border}: Props) {
  return (
    <div className="cursor-pointer rounded-md justify-center p-2 flex-shrink xs:p-0" onClick={onClick}
     style={{color:textColor, border:border}}>
      {icon} {label}
    </div>
  );
}
