"use client";

import React, { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchSearchVideos,
} from "@/Store/searchVideosSlice";
import SearchResult from "./SearchResult";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.searchVideos);
  
useEffect(() => {
  if (!searchQuery) return;
  const delayDebounce = setTimeout(() => {
    dispatch(FetchSearchVideos(searchQuery));
  }, 1000);
  return () => clearTimeout(delayDebounce);
}, [searchQuery, dispatch]);

  
  return (
    <div className="flex-grow max-w-[500px] mx-4 relative">
      <form className="relative">
        {searchQuery && (
          <X
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#aaaaaa] cursor-pointer hover:text-white"
            size={18}
            onClick={() => setSearchQuery("")}
          />
        )}
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          className="w-full pl-10 pr-10 py-2 bg-[#121212] rounded-full border border-[#303030] text-white focus:ring-2 focus:ring-[#1a73e8] font-roboto text-[16px] placeholder-[#aaaaaa] text-right"
        />
        <Search
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-[#aaaaaa] ${
            searchQuery.length === 0 ? "cursor-not-allowed" : "cursor-pointer"
          } hover:text-white`}
          size={20}
        />
      </form>
      {data.length > 0 ? (
        <SearchResult
          data={data}
          error={error}
          loading={loading}
          searchQuery={searchQuery}
        />
      ) : null}
    </div>
  );
};

export default SearchBar;
