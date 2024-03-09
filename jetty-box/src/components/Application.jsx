function Application() {
  return (
    <div className="mt-10 px-4 pb-[79px]">
      <div>
        <h3 className="mt-4 font-['Plateia'] text-left uppercase text-2xl max-w-[300px] leading-normal">
          Есть огромное количество задач и не знаете с чего начать?
        </h3>
        <p className="text-left w-[345px]">
          Мы сделаем аудит проекта и вы получите рекомендации, оптимальный
          состав команды для достижения поставленной бизнес-задачи
        </p>
      </div>
      <form className="flex flex-col mt-6">
        <div className="flex flex-col gap-[10px]">
          <input
            placeholder="Имя"
            className="pl-5 border-[#B7B7B7] bg-transparent border rounded-[4px] h-[50px]"
          ></input>
          <input
            placeholder="Тел"
            className="pl-5 border-[#B7B7B7] bg-transparent border rounded-[4px] h-[50px]"
          ></input>
          <input
            placeholder="E-mail"
            className="pl-5 border-[#B7B7B7] bg-transparent border rounded-[4px] h-[50px]"
          ></input>
        </div>
        <button
          type="submit"
          className="p-0.5 h-12 rounded-[4px] mt-5 mb-5 w-full bg-gradient-to-r from-gray-400 via-[#7D6137] via-[#7D6137] to-[#7D6137]"
        >
          <div className="back h-full flex bg-[#7D6137] items-center justify-center">
            <span>Отправить</span>
          </div>
        </button>
        <div className="flex items-start gap-5">
          <input
            type="checkbox"
            className="mt-[3px] appearance-none min-w-4 h-4 border-[3px] border-[2C2C2B] rounded-sm "
          ></input>
          <p className="mt-0 text-xs text-left">
            Подтверждаю, что я ознакомлен с{" "}
            <span className="font-bold underline">
              политикой конфиденциальности
            </span>{" "}
            и даю свое согласие на сбор и обработку персональных данных
          </p>
        </div>
      </form>
    </div>
  );
}

export default Application;
