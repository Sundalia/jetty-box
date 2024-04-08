import { useState, Fragment } from "react";
import mainbox from "../assets/main-box.svg";
import mainboxShadow from "../assets/main-box-shadow.svg";
import magic from "../assets/hero-magic.svg";
import close from "../assets/close-icon.svg";
import { useTranslation } from "react-i18next";
import { ReactTyped } from "react-typed";
import { Dialog, Transition } from "@headlessui/react";

function Hero() {
  const { t } = useTranslation();
  let [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
    // Disable scrolling on the body when the dialog is open
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    setIsOpen(false);
    // Enable scrolling on the body when the dialog is closed
    document.body.style.overflow = "auto";
  }

  let [isSuccessOpen, setIsSuccessOpen] = useState(false);
  function openSuccessModal() {
    setIsSuccessOpen(true);
    // Disable scrolling on the body when the dialog is open
    document.body.style.overflow = "hidden";
  }
  function closeSuccessModal() {
    setIsSuccessOpen(false);
    // Enable scrolling on the body when the dialog is closed
    document.body.style.overflow = "auto";
  }

  return (
    <div className="relative md:justify-items-start grid-rows-auto mt-10 md:mt-40 px-4 md:px-4 pb-[75px] md:grid md:grid-cols-2">
      <h1 className="md:row-start-1 md:row-end-2 md:col-span-1 md:col-start-1 font-['Plateia'] text-left md:leading-[131%] md:text-[42px] uppercase leading-[123%] text-[26px]">
        {t("comprehensive-solutions")}
      </h1>
      <h3 className="absolute md:text-2xl md:row-start-2 md:col-span-1 md:col-start-1 font-sans leading-4 mt-2 md:mt-7 text-left">
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
        <button onClick={openModal} className="w-[339px]">
          <div className="main-button button-shadow flex items-center justify-center">
            <span>{t("get-audit")}</span>
          </div>
        </button>
      </div>
      <Transition
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        as={Fragment}
      >
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-20 flex items-center justify-center"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <Dialog.Panel className="flex flex-col px-5 pb-5 pt-2.5 max-w-sm rounded-lg bg-[#2c2c2c] z-20">
            <button onClick={closeModal} className="w-9 h-9 -mr-3 p-0 self-end">
              <img src={close} loading="lazy" />
            </button>
            <Dialog.Title>
              Оставьте заявку, что бы мы могли вам перезвоинть
            </Dialog.Title>
            <form className="flex flex-col mt-6 max-w-sm md:max-w-[370px]">
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
              <button
                type="button"
                onClick={openSuccessModal}
                className="mt-5 mb-5 w-full"
              >
                <div className="main-button flex items-center justify-center">
                  <span>{t("send")}</span>
                </div>
              </button>
              <div className="flex items-start gap-5">
                <input
                  type="checkbox"
                  className="checked:bg-[#987642]  checkbox-input mt-[3px] appearance-none min-w-4 h-4 border-[3px] border-[2C2C2B] rounded-sm "
                ></input>
                <p className="mt-0 text-xs text-left">
                  {t("i-confirm")}{" "}
                  <span className="font-bold underline">
                    {t("privacy-policy")}
                  </span>{" "}
                  {t("i-consent")}
                </p>
              </div>
            </form>
          </Dialog.Panel>
        </Dialog>
      </Transition>

      <Transition appear show={isSuccessOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeSuccessModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm md:max-w-[370px] transform overflow-hidden rounded-lg bg-[#2c2c2c] p-8 text-left align-middle shadow-xl transition-all">
                  <div>
                    <p>Спасибо за заявку, наш менеджер свяжется с вами </p>
                  </div>

                  <div>
                    {/* <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeSuccessModal}
                    >
                      Понятно
                    </button> */}

                    <button
                      type="button"
                      onClick={closeSuccessModal}
                      className="mt-6 w-full"
                    >
                      <div className="main-button flex items-center justify-center">
                        <span>{t("Ok")}</span>
                      </div>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default Hero;
