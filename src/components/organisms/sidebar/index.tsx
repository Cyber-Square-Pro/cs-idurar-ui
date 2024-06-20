import React from 'react';
import { sidebarItems } from './constant';
import Search from '../../atoms/search';
import ButtonIcon from '../../atoms/buttonIcon';
import { Icons } from '../icons/icons';

const Sidebar = () => {
  const handleSearchChange = (searchKey: string) => {
    console.log('Search key:', searchKey);
  };

  const handleAddClick = () => {
    console.log('Add button clicked');
  };


  return (
    <div className="flex flex-col h-full w-auto overflow-hidden">
      <div>
        {sidebarItems.map((item, index) => (
          <div
            className="flex items-center w-auto h-10 m-3 cursor-pointer hover:bg-blue-100 active:bg-blue-100 text-slate-800 text-sm font-medium rounded-md hover:shadow-sm px-3 py-2"
            key={index}
          
          >
            {item.icon} 
            <span className="ml-2">{item.title}</span>
          </div>
        ))}
      </div>
      <hr />
      <div className="flex gap-2 items-center w-auto h-12 m-3 text-sm cursor-pointer font-medium p-1">
        <div className="flex-grow">
          <Search placeholder="Search" onChange={handleSearchChange} defaultValue="" />
        </div>
        <div className="flex items-center justify-center w-9 h-9 bg-blue-500 rounded-md">
          <ButtonIcon icon={Icons.AddIcon} onClick={handleAddClick} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
