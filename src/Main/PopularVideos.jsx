"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "./Elements/VideoCard";
import { FetchVideosByCategory } from "@/Store/videosByCategorySlice";
import Loader from "@/components/Loader/Loader";
import { FetchMostPopularVideos } from "@/Store/MostPopularSlice";

export default function VideosByCategory() {
    const dispatch = useDispatch();
  const mostPopular = useSelector((state) => state.mostPopularVideos.data);
  const loading = useSelector((state) => state.mostPopularVideos.loading);
  const error = useSelector((state) => state.mostPopularVideos.error);

  useEffect(() => {
    const Code = JSON.parse(localStorage.getItem("code")) || undefined;
    if (Code) {
      dispatch(FetchMostPopularVideos(Code));
    } else {
      dispatch(FetchMostPopularVideos());
    }
  }, []);

  
  
  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">Error: {error}</p>;
console.log(loading);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-2 md:px-10">
      {mostPopular.length < 0 ? (
        <div className="flex items-center justify-center h-[70dvh] w-full col-span-12">
          <p className="text-gray-400 text-center w-full">
            No videos available
          </p>
        </div>
      ) : (
        mostPopular.map((video) => <VideoCard video={video} key={video.id} />)
      )}
    </div>
  );
}
