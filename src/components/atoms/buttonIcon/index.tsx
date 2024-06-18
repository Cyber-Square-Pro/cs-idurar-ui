import React from "react";

interface Props {
  icon: React.ReactElement;
  textColor?: string;
  label?: string;
  border?: string;
  onClick?: () => void;
}

export default function ButtonIcon({ icon, onClick ,textColor,label,border}: Props) {
  return (
    <div className="cursor-pointer rounded-md justify-center p-2" onClick={onClick}
     style={{color:textColor, border:border}}>
      {icon} {label}
    </div>
  );
}
