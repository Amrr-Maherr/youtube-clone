import Link from "next/link";
import { MoonLoader } from "react-spinners";
function SearchResult({ data, error, loading }) {
    if (loading) {
        return (
          <>
            <div className="absolute top-10 z-50 !h-fit w-full bg-[#303030]">
                <MoonLoader color="red"/>
            </div>
          </>
        );
    }
  return (
    <div className="absolute top-10 z-50 !h-fit w-full bg-[#303030] rounded-md">
      {data.slice(0, 8).map((ele) => (
        <Link
          href={`/VideoDetails/${ele.id.videoId}`}
          key={ele.id.videoId || ele.id}
          onClick={() => dispatch(clearSearchResults())}
        >
          <div className="flex items-center gap-3 p-4 hover:bg-[#2a2a2a] cursor-pointer transition-colors duration-150">
            <img
              src={ele?.snippet?.thumbnails?.default?.url}
              alt={ele?.snippet?.title}
              className="w-12 h-12 rounded-md object-cover"
            />
            <p className="text-white text-sm line-clamp-1 truncate-1">
              {ele?.snippet?.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SearchResult
