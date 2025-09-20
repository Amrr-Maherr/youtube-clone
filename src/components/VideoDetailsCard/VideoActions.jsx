import { ThumbsDown, ThumbsUp } from "lucide-react";

function VideoActions({ likeCount }) {
  return (
    <div className="flex items-center justify-center rounded-full">
      <div className="bg-[#303030] p-2 text-white rounded-l-full cursor-pointer">
        <ThumbsDown />
      </div>
      <div className="bg-[#303030] p-2 text-white rounded-r-full flex items-center justify-center cursor-pointer gap-2">
        <p>{Number(likeCount).toLocaleString()}</p>
        <ThumbsUp />
      </div>
    </div>
  );
}

export default VideoActions;
