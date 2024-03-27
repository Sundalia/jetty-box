import { useTranslation } from "react-i18next";
function Application() {
  const { t } = useTranslation();
  return (
    <div className="mt-10 px-4 pb-[79px]">
      <div>
        <h3 className="mt-4 font-['Plateia'] text-left uppercase text-2xl max-w-[300px] leading-normal">
          {t("where-to-start")}
        </h3>
        <p className="text-left w-[345px]">{t("we-audit")}</p>
      </div>
      <form className="flex flex-col mt-6">
        <div className="flex flex-col gap-[10px]">
          <input
            placeholder={t("name")}
            className="pl-5 border-[#B7B7B7] bg-transparent border rounded-[4px] h-[50px]"
          ></input>
          <input
            placeholder={t("tel")}
            className="pl-5 border-[#B7B7B7] bg-transparent border rounded-[4px] h-[50px]"
          ></input>
          <input
            placeholder="E-mail"
            className="pl-5 border-[#B7B7B7] bg-transparent border rounded-[4px] h-[50px]"
          ></input>
        </div>
        <button type="submit" className="mt-5 mb-5 w-full">
          <div className="main-button flex items-center justify-center">
            <span>{t("send")}</span>
          </div>
        </button>
        <div className="flex items-start gap-5">
          <input
            type="checkbox"
            className="mt-[3px] appearance-none min-w-4 h-4 border-[3px] border-[2C2C2B] rounded-sm "
          ></input>
          <p className="mt-0 text-xs text-left">
            {t("i-confirm")}{" "}
            <span className="font-bold underline">{t("privacy-policy")}</span>{" "}
            {t("i-consent")}
          </p>
        </div>
      </form>
    </div>
  );
}

export default Application;
