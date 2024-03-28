import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode } from "swiper/modules";
import { ServiceData } from "./utils/constants.js";

export default function () {
  const { t } = useTranslation();
  return (
    <div className="pt-16 px-4 pb-[89px] overflow-hidden">
      <h3 className="mt-4 mb-9 font-['Plateia'] text-left uppercase text-2xl max-w-[300px] leading-normal">
        {t("if")}
      </h3>
      <Swiper
        breakpoints={{
          375: {
            slidesPerView: 2,
            spaceBetween: 70,
          },
        }}
        freeMode={true}
        modules={[FreeMode]}
        className="gap-2 overflow-visible cursor-pointer"
      >
        {ServiceData().map((item) => (
          <SwiperSlide key={item.id}>
            <div className="selector-shadow flex flex-col gap-6 group relative rounded  text-white px-6 py-8 h-[268px] w-[187px] overflow-hidden ">
              <div
                className=" before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-tl before:from-[#202020] before:to-transparent before:z-[-5] z-10 bg-gradient-to-tl from-white to-black absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="">
                <div className="relative justify-end flex flex-col">
                  <p className="z-50 absolute left-[-12px] bottom-[-225.5px] text-left">
                    {item.content}{" "}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
