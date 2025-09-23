import React from "react";
import { ThumbsDown, ThumbsUp } from "lucide-react";
function CommentActions() {
   return (
     <div className="flex items-center justify-start gap-10 mt-2">
       {/* Replay Text */}
       <div className="text-gray-500 text-xs">
         <p>Replay</p>
       </div>

       {/* Dislike Button */}
       <div className="w-[38px] h-[38px] rounded-full cursor-pointer hover:bg-[#272727] flex items-center justify-center gap-2">
         <ThumbsDown className="text-white w-[22px] h-[22px]" />
       </div>

       {/* Like Button */}
       <div className="w-[38px] h-[38px] rounded-full cursor-pointer hover:bg-[#272727] flex items-center justify-center gap-2">
         <ThumbsUp className="text-white w-[22px] h-[22px]" />
       </div>
     </div>
   );;
}

export default CommentActions;
