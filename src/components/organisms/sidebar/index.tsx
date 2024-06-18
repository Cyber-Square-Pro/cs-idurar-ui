
import Search from "../../atoms/search";
import ButtonIcon from "../../atoms/buttonIcon";
import { Icons } from "../icons/icons";
import DashboardComponent from "../../../screens/dashboard/DashboardPage";


// Define the content components for each sidebar item

const ContactsContent = () => <div>Contacts Content</div>;
const EnquiriesContent = () => <div>Enquiries Content</div>;
const CoursesContent = () => <div>Courses Content</div>;

// Define sidebar items with their respective components
export const sidebarItems = [
  { icon: Icons.HomeIcon, title: "Dashboard", component: DashboardComponent },
  { icon: Icons.ContactIcon, title: "Contacts", component: ContactsContent },
  { icon: Icons.EnquiryIcon, title: "Enquiries", component: EnquiriesContent },
  { icon: Icons.CourseIcon, title: "Courses", component: CoursesContent },
];

const Sidebar: React.FC<{ onItemClick: (item: typeof sidebarItems[0]) => void }> = ({ onItemClick }) => {
  const handleSearchChange = (searchKey: string) => {
    console.log("Search key:", searchKey);
  };

  const handleAddClick = () => {
    console.log("Add button clicked");
  };

  return (
    <>
      <div>
        {sidebarItems?.map((item, index) => (
          <div
            className="w-[250px] h-10 m-3 mr-3 cursor-pointer hover:bg-green-100 active:bg-green-100 font-medium rounded-sm hover:shadow-md ps-3 py-3"
            key={index}
            onClick={() => onItemClick(item)}
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
   
    </>
  );
};

export default Sidebar;
