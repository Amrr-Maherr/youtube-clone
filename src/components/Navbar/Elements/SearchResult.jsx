import { clearSearchResults } from "@/Store/searchVideosSlice";
import Link from "next/link";
import { MoonLoader } from "react-spinners";
function SearchResult({ data, loading, searchQuery }) {
  if (loading) {
    return (
      <>
        <div className="absolute top-10 z-50 flex items-center justify-center h-[100px] md:h-[500px] w-full bg-[#303030]">
          <MoonLoader color="red" />
        </div>
      </>
    );
  }
  return (
    <div
      className={`${
        searchQuery ? "absolute" : "hidden"
      } top-10 z-50 w-full bg-[#303030] rounded-md h-[300px] md:h-[500px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800`}
    >
      {data.map((ele) => (
        <Link
          href={`/VideoDetails/${ele.id.videoId}`}
          key={ele.id.videoId || ele.id}
          onClick={() => dispatch(clearSearchResults())}
        >
          <div className="flex items-center gap-3 p-4 hover:bg-[#2a2a2a] cursor-pointer transition-colors duration-150 over">
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
