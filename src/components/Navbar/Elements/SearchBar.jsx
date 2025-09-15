"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex-grow max-w-[600px] mx-4">
      <div className="relative">
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 bg-[#121212] rounded-full border border-[#303030] text-white focus:ring-2 focus:ring-[#1a73e8] font-roboto text-[16px] placeholder-[#aaaaaa] text-right"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#aaaaaa]"
          size={20}
        />
      </div>
    </div>
  );
};

export default SearchBar;
