import React from "react";
import box from "../assets/bg-box.svg";

export default function Box() {
  return (
    <div className="relative bg-box pt-11 px-4 pb-[89px] bg-cover bg-center h-[666px]">
      <h3 className="mb-9 font-['Plateia'] text-left uppercase text-2xl max-w-[300px] leading-normal">
        Какие задачи решаем
      </h3>
      <p className="box-text left-0 right-0 absolute bottom-[-10px] ">
        Разработка
      </p>
    </div>
  );
}
