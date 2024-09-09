import React from "react";
import { LuPencil } from "react-icons/lu";

const sidebarItems = [
  {
    icon: <LuPencil size={"24px"} />,
    text: "Inbox",
  },
  {
    icon: <LuPencil size={"24px"} />,
    text: "Starred",
  },
  {
    icon: <LuPencil size={"24px"} />,
    text: "Snoozed",
  },
  {
    icon: <LuPencil size={"24px"} />,
    text: "Sent",
  },
  {
    icon: <LuPencil size={"24px"} />,
    text: "Drafts",
  },
];

const Sidebar = () => {
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button className="flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF]">
          <LuPencil size={"24px"} />
          Compose
        </button>
      </div>
      <div className="text-gray-500 ">
        {sidebarItems.map((item, index) => {
          return (
            <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer my-2 hover:bg-gray-200">
              <LuPencil size={"24px"} />
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
