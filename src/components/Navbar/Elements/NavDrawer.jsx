import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  Home,
  Compass,
  Video,
  Clock,
  Library,
  Heart,
  Clock3,
  Flame,
  Music,
  Gamepad2,
  Settings,
} from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

export default function NavDrawer() {
  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Compass, label: "Explore", href: "/explore" },
    { icon: Video, label: "Subscriptions", href: "/subscriptions" },
    { icon: Clock, label: "History", href: "/history" },
  ];

  const libraryItems = [
    { icon: Library, label: "Library", href: "/library" },
    { icon: Heart, label: "Liked videos", href: "/liked" },
    { icon: Clock3, label: "Watch later", href: "/watch-later" },
  ];

  const exploreItems = [
    { icon: Flame, label: "Trending", href: "/trending" },
    { icon: Music, label: "Music", href: "/music" },
    { icon: Gamepad2, label: "Gaming", href: "/gaming" },
  ];

  return (
    <Sheet>
      <SheetTrigger>
        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#272727]">
          <Menu className="text-white w-[24px] h-[24px]" />
        </div>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-[240px] p-2 bg-[#0f0f0f] text-white border-r border-[#303030]"
      >
        <SheetHeader>
          <SheetTitle className="text-lg font-bold mb-3">
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-6 px-4 py-2 rounded-lg hover:bg-[#272727] text-sm"
              >
                <Icon size={22} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="my-3 border-t border-[#303030]" />

        <nav className="flex flex-col">
          {libraryItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-6 px-4 py-2 rounded-lg hover:bg-[#272727] text-sm"
              >
                <Icon size={22} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="my-3 border-t border-[#303030]" />

        <nav className="flex flex-col">
          {exploreItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-6 px-4 py-2 rounded-lg hover:bg-[#272727] text-sm"
              >
                <Icon size={22} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="my-3 border-t border-[#303030]" />

        <nav className="flex flex-col">
          <Link
            href="/SettingsPage"
            className="flex items-center gap-6 px-4 py-2 rounded-lg hover:bg-[#272727] text-sm"
          >
            <Settings size={22} />
            <span>Settings</span>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
