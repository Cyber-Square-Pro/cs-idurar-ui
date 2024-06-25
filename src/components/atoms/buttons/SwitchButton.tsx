import React, { useState } from "react";


interface SwitchButtonProps {
  isOn?: boolean; // Initial state of the switch
  onToggle?: (isOn: boolean) => void; // Callback function to handle the toggle
  onColor?: string; // Color when the switch is on
  offColor?: string; // Color when the switch is off
  disabled?: boolean; // Disable the switch interaction
  size?: "small" | "medium" | "large"; // Size of the switch
  className?: string; // Custom class names for additional styling
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
  isOn = false,
  onToggle = () => {},
  onColor = "bg-green-500",
  offColor = "bg-gray-300",
  disabled = false,
  size = "medium",
  className = "",
}) => {
  const [checked, setChecked] = useState(isOn);

  const handleToggle = () => {
    if (!disabled) {
      const newState = !checked;
      setChecked(newState);
      onToggle(newState);
    }
  };

  const sizeClasses = {
    small: "w-10 h-6",
    medium: "w-12 h-7",
    large: "w-14 h-8",
  };

  return (
    <div
      className={`relative inline-flex items-center cursor-pointer ${sizeClasses[size]} ${
        checked ? onColor : offColor
      } rounded-full transition-colors duration-300 ease-in-out ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      onClick={handleToggle}
    >
      <span
        className={`inline-block transform transition-transform duration-300 ease-in-out rounded-full bg-white shadow-md ${
          checked ? "translate-x-full" : "translate-x-0"
        } ${size === "small" ? "w-4 h-4" : size === "medium" ? "w-5 h-5" : "w-6 h-6"}`}
      />
    </div>
  );
};

export default SwitchButton;
