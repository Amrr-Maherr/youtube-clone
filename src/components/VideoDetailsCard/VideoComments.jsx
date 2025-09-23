import {
  ThumbsDown,
  ThumbsUp,
  Share2,
  ArrowDownToLine,
  ListPlus,
  EllipsisVertical,
} from "lucide-react";
import CommentActions from "./CommentActions/CommentActions";
function VideoComments({ comments }) {
  return (
    <div className="mt-6">
      <h2 className="text-white text-xl font-bold mb-4">Comments</h2>
      {comments && comments.length > 0 ? (
        comments.map((c) => (
          <div key={c.id} className="flex w-full justify-between items-center">
            <div className="py-3 flex flex-col gap-1">
              <p className="font-normal text-[#f1f1f1] text-[13px]">
                {c.snippet.topLevelComment.snippet.authorDisplayName}
              </p>
              <p className="font-normal text-[#f1f1f1] text-[14px] max-w-[700px]">
                {c.snippet.topLevelComment.snippet.textDisplay}
              </p>
              <CommentActions/>
            </div>
            <div>
              <EllipsisVertical className="text-white" />
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-300">No comments found.</p>
      )}
    </div>
  );
}

export default VideoComments;
