// Loader.jsx
"use client";
import React from "react";
import { MoonLoader } from "react-spinners";

export default function Loader({ size = 50, color = "#ff1f33" }) {
  return (
    <div className="flex justify-center items-center w-full h-[70dvh]">
      <MoonLoader size={size} color={color} />
    </div>
  );
}
