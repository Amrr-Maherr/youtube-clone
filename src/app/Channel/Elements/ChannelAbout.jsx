function ChannelAbout({ snippet }) {
  if (!snippet?.description) return null;

  return (
    <div className="mt-8">
      <h3 className="text-[20px] font-[600] text-[#f1f1f1] mb-2">About</h3>
      <p className="text-[14px] text-[#aaaaaa] leading-relaxed whitespace-pre-line">
        {snippet.description}
      </p>
    </div>
  );
}

export default ChannelAbout;
