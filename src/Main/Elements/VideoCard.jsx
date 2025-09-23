import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
function VideoCard({ video }) {
  return (
    <Link href={`/VideoDetails/${video.id.videoId}`}>
      <div className="w-full flex-shrink-0 flex-col mb-5 cursor-pointer mx-auto">
        <div className="relative pb-[56.25%] overflow-hidden rounded-lg bg-gray-800">
          <img
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="mt-2">
              <p className="text-[16px] font-medium text-[#f1f1f1] line-clamp-2">
                {video.snippet.title}
              </p>
              {video.snippet.channelTitle && (
                <p className="text-[14px] text-[#aaaaaa] mt-1">
                  {video.snippet.channelTitle}
                </p>
              )}
            </div>
            <div>
              <p className="text-[14px] text-[#aaaaaa] mt-1">
                {Number(video.statistics?.viewCount).toLocaleString()} views
              </p>
            </div>
          </div>
          <div className="hover:bg-[#272727] rounded-full w-[36px] h-[36px] flex items-center justify-center">
            <EllipsisVertical className="text-white" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
