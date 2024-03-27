import React from "react";
import { useTranslation } from "react-i18next";
import box from "../assets/bg-box.svg";

export default function Box() {
  const { t } = useTranslation();
  return (
    <div className="relative bg-box pt-11 px-4 pb-[89px] bg-cover bg-center h-[666px]">
      <h3 className="mb-9 font-['Plateia'] text-left uppercase text-2xl max-w-[300px] leading-normal">
        {t("tasks-we-solve")}
      </h3>
      <p className="box-text left-0 right-0 absolute bottom-[-10px] ">
        {t("Development")}
      </p>
    </div>
  );
}
