import React, { useState } from "react";
import classNames from "classnames";
import styles from "./DropdownList.module.css";
import { faq } from "./utils/constants";
import { useTranslation } from "react-i18next";

export default function DropdownList() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    return setSelected(i);
  };

  return (
    <div className="px-4 md:pb-[160px] pb-[87px]">
      <h3 className="md:leading-9 md:text-[32px] mb-9 font-['Plateia'] text-left uppercase md:normal-case text-2xl max-w-[300px] md:max-w-full leading-normal">
        {t("we-help")}
      </h3>{" "}
      <ul className={styles.questionsContainer}>
        {faq().map((item, i) => (
          <li
            className={
              selected === i
                ? classNames(styles.questionsItem, styles.questionsItemActive)
                : styles.questionsItem
            }
            key={item.question}
          >
            <div className={styles.questionsHeader} onClick={() => toggle(i)}>
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
            </div>
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
              {/* {selected === i && (
                <div className="h-16 sm:h-[119px] md:h-[154px]">
                  <img
                    loading="lazy"
                    src={item.backgroundImage}
                    alt="описание изображения"
                    className={styles.backgroundImage}
                  ></img>
                </div>
              )} */}

              <div
                className={
                  (selected === i
                    ? classNames(
                        styles.questionsAnswer,
                        styles.questionsAnswerActive
                      )
                    : styles.questionsAnswer,
                  "h-16 sm:h-[119px] md:h-[154px]")
                }
              >
                <img
                  loading="lazy"
                  src={item.backgroundImage}
                  alt="описание изображения"
                  className={styles.backgroundImage}
                ></img>{" "}
              </div>
              <p
                className={
                  (selected === i
                    ? classNames(
                        styles.questionsAnswer,
                        styles.questionsAnswerActive
                      )
                    : styles.questionsAnswer,
                  "mt-5")
                }
              >
                {item.answer}
              </p>

              <button
                className={
                  (selected === i
                    ? classNames(
                        styles.questionsAnswer,
                        styles.questionsAnswerActive
                      )
                    : styles.questionsAnswer,
                  "mt-5 mb-5 w-full")
                }
              >
                <div className="flex items-center justify-center main-button">
                  <span>{t("send-request")}</span>
                </div>
              </button>

              {/* {selected === i && (
                <button type="submit" className="mt-5 mb-5 w-full">
                  <div className="flex items-center justify-center main-button">
                    <span>{t("send-request")}</span>
                  </div>
                </button>
              )} */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
