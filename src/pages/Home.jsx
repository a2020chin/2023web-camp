// import Button from "../component/Button";
import MotionIcon from "../component/MotionIcon";
import ProductSection from "../component/ProductSection";
import SwiperCard from "../component/SwiperCard";
import { useAnimeParameter } from "../component/Context";

import enterprise1 from "../assets/enterprise1.png";
import enterprise2 from "../assets/enterprise2.png";
import enterprise3 from "../assets/enterprise3.png";
import enterprise4 from "../assets/enterprise4.png";
import enterprise5 from "../assets/enterprise5.png";
import enterprise6 from "../assets/enterprise6.png";
import enterprise7 from "../assets/enterprise7.png";
import enterprise8 from "../assets/enterprise8.png";
import enterprise9 from "../assets/enterprise9.png";
import enterprise10 from "../assets/enterprise11.png";
import enterprise11 from "../assets/enterprise12.png";

import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  MotionConfig,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { useEffect, useRef } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const textItems = ["透過", "AI 工具王的", "強大模型", "讓您的業務更聰明"];
const goodpointCard = [
  {
    icon: "flash_on",
    title: "快速",
    context:
      "我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。",
  },
  {
    icon: "auto_awesome",
    title: "靈活",
    context:
      "我們的服務可以根據您的需求進行靈活調整，同時還可以滿足不同項目和預算的需求。",
  },
  {
    icon: "library_add",
    title: "擴充",
    context: "我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。",
  },
];
const companyImgArr1 = [
  enterprise1,
  enterprise2,
  enterprise3,
  enterprise4,
  enterprise5,
  enterprise6,
  enterprise1,
  enterprise2,
  enterprise3,
  enterprise4,
  enterprise5,
  enterprise6,
  enterprise1,
  enterprise2,
  enterprise3,
  enterprise4,
  enterprise5,
  enterprise6,
];
const companyImgArr2 = [
  enterprise6,
  enterprise7,
  enterprise8,
  enterprise9,
  enterprise10,
  enterprise11,
  enterprise6,
  enterprise7,
  enterprise8,
  enterprise9,
  enterprise10,
  enterprise11,
  enterprise6,
  enterprise7,
  enterprise8,
  enterprise9,
  enterprise10,
  enterprise11,
];
const commentCard = [
  {
    img: avatar3,
    user: "陳小姐",
    userCompany: "ABC科技有限公司",
    description:
      "非常喜歡 AI工具王 提供的 AI 模型租賃服務，使用起來非常方便，而且效果非常好。對於我們公司的業務來說，這個服務非常重要，因為我們需要大量的數據進行分析和預測，AI工具王 提供的 AI 模型能夠幫助我們節省大量時間和成本，實在是太棒了！",
  },
  {
    img: avatar2,
    user: "劉小姐",
    userCompany: "XYZ 醫療器材有限公司",
    description:
      "作為一家醫療器材公司，我們非常關注人工智能技術的應用，而 AI工具王 提供的 AI 模型租賃服務為我們帶來了很大的幫助。我們使用 AI工具王 的模型進行醫學影像分析和預測，這些模型非常精確，能夠幫助我們更好地診斷病情，提高治療效果。感謝 AI工具王 團隊的辛勤工作！",
  },
  {
    img: avatar1,
    user: "黃先生",
    userCompany: "EFG 銀行",
    description:
      "我們銀行一直在尋找能夠幫助我們提高風險控制和客戶服務的解決方案，而 AI工具王 提供的 AI 模型租賃服務正好滿足了我們的需求。我們使用 AI工具王 的模型進行客戶信用評估和詐騙檢測等任務，這些模型非常準確，能夠幫助我們更好地控制風險，提高客戶滿意度。非常感謝 AI工具王 團隊的支持！",
  },
];

function ParallaxImg({ baseVelocity = 100, imgArr, className }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-10, -93.5, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div className={`flex gap-5 ${className}`} style={{ x }}>
      {imgArr.map((item, i) => (
        <img
          key={`imgArr-${item + i}`}
          className="w-40 h-10 object-cover"
          src={item}
          alt={item}
        />
      ))}
    </motion.div>
  );
}

ParallaxImg.propTypes = {
  baseVelocity: PropTypes.number.isRequired,
  imgArr: PropTypes.array.isRequired,
  className: PropTypes.string,
};

