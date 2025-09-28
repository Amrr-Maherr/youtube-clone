import Drawer from "./Elements/NavDrawer";
import Logo from "./Elements/Logo";
import SearchBar from "./Elements/SearchBar";
import UserActions from "./Elements/UserActions";
import { Mic } from "lucide-react";
import CategoriesNav from "./Elements/CategoriesNav";
const Navbar = () => {
  return (
    <div className="w-full bg-[#120e0f]/95 border-b shadow-sm !border-0 sticky top-0 z-50 h-full">
      <div className="flex items-center justify-between flex-row-reverse px-4 py-2  mx-auto">
        <UserActions />
        <div className="flex-1 flex items-center justify-center flex-row-reverse">
          <SearchBar />
          <div className="w-[40px] h-[40px] rounded-full items-center justify-center cursor-pointer bg-[#272727] hidden md:flex">
            <Mic size={24} strokeWidth={1} className="text-white" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-2.5">
          <Drawer />
          <div className="hidden md:block">
            <Logo />
          </div>
        </div>
      </div>
      <CategoriesNav />
    </div>
  );
};

export default Navbar;
