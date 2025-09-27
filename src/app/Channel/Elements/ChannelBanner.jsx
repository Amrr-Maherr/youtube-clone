function ChannelBanner({ src, className }) {
  if (!src) return null;
  return (
    <div className="flex items-center justify-center">
      <figure
        className={`${
          className
            ? className
            : "w-[428] md:w-[1284px] h-[80px] md:h-[208px] rounded-lg overflow-hidden"
        }`}
      >
        <img
          className="object-cover w-full h-full"
          src={src}
          alt="Channel Banner"
        />
      </figure>
    </div>
  );
}

export default ChannelBanner;
