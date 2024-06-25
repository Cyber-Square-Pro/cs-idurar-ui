import { Icons } from "../../components/organisms/icons/icons";
import { Button } from "../../components/atoms";
import ButtonIcon from "../../components/atoms/buttonIcon";
import Search from "../../components/atoms/search";

const DashboardHeader = () => {
  return (
  
     <div className=" w-full flex flex-col p-0">
      <div className="border-2  w-full">
        <div className="flex justify-between bg-white sm:flex-shrink xs:flex-wrap">
          <div className=" flex ">
            <div className="w-fit border m-2 lg:text-2xl  font-mono font-semibold justify-center rounded-sm align-middle p-2">
              Dashboard
            </div>
            <div className=" flex justify-start mt-5">{Icons.StarIcon}</div>
          </div>
          <div className="flex mt-3 mb-3 gap-2">
            <Button
              label="View"
              backgroundColor="transparent"
              textColor="black"
              size="small"
              // onClick={() => alert('Button clicked!')}
              // className="my-custom-class"
              // isLoading={false}
              // disabled={false}
              border="1px solid grey"
            />
            <Button
              label="Edit"
              backgroundColor="transparent"
              textColor="black"
              size="small"
              // onClick={() => alert('Button clicked!')}
              // className="my-custom-class"
              // isLoading={false}
              // disabled={false}
              border="1px solid grey"
            />
          </div>
          <div className=" flex mt-3 h-[70%] gap-2">
            <div className="mt-2 cursor-pointer">{Icons.QuestionMark}</div>

            <ButtonIcon
              icon={Icons.ShareIcon}
              label="Share"
              textColor="black"
              border="2px solid grey"
            />
            <div className="mt-2 cursor-pointer">{Icons.MoreIcon}</div>
          </div>
        </div>
      </div>
      <div className="border-b-2  h-[50%] w-full  bg-white ">
        <div className="flex m-2 justify-between">
          <div className=" flex gap-4  w-[100%]  border-r-2 p-">
            <Button
              size="medium"
              label="Add Widget"
              backgroundColor="#ebf8ff"
              textColor="black"
              border="2px solid grey"
            />
            <div className="w-[50%]">
              <Search placeholder="Type to filter" />
            </div>
            <div className="mt-2 cursor-pointer">{Icons.SaveIcon}</div>
          </div>
          <div className=" flex gap-4 w-[100%] ">
            <ButtonIcon
              icon={Icons.PeopleIcon}
              label=" People"
              textColor="black"
            />
            <ButtonIcon
              icon={Icons.FilterIcon}
              label=" Filter"
              textColor="black"
            />
          </div>
          <div className=" flex gap-4  ">
            <ButtonIcon icon={Icons.SettingsIcon} textColor="black" />
          </div>
        </div>
      </div>
      </div>
    
  );
};

export default DashboardHeader;
