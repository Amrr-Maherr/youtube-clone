import VideoPlayer from "./VideoPlayer";
import VideoTitle from "./VideoTitle";
import VideoChannelInfo from "./VideoChannelInfo";
import VideoActions from "./VideoActions";
import CommentField from "./CommentField";
import CommentsCount from "./CommentsCount/CommentsCount";
import VideoComments from "../VideoDetailsCard/VideoComments/VideoComments";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchChannelDetails } from "@/Store/channelSlice";
function VideoDetailsCard({ video, comments }) {
  const dispatch = useDispatch();
  const channelId = video.snippet.channelId;
  useEffect(() => {
      if (channelId) dispatch(FetchChannelDetails(channelId));
    }, [channelId, dispatch]);
  const channeldata = useSelector((state) => state.channel.data);
  return (
    <div className="flex flex-col gap-6">
      {/* Video Player */}
      <VideoPlayer videoId={video.id} title={video.snippet.title} />

      <div className="flex-1 flex flex-col">
        {/* Title */}
        <VideoTitle title={video.snippet.title} />

        <div className="text-sm text-gray-500  flex items-center justify-between flex-wrap">
          {/* Channel Info */}
          <div className="flex items-center justify-center gap-4">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={channeldata?.snippet?.thumbnails?.high?.url}
              alt={video.snippet.channelTitle}
            />
            <VideoChannelInfo
              channelTitle={video.snippet.channelTitle}
              link={video.snippet.channelId}
            />
          </div>

          {/* Actions */}
          <VideoActions
            likeCount={video.statistics.likeCount}
            comments={comments}
            videoId={`https://www.youtube.com/embed/${video.id}?controls=1`}
          />
        </div>
        {/* {CommentsCount} */}
        <CommentsCount video={video} />
        <CommentField />
        {/* Comments */}
        <VideoComments comments={comments} />
      </div>
    </div>
  );
}

export default VideoDetailsCard;
