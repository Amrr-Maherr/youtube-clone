import VideoDetailsCard from "@/components/VideoDetailsCard/VideoDetailsCard";
import VideoCard from "@/Main/Elements/VideoCard";
import { useSelector } from "react-redux";

function VideosList({ video, comments }) {
  const searchResults = useSelector((state) => state.searchVideos.data);
  const mostPopular = useSelector((state) => state.mostPopularVideos.data);
  console.log(comments,"com");
  
  return (
    <>
      <div className="col-span-12 md:col-span-9">
        <VideoDetailsCard video={video} comments={comments} />
      </div>
      <div className="col-span-12 md:col-span-3 space-y-10">
        {mostPopular?.map((video) => (
          <VideoCard video={video} key={video.id} />
        ))}
      </div>
    </>
  );
}

export default VideosList
