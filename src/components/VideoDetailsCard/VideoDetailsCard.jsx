import VideoPlayer from "./VideoPlayer";
import VideoTitle from "./VideoTitle";
import VideoChannelInfo from "./VideoChannelInfo";
import VideoActions from "./VideoActions";
import CommentField from "./CommentField";
import CommentsCount from "../VideoDetailsCard/CommentsCount/CommentsCount";
import VideoComments from "../VideoDetailsCard/VideoComments/VideoComments"
function VideoDetailsCard({ video, comments }) {
  console.log(comments, "com");
  console.log(video, "video");

  return (
    <div className="flex flex-col gap-6">
      {/* Video Player */}
      <VideoPlayer videoId={video.id} title={video.snippet.title} />

      <div className="flex-1 flex flex-col">
        {/* Title */}
        <VideoTitle title={video.snippet.title} />

        <div className="text-sm text-gray-500 space-y-1 flex items-center justify-between flex-wrap">
          {/* Channel Info */}
          <VideoChannelInfo channelTitle={video.snippet.channelTitle} />

          {/* Actions */}
          <VideoActions
            likeCount={video.statistics.likeCount}
            comments={comments}
            videoId={`https://www.youtube.com/embed/${video.videoId}?controls=1`}
          />
        </div>
        {/* {CommentsCount} */}
        <CommentsCount video={video} />
        <CommentField/>
        {/* Comments */}
        <VideoComments comments={comments} />
      </div>
    </div>
  );
}

export default VideoDetailsCard;
