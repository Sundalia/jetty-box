function HowWeWork() {
  return (
    <div className="mt-10 px-4 pb-[56px]">
      <div>
        <h3 className="mt-4 font-['Plateia'] text-left uppercase text-2xl max-w-[300px] leading-normal">
          Охватываем широкую нишивую область
        </h3>
        <div className="flex mt-8">
          <ul className="flex flex-wrap gap-x-4 gap-y-3">
            <li className="flex items-center justify-center border text-center border-white rounded rounded-s px-3 py-2">
              <p>Организация мероприятий</p>
            </li>
            <li className="flex items-center justify-center border text-center border-white rounded rounded-s px-3 py-2">
              <p>IT сервисы</p>
            </li>
            <li className="flex items-center justify-center border text-center border-white rounded rounded-s px-3 py-2">
              <p>Дизайнерские изделия</p>
            </li>
          </ul>
        </div>
        <div className="flex mt-10 ml-5">
          <ul className="flex flex-col gap-y-5">
            <li className="text-left">
              <p>Логистика</p>
            </li>
            <li className="text-left">
              <p>Анализ данных</p>
            </li>
            <li className="text-left">
              <p>Переработка вторсырья</p>
            </li>
            <li className="text-left">
              <p>Ремонт и производство продукции</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;
