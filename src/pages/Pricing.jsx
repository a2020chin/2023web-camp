import MotionIcon from "../component/MotionIcon";
import ProductSection from "../component/ProductSection";

import { useEffect, useState } from "react";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import { useFilterProduct } from "../component/Context";

const pricingCard = [
  {
    author: "琪琪",
    goodpoint: ["初級", "速度最快"],
    price: 5,
  },
  {
    author: "昊昊",
    goodpoint: ["中級"],
    price: 5,
  },
  {
    author: "卡卡",
    goodpoint: ["高級"],
    price: 5,
  },
  {
    author: "杰杰",
    goodpoint: ["最高級", "資訊最完善"],
    price: 5,
  },
];

const usageRules = [
  {
    title: "守法",
    content: "請遵守相關的法規和政策，不得進行任何違法違規的活動。",
  },
  {
    title: "資訊安全",
    content: "請務必保護好自己的帳號和密碼，不得將其透露給他人。",
  },
  {
    title: "守密",
    content: "需對使用過程中產生的數據負責，不得擅自泄露數據。",
  },
];

const fqa = [
  {
    question: "如何選擇適合的 AI 模型？",
    answer:
      "選擇適合的 AI 模型需要考慮您的應用場景、需要解決的問題、可用的資源以及預算等因素。可以通過對比不同模型的性能、準確率、速度等指標，以及與其他用戶的評價與反饋，來選擇最適合的模型。",
  },
  {
    question: "租用模型的費用是如何計算的？",
    answer:
      "租用模型的費用通常會根據模型的性能和使用時間等因素進行計算。具體而言，模型的性能可以根據其精度、速度、暫用資源等指標來評估；而使用時間可以根據租用時間的長短來計算，通常會按小時、天或月來計算。綜合考慮這些因素，系統會自動算出對應的租用費用。",
  },
  {
    question: "如何進行付款？",
    answer:
      "付款方式可以通過網站上提供的宴上支付平台進行支付。具體而言，您可以選擇信用卡、銀行轉帳電子錢包等不同的支付方式進行支付。在支付前，您需要先登錄網站並選擇適合的租用方案，系統會自動計算出對應的租用欸用和支付金額，然後您可以選擇適合的支付方式進行支付。完成支付後，系統會自動向您提供相應的服務。",
  },
  {
    question: "租用模型的期限是多久？",
    answer:
      "租用模型的期限可以根據您的需求進行設置，通常可以選擇幾個小時、幾天或幾個月等不同的時間段。",
  },
  {
    question: "如果在使用的過程中遇到問題，應該怎麼處理？",
    answer:
      "如果在使用過程中遇到問題，您可以聯繫惡扶或技術支持人員進行諮詢或報告問題。您也可以。您也可以通過網站上的幫助中心或社區論壇尋找相關的解決方案和回答。",
  },
];
const bannerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const bannerH2Variants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

