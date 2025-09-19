"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "./Elements/VideoCard";
import { FetchVideosByCategory } from "@/Store/videosByCategorySlice";
import Loader from "@/components/Loader/Loader";

export default function VideosByCategory({ categoryId }) {
  const dispatch = useDispatch();

  const videos = useSelector((state) => state.videosByCategory.data.items || []);
  const loading = useSelector((state) => state.videosByCategory.loading);
  const error = useSelector((state) => state.videosByCategory.error);

  useEffect(() => {
  dispatch(FetchVideosByCategory("ftCOldpn8k0"));
},[])
  useEffect(() => {
    if (categoryId) {
      dispatch(FetchVideosByCategory(categoryId));
    }
  }, [dispatch, categoryId]);

  if (loading) return <Loader/>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-2 md:px-10">
      {videos.length < 0 ? (
        <div className="flex items-center justify-center h-[70dvh] w-full col-span-12">
          <p className="text-gray-400 text-center w-full">No videos available</p>
        </div>
      ) : (
        videos.map((video) => <VideoCard video={video} key={video.id} />)
      )}
    </div>
  );
}
