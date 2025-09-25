import { Button } from "@/components/ui/button";

function ChannelHeader({ snippet, statistics }) {
  return (
    <div className="flex items-center justify-start mt-5 gap-3">
      {/* صورة القناة */}
      <figure className="w-[160px] h-[160px] rounded-full overflow-hidden">
        <img
          className="w-full h-full"
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.localized?.title}
        />
      </figure>

      {/* بيانات القناة */}
      <div>
        <h3 className="text-[36px] font-[700] text-[#f1f1f1]">
          {snippet?.localized?.title}
        </h3>
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-[20px] font-[500] text-[#f1f1f1]">
            {snippet?.customUrl}
          </h3>
          <h3 className="text-[14px] font-[400] text-[#aaaaaa]">
            {statistics?.subscriberCount} مشترك
          </h3>
          <h3 className="text-[14px] font-[400] text-[#aaaaaa]">
            {statistics?.videoCount} فيديو
          </h3>
        </div>

        {/* زر الاشتراك */}
        <div className="mt-3">
          <Button className="cursor-pointer rounded-full bg-white text-black hover:text-black hover:bg-white text-[14px]">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChannelHeader;
