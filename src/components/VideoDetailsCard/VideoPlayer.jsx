function VideoPlayer({ videoId, title }) {
  return (
    <iframe
      className="w-full h-64 sm:h-96 lg:h-[695px] rounded-xl"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

export default VideoPlayer;
