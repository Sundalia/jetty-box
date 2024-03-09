import plan from "../assets/how-we-work.svg";

function HowWeWork() {
  return (
    <div className="mt-10 px-4 pb-[56px]">
      <div>
        <h3 className="mt-4 font-['Plateia'] text-left uppercase text-2xl max-w-[300px] leading-normal">
          Как будем работать
        </h3>
        <div className="ml-3 flex mt-8">
          <img
            src={plan}
            alt="Описание изображения"
            className="mr-9 h-[515px]"
          />
          <div className="">
            <p className="text-left">
              <strong>Проведем</strong>
              <br /> Интервью
            </p>
            <p className="text-left mt-10">
              <strong>Составим план </strong>
              <br /> взаимодействия
            </p>
            <p className="text-left mt-10">
              <strong>Соберем команду </strong>
              <br /> По каждому звену будет ответственный человек
            </p>
            <p className="text-left mt-10">
              <strong>Создадим систему </strong>
              <br /> Визуализированная система, в которой будет видны действия
              по каждому направлению
            </p>
            <p className="text-left mt-10">
              <strong>Выведем </strong>
              <br /> в работу
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;
