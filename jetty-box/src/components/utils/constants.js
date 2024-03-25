import income from "../../assets/slide-income.svg";
import marketing from "../../assets/slide-marketing.svg";
import processes from "../../assets/slide-processes.svg";
import product from "../../assets/slide-product.svg";
import team from "../../assets/slide-team.svg";
import testing from "../../assets/slide-testing.svg";

import questionsAnalytics from "../../assets/questions-analytics.svg";
import questionsMarketing from "../../assets/questions-marketing.svg";
import questionsOutstaffing from "../../assets/questions-outstaffing.svg";
import questionsProduct from "../../assets/questions-product.svg";
import questionsResearch from "../../assets/questions-research.svg";

export const ServiceData = [
  {
    content: "Вы строите маркетинговый отдел",
    backgroundImage: marketing,
  },
  {
    content: "Вам нужно понимать какую прибыль приносит каждый рекламный канал",
    backgroundImage: income,
  },
  {
    content: "Вам требуется усилить или обучить существующую команду",
    backgroundImage: processes,
  },
  {
    content: "Вам нужно создать продукт с 0 или доработать текущий продукт",
    backgroundImage: product,
  },
  {
    content:
      "Вам нужна оптимизация процессов внутри отдела Продаж и отдела Маркетинга",
    backgroundImage: testing,
  },
  {
    content: "Вам нужно затестировать гипотезу",
    backgroundImage: team,
  },
];

export const faq = [
  {
    question: "Создание маркетингового отдела под ключ",
    answer: "Соберем маркетинговый отдел с 0",
    backgroundImage: questionsMarketing,
  },
  {
    question: "Исследование",
    answer: "Проанализируем работу отдела и выявим проблемные зоны",
    backgroundImage: questionsResearch,
  },
  {
    question: "Создание и запуск продукта",
    answer: "Создадим и запустим ваш продукт, учитывая ваши цели и бюджет",
    backgroundImage: questionsProduct,
  },
  {
    question: "Аутстафинг",
    answer: "Подберем нужный персонал под ваши задачи",
    backgroundImage: questionsOutstaffing,
  },
  {
    question: "Реклама и аналтика",
    answer:
      "Создание комплекса маркетинговых систем и внедрение сквозной аналитики под ваш продукт",
    backgroundImage: questionsAnalytics,
  },
];
