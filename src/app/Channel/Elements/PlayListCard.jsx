"use client";

import React from "react";

function PlayListCard({ playlist }) {
  if (!playlist) return null;

  const { snippet } = playlist;

  return (
    <div className="bg-[#181818] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <div className="relative w-full h-[180px] md:h-[200px]">
        <img
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3 flex flex-col gap-1">
        <h3 className="text-white font-semibold text-[14px] md:text-[16px] line-clamp-2">
          {snippet?.title}
        </h3>
        <p className="text-gray-400 text-[12px] md:text-[14px] truncate">
          {snippet?.channelTitle}
        </p>
      </div>
    </div>
  );
}

export default PlayListCard;
