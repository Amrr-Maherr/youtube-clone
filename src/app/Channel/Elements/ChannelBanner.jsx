function ChannelBanner({ Banner }) {
  if (!Banner) return null;
  return (
    <div className="flex items-center justify-center">
      <figure className="w-[1284px] h-[208px] rounded-lg overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={Banner}
          alt="Channel Banner"
        />
      </figure>
    </div>
  );
}

export default ChannelBanner;
