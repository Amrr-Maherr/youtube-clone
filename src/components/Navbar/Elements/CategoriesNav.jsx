"use client";
import Slider from "@/components/Slider/Slider";
import { FetchCategories } from "@/Store/CategoriesSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function CategoriesNav() {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.categories.data.items) || [];
  const error = useSelector((state) => state.categories.error);
  const loading = useSelector((state) => state.categories.loading);

  useEffect(() => {
    dispatch(FetchCategories());
  }, [dispatch]);
console.log(Data);

  if (loading) {
    return <p>loading ...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="flex items-center gap-2 overflow-x-hidden scrollbar-hide px-4 py-3">
      <Slider
        slidesPerView={12}
        spaceBetween={10}
        showNavigation={true}
        showPagination={false}
      >
        {Data.slice(0, 15).map((ele) => (
          <div
            key={ele.id}
            className="shrink-0 text-white bg-[#272727] rounded-[8px] px-4 py-2 text-[14px] cursor-pointer hover:bg-[#3a3a3a] transition"
          >
            <p className="text-center ">{ele.snippet.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategoriesNav;
