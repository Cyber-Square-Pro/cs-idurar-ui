import React from "react";
import { ClipLoader } from "react-spinners";
import "./button.css";

interface ButtonProps {
  textColor?: string;
  label: string;
  onClick?: () => void;
  underline?: boolean;
  isLoading?: boolean;
}

const TextButton: React.FC<ButtonProps> = ({
  textColor = "black",
  label,
  onClick = () => {},
  isLoading = false,
}) => {
  return (
    <button
      type={"button"}
      className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
      style={{ color: textColor }}
      onClick={() => onClick()}
    >
      {" "}
      {isLoading ? (
        <ClipLoader color={"#ffffff"} size={22} />
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
};

export default TextButton;
