import Link from "next/link";

function ChannelVideoCard({ video }) {
  return (
    <>
      <Link href={`/VideoDetails/${video.id}`}>
          <div className="w-full flex-shrink-0 flex-col mb-5 cursor-pointer mx-auto">
            <div className="relative pb-[56.25%] overflow-hidden rounded-lg bg-gray-800">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="mt-2">
                  <p className="text-[16px] font-medium text-[#f1f1f1] line-clamp-2">
                    {video.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
    </>
  );
}

export default ChannelVideoCard