const Button = ({ children, className }) => {
  return (
    <Link
      className={`inline-block border-[1px] rounded-2xl py-5 ${className}`}
      to="/pricing"
    >
      <p className="flex font-black text-heading06 leading-[1.2]">{children}</p>
    </Link>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

const Home = () => {
  const { showHeader } = useAnimeParameter();

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <>
      <MotionConfig viewport={{ once: true }}>
        <div className="container">
          <div className="relative h-[calc(100dvh_-_80px)] mb-40 lg:h-[calc(100vh_-_80px)] overflow-hidden">
            <h2 className="text-heading01 w-3/4 font-black py-10 md:text-[80px] md:w-auto lg:text-display02">
              {textItems.map((style, index) => (
                <motion.span
                  className="block"
                  key={style}
                  initial={{ y: "100vh" }}
                  animate={
                    showHeader && {
                      y: "0",
                      transition: {
                        type: "spring",
                        damping: "16",
                        delay: index * 0.3,
                      },
                    }
                  }
                >
                  {style}
                </motion.span>
              ))}
            </h2>
            <motion.div
              initial={{ y: "100vh" }}
              animate={
                showHeader && {
                  y: "0",
                  transition: {
                    type: "spring",
                    damping: "16",
                    delay: 1.2,
                  },
                }
              }
            >
              <Button className="px-10">開始使用</Button>
            </motion.div>

            <MotionIcon className="absolute inset-x-0 bottom-0 justify-center md:inset-x-auto md:right-0 " />
          </div>

          <div className="grid grid-cols-1 gap-6 mb-12 lg:grid-cols-3 lg:mb-20">
            <motion.h3
              className="text-heading06 font-bold black md:text-heading03"
              initial={{
                x: -100,
                y: -100,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  duration: 0.3,
                },
              }}
            >
              我們的服務
            </motion.h3>
            <p className="col-span-2 text-heading03 font-bold md:text-heading01">
              <motion.span
                className="inline-block"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    type: "spring",
                    duration: 0.5,
                  },
                }}
              >
                我們相信透過 AI 技術，
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.6,
                    type: "spring",
                    duration: 0.5,
                  },
                }}
              >
                包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。
              </motion.span>
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 mb-[120px] lg:grid-cols-3 lg:gap-6 lg:mb-40">
            {goodpointCard.map(({ icon, title, context }, i) => (
              <motion.div
                key={icon}
                className="border-[1px] border-solid border-black-800 rounded-2xl px-10 py-20"
                initial={{
                  perspective: "2500px",
                  rotateY: -90,
                  opacity: 0,
                }}
                whileInView={{
                  rotateY: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    type: "tween",
                    delay: 1 + 0.3 * i,
                  },
                }}
              >
                <div className="w-20 h-20 mb-5">
                  <span className="material-symbols-outlined text-[80px]">
                    {icon}
                  </span>
                </div>
                <h4 className="text-heading03 font-black mb-5">{title}</h4>
                <p className="text-black-200">{context}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-heading06 font-black mb-6 md:text-heading03 md:mb-20">
            來自合作夥伴
          </h3>
          <div className="relative overflow-hidden mb-12 md:mb-40">
            <div className="absolute w-full h-full bg-black-gradient z-10"></div>
            <ParallaxImg
              className="mb-3 md:mb-5"
              baseVelocity={-5}
              imgArr={companyImgArr1}
            ></ParallaxImg>
            <ParallaxImg baseVelocity={5} imgArr={companyImgArr2}></ParallaxImg>
          </div>
          <div className="mb-[120px] lg:mb-40">
            <SwiperCard comment={commentCard} />
          </div>
        </div>

        <ProductSection className="mb-10 md:mb-20" />

        <div className="container">
          <div className="flex flex-col items-center py-[120px] px-12 mb-10 md:mb-20 md:py-auto">
            <motion.h4
              className="text-heading03 font-black text-center mb-8 md:mb-10 md:text-heading01"
              initial={{
                opacity: 0,
                scale: 0.1,
                rotate: 90,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                type: "spring",
                delay: 0.5,
              }}
            >
              現在就來建立
              <br className="md:hidden" />
              屬於你的服務吧
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{
                opacity: 1,
                x: [0, 20, -10, 10, -5, 0],
                transition: {
                  delay: 1,
                },
              }}
            >
              <Button className="pl-10 pr-8">
                開始使用
                <span className="ml-3 material-symbols-outlined">
                  north_east
                </span>
              </Button>
            </motion.div>
          </div>
        </div>
      </MotionConfig>
    </>
  );
};

export default Home;
