import data from "../assets/areas-data.svg";
import design from "../assets/areas-design.svg";
import events from "../assets/areas-events.svg";
import IT from "../assets/areas-IT.svg";
import logistics from "../assets/areas-logistics.svg";
import processing from "../assets/areas-processing.svg";
import repair from "../assets/areas-repair.svg";

function HowWeWork() {
  return (
    <div className="px-4 pb-[56px]">
      <div>
        <h3 className="font-['Plateia'] text-left uppercase text-2xl max-w-[300px] leading-normal">
          Охватываем широкую нишевую область
        </h3>
        <div className="flex mt-8">
          <ul className="grid gap-2 grid-cols-2">
          <li className="bg-[#1E1E1E] leading-5 w-[168px] h-[172px] gap-4 flex flex-col items-center justify-center border text-center border-[#B7B7B7] border-gradient-to-r from-transparent to-[#545454] rounded rounded-s px-3 py-2">
              <img src={events} />
              <p>Организация мероприятий</p>
            </li>
            <li className="bg-[#1E1E1E] leading-5 w-[168px] h-[172px] gap-4 flex flex-col items-center justify-center border text-center border-[#B7B7B7] border-gradient-to-r from-transparent to-[#545454] rounded rounded-s px-3 py-2">
              <img src={design} />
              <p>Дизайнерские изделия</p>
            </li>

            <li className="bg-[#1E1E1E] leading-5 w-[168px] h-[172px] gap-4 flex flex-col items-center justify-center border text-center border-[#B7B7B7] border-gradient-to-r from-transparent to-[#545454] rounded rounded-s px-3 py-2">
              <img src={IT} />
              <p>IT сервисы</p>
            </li>

            <li className="bg-[#1E1E1E] leading-5 w-[168px] h-[172px] gap-4 flex flex-col items-center justify-center border text-center border-[#B7B7B7] border-gradient-to-r from-transparent to-[#545454] rounded rounded-s px-3 py-2">
              <img src={logistics} />
              <p>Логистика</p>
            </li>
            <li className="bg-[#1E1E1E] leading-5 w-[168px] h-[172px] gap-4 flex flex-col items-center justify-center border text-center border-[#B7B7B7] border-gradient-to-r from-transparent to-[#545454] rounded rounded-s px-3 py-2">
              <img src={data} />
              <p>Анализ данных</p>
            </li>
            <li className="bg-[#1E1E1E] leading-5 w-[168px] h-[172px] gap-4 flex flex-col items-center justify-center border text-center border-[#B7B7B7] border-gradient-to-r from-transparent to-[#545454] rounded rounded-s px-3 py-2">
              <img src={processing} />
              <p>Переработка вторсырья</p>
            </li>
            <li className="bg-[#1E1E1E] leading-5 w-[168px] h-[172px] gap-4 flex flex-col items-center justify-center border text-center border-[#B7B7B7] border-gradient-to-r from-transparent to-[#545454] rounded rounded-s px-3 py-2">
              <img src={repair}  />
              <p>Ремонт и производство продукции</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;
