
import Search from "../../atoms/search";
import ButtonIcon from "../../atoms/buttonIcon";
import { Icons } from "../icons/icons";



const sidebar_top_items = [
  { icon: Icons.HomeIcon, title: "Home" },
  { icon: Icons.Work, title: "My Work" },
];

const sidebar_items = [
  { icon: Icons.ContactIcon, title: "Contacts" },
  { icon: Icons.EnquiryIcon, title: "Enquiries" },
  { icon: Icons.CourseIcon, title: "Courses" },
];

const Sidebar = () => {
  const handleSearchChange = (searchKey: string) => {
    console.log("Search key:", searchKey);
  };

  const handleAddClick = () => {
    console.log("Add button clicked");
  };

  return (
    <>
      <div>
        {sidebar_top_items?.map((item, index) => (
          <div
            className="w-[250px] h-10 m-3 mr-3 cursor-pointer hover:bg-green-100 active:bg-green-100 font-medium rounded-sm hover:shadow-md ps-3 py-3"
            key={index}
          >
            {item.icon} {item.title}
          </div>
        ))}
      </div>
      <hr />
      <div className="flex gap-4 justify-between w-[300px] h-10 m-3 mr-3 cursor-pointer font-medium ps-3 py-3">
        <Search
          placeholder="Search"
          onChange={handleSearchChange}
          defaultValue=""
        />
        <div className="w-12 h-12 p-3 items-center bg-green-200 shadow-md rounded-sm">
        <ButtonIcon
          icon={Icons.AddIcon}
          onClick={handleAddClick}
        />

        </div>
      
      </div>
      <div className="py-3">
        {sidebar_items?.map((item, index) => (
          <div
            className="w-[250px] h-10 m-3 mr-3 cursor-pointer hover:bg-green-100 active:bg-green-100 font-medium rounded-sm hover:shadow-md ps-3 py-3"
            key={index}
          >
            {item.icon} {item.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
