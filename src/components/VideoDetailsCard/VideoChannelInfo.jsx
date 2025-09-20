import { Button } from "../ui/button";

function VideoChannelInfo({ channelTitle }) {
  return (
    <div className="flex items-center justify-end gap-5 flex-row-reverse my-2">
      <Button
        variant="default"
        className="bg-white text-black rounded-full text-[14px] font-[500] hover:bg-white cursor-pointer"
      >
        Subscribe
      </Button>
      <p className="text-white text-[18px]">{channelTitle}</p>
    </div>
  );
}

export default VideoChannelInfo;
