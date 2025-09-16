import Drawer from "./Elements/NavDrawer";
import Logo from "./Elements/Logo";
import SearchBar from "./Elements/SearchBar";
import UserActions from "./Elements/UserActions";
import { Mic } from "lucide-react";
const Navbar = () => {
  return (
    <div className="w-full bg-transparent border-b shadow-sm !border-0 h-[56px]">
      <div className="flex items-center justify-between flex-row-reverse px-4 py-3  mx-auto">
        <UserActions />
        <div className="flex-1 flex items-center justify-center flex-row-reverse">
          <SearchBar />
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer bg-[#272727]">
            <Mic size={24} strokeWidth={1} className="text-white" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-2.5">
          <Drawer />
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
