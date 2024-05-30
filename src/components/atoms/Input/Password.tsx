import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

interface Props {
  placeholder: string;
  name: string;
  register: any;
  error: any;
  title: string;
}

export default function Password({
  placeholder,
  name,
  register,
  error,
  title,
}: Props) {
  const [showPassword, setShowPassword] = useState(true);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-[14px] text-black ml-1 mb-2">{title}</p>
      </div>
      <div className="relative h-[46px]">
        <input
          type={showPassword ? "password" : "text"}
          className={`w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-4 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500`}
          placeholder={placeholder}
          {...register(name, { required: true })}
        />
        <div
          className="icon_button absolute right-2 bottom-2 top-[11px] md:top-[10px]"
          onClick={handleClickShowPassword}
        >
          {showPassword ? (
            <VisibilityOff sx={{ color: "white" }} />
          ) : (
            <Visibility sx={{ color: "white" }} />
          )}
        </div>
      </div>
      {error ? (
        <p className="text-[12px] mt-1 ml-1 text-[red]">{error.message}</p>
      ) : (
        <p className=" invisible">a</p>
      )}
    </div>
  );
}
