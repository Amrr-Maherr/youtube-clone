import {
  ThumbsDown,
  ThumbsUp,
  Share2,
  ArrowDownToLine,
  ListPlus,
  EllipsisVertical,
} from "lucide-react";
import ShareButton from "./ShareButton/ShareButton";
function VideoActions({ likeCount, videoId }) {
  return (
    <div className="flex items-center gap-3 text-white mt-3 flex-wrap">
      {/* Like / Dislike */}
      <div className="flex items-center overflow-hidden rounded-full bg-[#303030]">
        <button className="px-4 py-2 hover:bg-[#3f3f3f] cursor-pointe flex items-center gap-2 text-sm">
          <ThumbsUp size={18} />
          <span>{Number(likeCount).toLocaleString()}</span>
        </button>
        <button className="px-4 py-2 hover:bg-[#3f3f3f] cursor-pointe flex items-center gap-2 text-sm border-l border-[#222]">
          <ThumbsDown size={18} />
        </button>
      </div>

      <ShareButton videoId={videoId} />

      {/* Download */}
      <button className="flex items-center cursor-pointe gap-2 px-4 py-2 rounded-full bg-[#303030] hover:bg-[#3f3f3f] text-sm">
        <ArrowDownToLine size={18} />
        <span>Download</span>
      </button>

      {/* Save */}
      <button className="flex !cursor-pointe items-center gap-2 px-4 py-2 rounded-full bg-[#303030] hover:bg-[#3f3f3f] text-sm">
        <ListPlus size={18} />
        <span>Save</span>
      </button>

      {/* More */}
      <button className="p-2 rounded-full bg-[#303030] hover:bg-[#3f3f3f] cursor-pointer">
        <EllipsisVertical size={18} />
      </button>
    </div>
  );
}

export default VideoActions;
