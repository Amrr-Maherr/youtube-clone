import ChannelVideoCard from "../ChannelVideoCard";

function ChannelVideosSection({ videos }) {
  return (
    videos && (
      <section className="mt-8">
        <h2 className="text-white text-[20px] md:text-[24px] font-bold mb-4">
          Channel Videos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {videos?.map((video) => (
            <ChannelVideoCard video={video} key={video.id} />
          ))}
        </div>
      </section>
    )
  );
}

export default ChannelVideosSection;
