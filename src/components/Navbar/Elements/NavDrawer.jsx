import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Home, Compass, Video, Clock } from "lucide-react";

export default function NavDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#272727]">
          <Menu className="text-white w-[24px] h-[24px]" />
        </div>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-[240px] p-4 bg-[#272727] text-white border-0"
      >
        <SheetHeader>
          <SheetTitle className="text-lg font-bold mb-4">Menu</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-3">
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded hover:bg-[#303030]"
          >
            <Home size={20} />
            <span>Home</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded hover:bg-[#303030]"
          >
            <Compass size={20} />
            <span>Explore</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded hover:bg-[#303030]"
          >
            <Video size={20} />
            <span>Subscriptions</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded hover:bg-[#303030]"
          >
            <Clock size={20} />
            <span>History</span>
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
