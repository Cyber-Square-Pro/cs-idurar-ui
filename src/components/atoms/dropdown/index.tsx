export interface DropdownProps {
  placeholder: string;
  name: string;
  register: any;
  error: any;
  title: string;
  hideLabel?: boolean;
  options: { value: string; label: string }[];
  className?: string;
  labelColor?: string;
  value?: string;
  disabled?: boolean;
  inputProps?: any;
}

export default function Dropdown({
  placeholder,
  name,
  register,
  error,
  title,
  hideLabel = true,
  options,
  className,
  labelColor = "white",
  value,
  disabled = false,
  inputProps = {},
}: DropdownProps) {
  return (
    <div className={className}>
      {title ? (
        <div className="flex justify-between ">
          <p className={`text-[14px] text-[${labelColor}] ml-1 mb-1`}>
            {title}
          </p>
        </div>
      ) : (
        hideLabel && (
          <div className="flex justify-between invisible">
            <p className={`text-[14px] text-[${labelColor}] ml-1 mb-1`}>.</p>
          </div>
        )
      )}
      <div
        className={`border text-start border-primary w-full rounded-[10px] text-sm inline-flex items-center`}
      >
        <select
          className={`w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500`}
          placeholder={placeholder}
          {...register(name)}
          value={value}
          disabled={disabled}
          {...inputProps}
        >
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error ? (
        <p className="text-[12px] mt-1 ml-1 text-[red]">{error.message}</p>
      ) : (
        hideLabel && <p className=" invisible">a</p>
      )}
    </div>
  );
}
