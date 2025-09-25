"use client";

import { FetchChannelDetails } from "@/Store/channelSlice";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// ShadCN Components
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar/Navbar";
import VideoCard from "@/Main/Elements/VideoCard";
import ChannelVideoCard from "../Elements/ChannelVideoCard";
import Loader from "@/components/Loader/Loader";

function Page() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.channel.data);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    if (id) dispatch(FetchChannelDetails(id));
  }, [id, dispatch]);

  if (loading) return (
    <Loader/>
  );
  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (!data) return null;

  const { snippet, statistics, brandingSettings } = data;
  const playlists = data.videos || [];
  const Banner = data?.brandingSettings?.image?.bannerExternalUrl;
  console.log(data, "data");
  return (
    <>
      <Navbar />
      <section className="container max-w-[1284px] mx-auto px-4">
        <div className="flex items-center justify-center">
          <figure className="w-[1284px] h-[208px] rounded-lg overflow-hidden">
            <img className="object-cover w-full h-full" src={Banner} alt="" />
          </figure>
        </div>
        <div className="flex items-center justify-start mt-5 gap-3">
          <div>
            <figure className="w-[160px] h-[160px] rounded-full overflow-hidden">
              <img
                className="w-full h-full"
                src={data?.snippet.thumbnails.high.url}
                alt={data?.snippet.localized.title}
              />
            </figure>
          </div>
          <div>
            <h3 className="text-[36px] font-[700] text-[#f1f1f1]">
              {data?.snippet.localized.title}
            </h3>
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-[20px] font-[500] text-[#f1f1f1]">
                {data?.snippet.customUrl}
              </h3>
              <h3 className="text-[14px] font-[400] text-[#aaaaaa]">
                {data?.statistics.subscriberCount} مليون مشترك
              </h3>
              <h3 className="text-[14px] font-[400] text-[#aaaaaa]">
                {data?.statistics.videoCount} فيديو
              </h3>
            </div>
            <div className="mt-3">
              <Button className="cursor-pointer rounded-full bg-white text-black hover:text-black hover:bg-white text-[14px]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
          {playlists?.map((video) => (
            <ChannelVideoCard video={video} key={video.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Page;
