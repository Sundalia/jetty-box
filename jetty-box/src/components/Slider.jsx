import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "./utils/constants.js";

export default function () {
  return (
    <div className="pt-16 px-4 pb-[89px]">
      <Swiper
        breakpoints={{
          375: {
            slidesPerView: 2,
            spaceBetween: 70,
          },
        }}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="gap-2 [overflow:overlay] "
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="image-container flex flex-col border border-[#B7B7B7] gap-6 group relative shadow-lg rounded  text-white px-6 py-8 h-[268px] w-[187px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="image-overlay" />
              <div className="relative justify-end flex flex-col">
                <p className="absolute left-[-12px] bottom-[-225.5px] text-left">
                  {item.content}{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