const pricingCardVariants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.4,
    },
  },
};
const pricingCardLiVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
};
const usageRulesVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const Pricing = () => {
  const { showHeader } = useFilterProduct();
  const [showFQA, setShowFQA] = useState(null);
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <MotionConfig viewport={{ once: true }}>
        <div className="container">
          <div className="relative h-[calc(100dvh_-_80px)] mb-[120px] lg:h-[calc(100vh_-_80px)] lg:mb-40">
            <motion.h2
              variants={bannerVariants}
              initial="initial"
              animate={showHeader && "animate"}
              className="text-heading01 font-black py-10 mb-20 md:text-[80px] md:w-auto lg:text-display02"
            >
              <motion.span className="inline-block" variants={bannerH2Variants}>
                用多少，
              </motion.span>
              <br />
              <motion.span className="inline-block" variants={bannerH2Variants}>
                付多少。
              </motion.span>
            </motion.h2>
            <motion.p className="text-heading04 font-black w-2/3 ml-auto lg:w-1/2 md:text-heading01">
              {"我們相信，最靈活的取用機制，才能最大化的幫助你業務的推動。"
                .split("")
                .map((item, index) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={
                      showHeader && {
                        opacity: 1,
                        transition: { delay: 0.8 + 0.05 * index },
                      }
                    }
                    key={`banner-${index}`}
                  >
                    {item}
                  </motion.span>
                ))}
            </motion.p>
            <MotionIcon className="absolute inset-x-0 bottom-0 justify-center md:inset-x-auto md:left-0 " />
          </div>
          <div className="mb-[120px] md:mb-40">
            <h3 className="text-heading06 font-bold mb-6 md:mb-20 md:text-heading03">
              定價
            </h3>
            <motion.ul
              variants={pricingCardVariants}
              initial="initial"
              whileInView="animate"
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              {pricingCard.map(({ author, goodpoint, price }, i) => (
                <motion.li
                  variants={pricingCardLiVariants}
                  key={`pricingCard-${i}`}
                  className="flex flex-col h-60 pt-5 border border-black-800 rounded-2xl duration-300 hover:border-white md:h-80"
                  layout
                >
                  <div className="flex-1 px-8 border-b border-black-800">
                    <h4 className="text-heading03 font-black mb-3">{author}</h4>
                    <ul className="list-disc list-inside">
                      {goodpoint.map((item, index) => (
                        <li key={`${author}-${item}-${index}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between px-5 py-5 md:px-8">
                    <p className="text-heading06 text-white font-black">
                      NT${price}
                      <span className="text-black-600 font-normal">
                        ／1k tokens
                      </span>
                    </p>
                    <button
                      type="button"
                      className="flex items-center font-bold"
                    >
                      開始使用
                      <span className="ml-3 font-normal text-base material-symbols-outlined">
                        north_east
                      </span>
                    </button>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className="grid grid-cols-1 gap-12 mb-[120px] lg:grid-cols-3 lg:mb-40 lg:gap-6">
            <h3 className="text-heading06 font-bold md:text-heading03">
              使用規範
            </h3>
            <motion.div
              variants={pricingCardVariants}
              initial="initial"
              whileInView="animate"
              className="col-span-1 flex flex-col gap-y-6 md:col-span-2 md:gap-y-10"
            >
              {usageRules.map(({ title, content }) => (
                <motion.div
                  variants={usageRulesVariants}
                  key={title}
                  className="border-b border-black-800"
                >
                  <h4 className="text-heading03 font-bold mb-6 lg:text-heading01">
                    {title}
                  </h4>
                  <motion.p
                    variants={usageRulesVariants}
                    className="text-base mb-10 lg:text-heading03"
                  >
                    {content}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <ProductSection className="mb-[120px] md:mb-40" />
        <div className="container">
          <div className="grid grid-cols-1 gap-6 mb-12 lg:grid-cols-3 lg:mb-40">
            <h3 className="text-heading06 font-bold md:text-heading03">
              常見問題
            </h3>
            <ul className="col-span-1 flex flex-col gap-y-4 lg:col-span-2 ">
              {fqa.map(({ question, answer }) => (
                <li key={question}>
                  <motion.button
                    type="button"
                    className="p-5 border border-black-800 rounded-2xl md:px-10 w-full"
                    onClick={() => {
                      setShowFQA((pre) => (pre === question ? null : question));
                    }}
                  >
                    <h4 className="flex items-center text-heading06 font-bold">
                      <span className="mr-5 material-symbols-outlined">
                        {showFQA === question ? "remove" : "add"}
                      </span>
                      {question}
                    </h4>
                    <AnimatePresence>
                      {showFQA === question && (
                        <motion.p
                          initial={{
                            opacity: 0,
                            height: 0,
                            margin: "0",
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                            margin: "16px 0 0 44px",
                          }}
                          exit={{ opacity: 0, height: 0, margin: "0" }}
                          className="text-start "
                        >
                          {answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MotionConfig>
    </>
  );
};

export default Pricing;
