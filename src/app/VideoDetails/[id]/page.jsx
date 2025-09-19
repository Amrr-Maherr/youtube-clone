"use client";
import Loader from "@/components/Loader/Loader";
import Navbar from "@/components/Navbar/Navbar";
import VideoDetailsCard from "@/components/VideoDetailsCard/VideoDetailsCard";
import VideoCard from "@/Main/Elements/VideoCard";
import { FetchMostPopularVideos } from "@/Store/MostPopularSlice";
import { FetchVideoComments } from "@/Store/videoCommentsSlice";
import { FetchVideoDetails } from "@/Store/videoDetailsSlice";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function VideoDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const videoDetails = useSelector((state) => state.videoDetails);
  const mostPopular = useSelector(
    (state) => state.mostPopularVideos.data
  );
  const comments = useSelector((state) => state.videoComments?.data?.items);
  const { data, loading, error } = videoDetails;

  useEffect(() => {
    if (id) {
      dispatch(FetchVideoDetails(id));
      dispatch(FetchVideoComments(id));
      dispatch(FetchMostPopularVideos());
    }
  }, [dispatch, id]);

  if (loading) return <Loader />;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!data || !data.items || data.items.length === 0)
    return <p>No video found</p>;

  const video = data.items[0];

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12 gap-5 px-2 md:px-10 mt-5">
        <div className="col-span-12 md:col-span-9">
          <VideoDetailsCard video={video} comments={comments} />
        </div>
        <div className="col-span-12 md:col-span-3 space-y-10">
          {mostPopular.map((video) => (
            <VideoCard video={video} key={video.id} />
          ))}
        </div>
      </div>
    </>
  );
}
