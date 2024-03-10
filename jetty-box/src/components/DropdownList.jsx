import React, { useState } from "react";
import classNames from "classnames";
import styles from "./DropdownList.module.css";
import { faq } from "./utils/constants";
import marketing from "../assets/questions-marketing.svg";

export default function DropdownList() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    return setSelected(i);
  };

  return (
    <div className="mt-10 px-4 pb-[89px]">
      <h3 className="mt-4 mb-3 font-['Plateia'] text-left uppercase text-2xl max-w-[300px] leading-normal">
        Мы с этим поможем
      </h3>{" "}
      <ul className={styles.questionsContainer}>
        {faq.map((item, i) => (
          <li
            className={
              selected === i
                ? classNames(styles.questionsItem, styles.questionsItemActive)
                : styles.questionsItem
            }
            key={item.question}
          >
            <button
              className={styles.questionsHeader}
              onClick={() => toggle(i)}
              type="button"
            >
              <div className="flex gap-4 items-center">
                <span className="text-[#838383]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className={styles.questionsQuestion}>{item.question}</p>
              </div>
              <div
                className={
                  selected === i
                    ? classNames(
                        styles.questionsArrow,
                        styles.questionsArrowActive
                      )
                    : styles.questionsArrow
                }
              />
            </button>
            <div
              className={
                selected === i
                  ? classNames(
                      styles.questionsAnswer,
                      styles.questionsAnswerActive
                    )
                  : styles.questionsAnswer
              }
            >
              {selected === i && (
                <img src={marketing} alt="описание изображения"></img>
              )}

              <p
                className={
                  selected === i
                    ? classNames(
                        styles.questionsAnswerText,
                        styles.questionsAnswerTextActive
                      )
                    : styles.questionsAnswer
                }
              >
                {item.answer}
              </p>
              {selected === i && (
                <button
                  type="submit"
                  className="p-0.5 h-12 rounded-[4px] mt-5 mb-5 w-full bg-gradient-to-r from-gray-400 via-[#7D6137] via-[#7D6137] to-[#7D6137]"
                >
                  <div className=" h-full flex bg-[#7D6137] items-center justify-center">
                    <span className="font-medium text-base">
                      Отправить заявку
                    </span>
                  </div>
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
