"use client"
import { FetchMostPopularVideos } from "@/Store/MostPopularSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "./Elements/VideoCard";

export default function PopularVideos() {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.mostPopularVideos.data);
  const loading = useSelector((state) => state.mostPopularVideos.loading);
  const error = useSelector((state) => state.mostPopularVideos.error);
console.log(videos,"vi");
  useEffect(() => {
    dispatch(FetchMostPopularVideos());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-2 md:px-10">
      {videos.map((video) => (
        <VideoCard video={video} key={video.id}/>
      ))}
    </div>
  );
}
