import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export default function Slider({
  children,
  slidesPerView = 1,
  spaceBetween = 0,
  slidesPerViewMobile = 1,
  className,
  swiperOptions = {},
  modules = [Pagination, Autoplay],
  showNavigation = true,
  showPagination = true,
  autoplay = false,
  loop = false,
}) {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      autoplay={
        autoplay
          ? {
              delay: 3000,
              disableOnInteraction: false,
              ...swiperOptions.autoplay,
            }
          : false
      }
      loop={loop}
      pagination={
        showPagination
          ? { dynamicBullets: true, ...swiperOptions.pagination }
          : false
      }
      navigation={showNavigation ? { ...swiperOptions.navigation } : false}
      breakpoints={{
        340: {
          slidesPerView: slidesPerViewMobile,
          spaceBetween: spaceBetween,
          ...swiperOptions.breakpoints?.[340],
        },
        1024: {
          slidesPerView: slidesPerView,
          spaceBetween: spaceBetween,
          ...swiperOptions.breakpoints?.[1024],
        },
        ...swiperOptions.breakpoints,
      }}
      modules={modules}
      className={`mySwiper ${className || ""}`}
      {...swiperOptions}
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
