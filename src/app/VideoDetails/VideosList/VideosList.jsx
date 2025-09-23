import VideoDetailsCard from "@/components/VideoDetailsCard/VideoDetailsCard";
import VideoCard from "@/Main/Elements/VideoCard";

function VideosList({ video, comments }) {
  return (
    <>
      <div className="col-span-12 md:col-span-9">
        <VideoDetailsCard video={video} comments={comments} />
      </div>
      <div className="col-span-12 md:col-span-3 space-y-10">
        {searchResults.map((video) => (
          <VideoCard video={video} key={video.id.videoId} />
        ))}
      </div>
    </>
  );
}

export default VideosList
