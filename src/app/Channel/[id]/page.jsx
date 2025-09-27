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
import ChannelImage from "../Elements/ChannelImage";
import ChannelBanner from "../Elements/ChannelBanner";
import ChannelTabs from "../Elements/ChannelTabs";
import { FetchPlayLists } from "@/Store/ChannelPlayList";
import PlayListCard from "../Elements/PlayListCard";
import PlayListSection from "../Elements/PlayListSection/PlayListSection";
import ChannelVideosSection from "../Elements/ChannelVideosSection/ChannelVideosSection";

function Page() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.channel.data);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);
  const PlayLists = useSelector((state) => state.playlist.items);
  useEffect(() => {
    if (id)
      dispatch(FetchChannelDetails(id));
      dispatch(FetchPlayLists(id));
  }, [id, dispatch]);
  if (loading) return <Loader />;
  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (!data) return null;

  const { snippet, statistics, brandingSettings } = data;
  const videos = data.videos || [];
  const Banner = data?.brandingSettings?.image?.bannerExternalUrl;
    console.log(PlayLists, "play");
    console.log(id, "id");
  return (
    <>
      <Navbar />
      <section className="container max-w-[1284px] mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <ChannelBanner src={Banner} />
        </div>
        <div className="flex items-center justify-start mt-5 gap-3">
          <div>
            <ChannelImage
              className="md:w-[160px] md:h-[160px] w-[60px] h-[60px] rounded-full overflow-hidden"
              src={data?.snippet?.thumbnails?.high?.url}
              title={data?.snippet?.localized?.title}
            />
          </div>
          <div>
            <h3 className="text-[20px] md:text-[36px] font-[700] text-[#f1f1f1]">
              {data?.snippet?.localized?.title}
            </h3>
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-[14px] md:text-[20px] font-[500] text-[#f1f1f1]">
                {data?.snippet?.customUrl}
              </h3>
              <h3 className="text-[14px] font-[400] text-[#aaaaaa]">
                {data?.statistics?.subscriberCount} مليون مشترك
              </h3>
              <h3 className="text-[14px] font-[400] text-[#aaaaaa]">
                {data?.statistics?.videoCount} فيديو
              </h3>
            </div>
            <div className="mt-3">
              <Button className="cursor-pointer rounded-full bg-white text-black hover:text-black hover:bg-white text-[14px]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <ChannelTabs
          ChannelDescription={data.snippet.localized.description}
          statistics={data.statistics}
        />
        <ChannelVideosSection videos={videos}/>
        <PlayListSection PlayLists={PlayLists} />
      </section>
    </>
  );
}

export default Page;
