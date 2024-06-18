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
  onClick: () => void;
}

export default function ButtonIcon({ icon, onClick }: Props) {
  return (
    <div className="text-white cursor-pointer" onClick={onClick}>
      {icon}
    </div>
  );
}
