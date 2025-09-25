import ChannelVideoCard from "../Elements/ChannelVideoCard";

function ChannelVideos({ videos }) {
  if (!videos?.length) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
      {videos.map((video) => (
        <ChannelVideoCard video={video} key={video.id} />
      ))}
    </div>
  );
}

export default ChannelVideos;
