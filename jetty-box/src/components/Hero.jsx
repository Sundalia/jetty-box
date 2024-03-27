import mainbox from "../assets/main-box.svg";
import mainboxShadow from "../assets/main-box-shadow.svg";
import magic from "../assets/hero-magic.svg";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  return (
    <div className="mt-10 px-4 pb-[75px]">
      <h1 className="font-['Plateia'] text-left uppercase leading-[123%] text-[26px]">
        {t("comprehensive-solutions")}
      </h1>
      <h3 className="font-sans font-normal text-base leading-4 mt-2 text-left">
        {t("building-marketing-department")}
      </h3>
      <img src={mainbox} alt="Описание изображения" className="mt-11 m-auto" />
      <img src={mainboxShadow} alt="Описание изображения" className="m-auto" />
      <div className="mt-8 flex items-center justify-center gap-6">
        <img src={magic} />
        <p className="font-gilroy text-xs leading-4 text-left w-[267px]">
          {t("get-system-solution")}
        </p>
      </div>
      <div className="p-0.5 button-shadow h-12 rounded-[4px] mt-9 w-full bg-gradient-to-r from-white via-[#7D6137] via-[#7D6137] to-[#7D6137]">
        <div className="back h-full flex bg-[#7D6137] items-center justify-center">
          <span>{t("get-audit")}</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
