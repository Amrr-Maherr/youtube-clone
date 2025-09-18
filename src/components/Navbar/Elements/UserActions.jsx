import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const UserActions = () => {
  return (
    <div className=" hidden md:flex items-center gap-5">
      <Tooltip>
        <TooltipTrigger>
          <div className="w-[78px] h-[36px] rounded-full bg-[#272727] flex items-center justify-center gap-2">
            <p className="text-[14px] text-white">Add</p>
            <Plus className="text-white" strokeWidth={1} />
          </div>
        </TooltipTrigger>
        <TooltipContent>Add</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#272727]">
            <Bell size={24} strokeWidth={1} className="text-white" />
          </div>
        </TooltipTrigger>
        <TooltipContent>notification</TooltipContent>
      </Tooltip>
      <Avatar className="cursor-pointer">
        <AvatarImage
          src="https://github.com/shadcn.png"
          className="w-[32px] h-[32px] rounded-full"
        />
        <AvatarFallback className="bg-gray-700 text-white">CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserActions;
