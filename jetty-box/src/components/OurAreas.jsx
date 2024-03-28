import { useTranslation } from "react-i18next";
import data from "../assets/areas-data.svg";
import design from "../assets/areas-design.svg";
import events from "../assets/areas-events.svg";
import IT from "../assets/areas-IT.svg";
import logistics from "../assets/areas-logistics.svg";
import processing from "../assets/areas-processing.svg";
import repair from "../assets/areas-repair.svg";
import planet from "../assets/grid-planet.svg";

function OurAreas() {
  const { t } = useTranslation();
  return (
    <div className=" px-4 pb-[56px]">
      <div className="relative overflow-hidden">
        <img
          src={planet}
          style={{ overflowBlock: "hidden" }}
          className="absolute translate-y-[120%] translate-x-[40%]"
        />
        <h3 className="font-['Plateia'] text-left uppercase text-2xl max-w-[300px] leading-normal">
          {t("covering-a-wide")}
        </h3>
        <div className="flex mt-8 justify-center">
          <ul className="grid gap-2 grid-cols-2">
            <li className="bg-[#1E1E1E] leading-5 z-10 w-[168px] h-[172px] gap-4 flex flex-col items-center justify-center border text-center grid-border rounded rounded-s px-3 py-2">
              <img src={events} />
              <p>{t("event-organization")}</p>
            </li>
            <li className="bg-[#1E1E1E] leading-5 z-10 w-[168px] h-[172px] gap-4 flex flex-col items-center justify-center text-center grid-border  rounded rounded-s px-3 py-2">
              <img src={design} />
              <p>{t("design-products")}</p>
            </li>

            <li className="bg-[#1E1E1E] leading-5 z-10 w-[168px] h-[172px] gap-4 flex flex-col items-center justify-center text-center grid-border  rounded rounded-s px-3 py-2">
              <img src={IT} />
              <p>{t("it-services")}</p>
            </li>

            <li className="bg-[#1E1E1E] leading-5 z-10 w-[168px] h-[172px] gap-4 flex flex-col items-center justify-center text-center grid-border  rounded rounded-s px-3 py-2">
              <img src={logistics} />
              <p>{t("logistics")}</p>
            </li>
            <li className="bg-[#1E1E1E] leading-5 z-10 w-[168px] h-[172px] gap-4 flex flex-col items-center justify-center text-center grid-border  rounded rounded-s px-3 py-2">
              <img src={data} />
              <p>{t("data-analysis")}</p>
            </li>
            <li className="bg-[#1E1E1E] leading-5 z-10 w-[168px] h-[172px] gap-4 flex flex-col items-center justify-center text-center grid-border  rounded rounded-s px-3 py-2">
              <img src={processing} />
              <p>{t("recycling-raw-materials")}</p>
            </li>
            <li className="bg-[#1E1E1E] leading-5 z-10 w-[168px] h-[172px] gap-4 flex flex-col items-center justify-center text-center grid-border  rounded rounded-s px-3 py-2">
              <img src={repair} />
              <p>{t("repair-production")}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OurAreas;
