function VideoCard({ video }) {
  return (
    <div className="w-full flex-shrink-0 cursor-pointer mx-auto">
      <div className="relative pb-[56.25%] overflow-hidden rounded-lg bg-gray-800">
        <img
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="mt-2">
        <p className="text-[16px] font-medium text-[#f1f1f1] line-clamp-2">
          {video.snippet.title}
        </p>
        {video.snippet.channelTitle && (
          <p className="text-[14px] text-[#aaaaaa] mt-1">
            {video.snippet.channelTitle}
          </p>
        )}
      </div>
      <div>
        <p className="text-[14px] text-[#aaaaaa] mt-1">
          {Number(video.statistics?.viewCount).toLocaleString()} views
        </p>
      </div>
    </div>
  );
}

export default VideoCard;
