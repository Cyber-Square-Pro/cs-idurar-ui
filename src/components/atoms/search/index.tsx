import React from 'react';

interface Props {
  placeholder: string;
  onChange?: (key: string) => void;
  defaultValue?: string | undefined | null;
}

const Search: React.FC<Props> = ({
  placeholder,
  onChange,
  defaultValue = "",
  ...otherProps
}) => {
  return (
    <div className="relative w-full">
      <div className="absolute top-1/2 left-0 flex items-center pl-3 transform -translate-y-1/2 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22.164 22.164"
          className="text-slate-600 w-4 h-4"
          stroke="currentColor"
          strokeWidth="1"
        >
          <g id="_x32_-Magnifying_Glass" transform="translate(-6.808 -6.808)">
            <path
              id="Path_3408"
              data-name="Path 3408"
              d="M28.783,27.871l-5.036-5.036a9.693,9.693,0,1,0-.911.911l5.036,5.036a.645.645,0,1,0,.911-.911ZM10.551,22.4a8.38,8.38,0,1,1,5.925,2.454A8.326,8.326,0,0,1,10.551,22.4Z"
              transform="translate(0 0)"
              fill="currentColor"
            />
          </g>
        </svg>
      </div>
      <input
        type="text"
        id="simple-search"
        className="text-black bg-slate-300 bg-opacity-80 border text-start border-primary focus:border-primary focus:outline-none text-md rounded-lg block w-full pl-14 p-3 "
        placeholder={placeholder}
        required
        onChange={(e) => onChange && onChange(e.target.value)}
        defaultValue={defaultValue || ""}
        {...otherProps}
      />
    </div>
  );
};

export default Search;
