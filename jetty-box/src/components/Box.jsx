import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import magic from "../assets/box-magic.svg";
import slider from "../assets/box-slider.svg";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import { CameraControls } from "@react-three/drei";

export default function Box() {
  const { t } = useTranslation();
  const cameraControlRef = useRef();

  const initialCameraConfig = () => {
    cameraControlRef.current.mouseButtons.wheel = null;
    // cameraControlRef.current.mouseButtons.left = null;
    // cameraControlRef.current.mouseButtons.middle = null;
    cameraControlRef.current.touches.one = null;
    // cameraControlRef.current.touches.two = null;
    // cameraControlRef.current.touches.three = null;
    cameraControlRef.current?.moveTo(0, 23.3, 0);
    cameraControlRef.current?.zoom(3);
  };

  return (
    <div className="md:grid md:grid-cols-2 relative bg-box pt-11 px-4 pb-[89px] bg-cover bg-center h-[666px]">
      <h3 className="col-start-1 md:leading-[131%] md:text-[42px] mb-9 md:mb-[74px] font-['Plateia'] text-left uppercase text-2xl max-w-[300px] md:max-w-[500px] leading-normal">
        {t("tasks-we-solve")}
      </h3>
      <img src={magic} className="hidden md:block col-start-1" />
      <Canvas
        key={Date.now()}
        className="md:hidden"
        onCreated={initialCameraConfig}
      >
        <CameraControls ref={cameraControlRef} />
        <Experience />
      </Canvas>
      <img
        src={slider}
        className="hidden md:block col-start-2 row-start-1 row-end-4"
      />
      <p className="md:hidden box-text left-0 right-0 absolute bottom-[-10px] ">
        {t("Development")}
      </p>
    </div>
  );
}
