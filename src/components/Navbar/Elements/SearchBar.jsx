"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSearchResults,
  FetchSearchVideos,
} from "@/Store/searchVideosSlice";
import Link from "next/link";
import SearchResult from "./SearchResult";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.searchVideos);
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      dispatch(FetchSearchVideos(searchQuery));
    }
  };

  return (
    <div className="flex-grow max-w-[500px] mx-4 relative">
      <form onSubmit={handleSearch} className="relative">
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 bg-[#121212] rounded-full border border-[#303030] text-white focus:ring-2 focus:ring-[#1a73e8] font-roboto text-[16px] placeholder-[#aaaaaa] text-right"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#aaaaaa] cursor-pointer"
          size={20}
          onClick={handleSearch}
        />
      </form>
      {data.length > 0 ? (
        <SearchResult data={data} error={error} loading={loading} />
      ) : null}
    </div>
  );
};

export default SearchBar;
