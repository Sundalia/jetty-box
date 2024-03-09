import telegram from "../assets/tg-icon.svg";
import vkontakte from "../assets/vk-icon.svg";
import instagram from "../assets/instagram-icon.svg";
import youtube from "../assets/youtube-icon.svg";

function Footer() {
  return (
    <div className="mt-10 px-4 pb-[127px]">
      <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
      <h3 className="mt-4 font-['Plateia'] text-left uppercase text-xl">
        Logo
      </h3>
      <p className="font-['Proxima Nova'] font-light text-base mt-6 text-left">
        ИП Дедюгин А.А
      </p>
      <button className="bg-white mt-4 h-[26px] flex items-center w-[128px] justify-center rounded rounded-s">
        <img src={telegram} alt="Описание изображения" className="" />
      </button>

      <div className="flex-row flex mt-[14px] gap-[10px]">
        <button className="bg-white h-[26px] w-[26px] flex items-center justify-center rounded rounded-s">
          <img src={instagram} alt="Описание изображения" />
        </button>

        <button className="bg-white h-[26px] flex w-[26px] items-center justify-center rounded rounded-s">
          <img src={vkontakte} alt="Описание изображения" />
        </button>
        <button className="bg-white h-[26px] flex items-center w-[26px] justify-center rounded rounded-s">
          <img src={youtube} alt="Описание изображения" />
        </button>
      </div>
    </div>
  );
}

export default Footer;
