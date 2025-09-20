import { Button } from "../ui/button";
import {
  ThumbsDown,
  ThumbsUp,
  Share2,
  ArrowDownToLine,
  EllipsisVertical,
} from "lucide-react";
import VideoComments from "./VideoComments";

function VideoDetailsCard({ video, comments }) {
  console.log(video, "video");
  console.log(comments, "comments");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex-1">
        <iframe
          className="w-full h-64 sm:h-96 lg:h-[695px] rounded-xl"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.snippet.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex-1 flex flex-col">
        <h1 className="text-[20px] font-[700] mb-2 text-[#f1f1f1]">
          {video.snippet.title}
        </h1>
        <div className="text-sm text-gray-500 space-y-1 flex items-center justify-between">
          <div className="flex items-center justify-end gap-5 flex-row-reverse my-2">
            <Button
              variant="default"
              className="bg-white text-black rounded-full text-[14px] font-[500] hover:bg-white cursor-pointer"
            >
              Subscribe
            </Button>
            <p className="text-white text-[18px]">
              {video.snippet.channelTitle}
            </p>
          </div>
          <div className="flex items-center justify-center rounded-full">
            <div className="bg-[#303030] p-2 text-white rounded-l-full cursor-pointer">
              <ThumbsDown />
            </div>
            <div className="bg-[#303030] p-2 text-white rounded-r-full flex items-center justify-center cursor-pointer gap-2">
              <p>{Number(video.statistics.likeCount).toLocaleString()}</p>
              <ThumbsUp />
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <VideoComments comments={comments} />
      </div>
    </div>
  );
}

export default VideoDetailsCard;
