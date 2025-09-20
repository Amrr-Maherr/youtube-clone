import VideoPlayer from "./VideoPlayer";
import VideoTitle from "./VideoTitle";
import VideoChannelInfo from "./VideoChannelInfo";
import VideoActions from "./VideoActions";
import VideoComments from "./VideoComments";

function VideoDetailsCard({ video, comments }) {
  return (
    <div className="flex flex-col gap-6">
      {/* Video Player */}
      <VideoPlayer videoId={video.id} title={video.snippet.title} />

      <div className="flex-1 flex flex-col">
        {/* Title */}
        <VideoTitle title={video.snippet.title} />

        <div className="text-sm text-gray-500 space-y-1 flex items-center justify-between">
          {/* Channel Info */}
          <VideoChannelInfo channelTitle={video.snippet.channelTitle} />

          {/* Actions */}
          <VideoActions likeCount={video.statistics.likeCount} />
        </div>

        {/* Comments */}
        <VideoComments comments={comments} />
      </div>
    </div>
  );
}

export default VideoDetailsCard;
