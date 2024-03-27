import React from "react";
import { useTranslation } from "react-i18next";

function Marquee() {
  const { t } = useTranslation();
  return (
    <div class="overflow-x-hidden mt-20">
      <div class="">
        <div class="marquee inline-flex items-center gap-x-6 overflow-hidden whitespace-nowrap py-4 text-5xl font-bold leading-relaxed text-gray-50 justify-center">
          <p className="marquee-text font-[plateia] font-normal text-base leading-17">
            {t("practical-experience")}
          </p>
          <svg
            width="4.000000"
            height="4.000000"
            viewBox="0 0 4 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs />
            <rect
              id="Rectangle 1086"
              width="4.000000"
              height="4.000000"
              fill="#FFFFFF"
              fill-opacity="1.000000"
            />
          </svg>
          <p className="marquee-text font-[plateia] font-normal text-base leading-17">
            {t("presence")}
          </p>
          <svg
            width="4.000000"
            height="4.000000"
            viewBox="0 0 4 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs />
            <rect
              id="Rectangle 1086"
              width="4.000000"
              height="4.000000"
              fill="#FFFFFF"
              fill-opacity="1.000000"
            />
          </svg>
          <p className="marquee-text font-[plateia] font-normal text-base leading-17">
            {t("practical-experience")}
          </p>
          <svg
            width="4.000000"
            height="4.000000"
            viewBox="0 0 4 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs />
            <rect
              id="Rectangle 1086"
              width="4.000000"
              height="4.000000"
              fill="#FFFFFF"
              fill-opacity="1.000000"
            />
          </svg>
          <p className="marquee-text font-[plateia] font-normal text-base leading-17">
            {t("presence")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
