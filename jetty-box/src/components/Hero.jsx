import mainbox from "../assets/main-box.svg";
import mainboxShadow from "../assets/main-box-shadow.svg";
import magic from "../assets/hero-magic.svg";
import { useTranslation } from "react-i18next";
import { ReactTyped } from "react-typed";

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative md:justify-items-start grid-rows-auto mt-10 md:mt-40 px-4 md:px-4 pb-[75px] md:grid md:grid-cols-2">
      <h1 className="md:row-start-1 md:row-end-2 md:col-span-1 md:col-start-1 font-['Plateia'] text-left md:leading-[131%] md:text-[42px] uppercase leading-[123%] text-[26px]">
        {t("comprehensive-solutions")}
      </h1>
      <h3 className="absolute md:text-2xl md:row-start-2 md:col-span-1 md:col-start-1 font-sans leading-4 mt-2 md:mt-7 text-left">
        {/* {t("building-marketing-department")} */}
        <ReactTyped
          strings={[
            t("need-department"),
            t("need-optimisation"),
            t("need-channel"),
            t("need-test"),
            t("need-team"),
            t("need-product"),
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </h3>

      <img
        src={mainbox}
        alt="Описание изображения"
        className="md:w-[365px] md:h-[447px] md:col-span-1 md:col-start-2 md:row-end-6  mt-16 md:mt-0 m-auto md:row-start-1"
      />
      <img
        src={mainboxShadow}
        alt="Описание изображения"
        className="md:hidden m-auto "
      />
      <div className="md:row-start-3 md:col-span-1 md:col-start-1  mt-8 md:mt-24 flex items-center justify-center gap-6">
        <img src={magic} />
        <p className="font-gilroy text-xs leading-4 text-left w-[267px]">
          {t("get-system-solution")}
        </p>
      </div>
      <div className="mt-9 md:mt-4 md:col-span-1 md:col-start-1 md:row-start-4">
        <button className="w-[339px]">
          <div className="main-button button-shadow flex items-center justify-center">
            <span>{t("get-audit")}</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Hero;
