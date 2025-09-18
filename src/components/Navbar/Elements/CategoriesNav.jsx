"use client";
import Slider from "@/components/Slider/Slider";
import { FetchCategories } from "@/Store/CategoriesSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function CategoriesNav() {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.categories.data.items) || [];
  const error = useSelector((state) => state.categories.error);
  const loading = useSelector((state) => state.categories.loading);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    dispatch(FetchCategories());
  }, [dispatch]);
  if (loading) {
    return <p>loading ...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="flex gap-2 overflow-x-hidden scrollbar-hide px-4 py-3">
      {Data.slice(0, 15).map((ele) => (
        <div
          key={ele.id}
          onClick={() => setSelectedId(ele.id)}
          className={`shrink-0 rounded-[8px] px-4 py-2 text-[14px] cursor-pointer transition ${
            selectedId === ele.id
              ? "bg-white text-black"
              : "bg-[#272727] text-white hover:bg-[#3a3a3a]"
          }`}
        >
          <p className="text-center">{ele.snippet.title}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoriesNav;
