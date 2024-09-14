import Spline from "@splinetool/react-spline";
import BoxCarousel from "./BoxCarousel.jsx";
import { useTranslation } from "react-i18next";
import box_magic from "../assets/box-magic.svg"


function SlideExpirience() {

    const { t, i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    return (
        <div id="swiper" className="swiper_container">
            <div className="swiper_header_box">
                <h2 className="swiper_header">{t("carousel_title")}</h2>
                <img src={box_magic} className="swiper_box_magic m-5"/>
            </div>
            <BoxCarousel/>
        </div>
    )
}

export default SlideExpirience