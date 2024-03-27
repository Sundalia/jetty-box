import plan from "../assets/how-we-work.svg";
import { useTranslation } from "react-i18next";

function HowWeWork() {
  const { t } = useTranslation();
  return (
    <div className="mt-10 px-4 pb-[56px]">
      <div>
        <h3 className="mt-4 font-['Plateia'] text-left uppercase text-2xl max-w-[300px] leading-normal">
          {t("how-work")}
        </h3>
        <div className="ml-3 flex mt-8">
          <img
            src={plan}
            alt="Описание изображения"
            className="mr-9 h-[515px]"
          />
          <div className="">
            <p className="text-left">
              <strong>{t("conduct")}</strong>
              <br /> {t("interview")}
            </p>
            <p className="text-left mt-10">
              <strong>{t("plan")} </strong>
              <br /> {t("interaction")}
            </p>
            <p className="text-left mt-10">
              <strong>{t("team")} </strong>
              <br /> {t("responsible-person")}
            </p>
            <p className="text-left mt-10">
              <strong>{t("create-system")} </strong>
              <br /> {t("visualized-system")}
            </p>
            <p className="text-left mt-10">
              <strong>{t("implement")} </strong>
              <br /> {t("to-work")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;
