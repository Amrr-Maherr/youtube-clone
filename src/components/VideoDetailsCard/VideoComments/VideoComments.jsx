import { EllipsisVertical } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import CommentActions from "../CommentActions/CommentActions";
function VideoComments({ comments }) {
  return (
    <div className="mt-6">
      <h2 className="text-white text-xl font-bold mb-4">Comments</h2>
      {comments && comments.length > 0 ? (
        comments.map((c) => {
          const snippet = c.snippet.topLevelComment.snippet;
          return (
            <div key={c.id} className="flex w-full items-start gap-3 py-3">
              <a href={c.snippet.authorChannelUrl} className="cursor-pointe">
                {snippet.authorProfileImageUrl ? (
                  <img
                    src={snippet.authorProfileImageUrl}
                    alt={snippet.authorDisplayName}
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <Avatar>
                    <AvatarFallback>
                      {snippet.authorDisplayName.slice(0, 1)}
                    </AvatarFallback>
                  </Avatar>
                )}
              </a>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <p className="font-normal text-[#f1f1f1] text-[13px] truncate-1">
                    {snippet.authorDisplayName}
                  </p>
                  <div className="w-[32px] h-[32px] rounded-full hover:bg-[#272727] flex items-center justify-center gap-2">
                    <EllipsisVertical className="text-white cursor-pointer" />
                  </div>
                </div>

                <p className="font-normal text-[#f1f1f1] text-[14px] max-w-[700px]">
                  {snippet.textOriginal}
                </p>
                <CommentActions comment={c} />
                {c.snippet.totalReplyCount > 0 && (
                  <p className="text-sm text-blue-400 cursor-pointer hover:underline">
                    View {c.snippet.totalReplyCount} replies
                  </p>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-300">No comments found.</p>
      )}
    </div>
  );
}

export default VideoComments;
