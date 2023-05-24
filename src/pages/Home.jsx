import Button from "../component/Button";
import MotionIcon from "../component/MotionIcon";
import ProductSection from "../component/ProductSection";

import enterprise1 from "../assets/enterprise1.png";
import enterprise2 from "../assets/enterprise2.png";
import enterprise3 from "../assets/enterprise3.png";
import enterprise4 from "../assets/enterprise4.png";
import enterprise5 from "../assets/enterprise5.png";
import enterprise6 from "../assets/enterprise6.png";
import enterprise7 from "../assets/enterprise7.png";
import enterprise8 from "../assets/enterprise8.png";
import enterprise9 from "../assets/enterprise9.png";
import enterprise11 from "../assets/enterprise11.png";
import enterprise12 from "../assets/enterprise12.png";

import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";

import { useTransition, animated, config } from "@react-spring/web";

const textItems = ["透過", "AI 工具王的", "強大模型", "讓您的業務更聰明"];

const Home = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  const transitions = useTransition(textItems, {
    from: { opacity: 0, transform: "translateY(100vh)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    config: config.slow,
    trail: 300,
  });

  return (
    <>
      <div className="container">
        <div className="relative h-[calc(100vh_-_80px)] mb-40">
          <div className="text-heading01 w-3/4 font-black py-10 md:text-display03 md:w-auto lg:text-display02">
            {transitions((style, item) => (
              <animated.h2 style={style}>{item}</animated.h2>
            ))}
          </div>
          {transitions((style, item, t, i) => (
            <animated.div style={style} className="mt-4">
              {i === textItems.length - 1 && (
                <Button className="px-10" onClick={handleClick}>
                  開始使用
                </Button>
              )}
            </animated.div>
          ))}
          <MotionIcon className="absolute bottom-0 right-0" />
        </div>

        <div className="grid grid-cols-3 gap-6 mb-20">
          <h3 className="heading03 font-bold black">我們的服務</h3>
          <p className="col-span-2 heading01 font-bold">
            我們相信透過 AI 技術，
            <br />
            包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-40">
          <div className="border-[1px] border-solid border-black-800 rounded-2xl px-10 py-20">
            <div className="w-20 h-20 mb-5">
              <span className="material-symbols-outlined text-[80px]">
                flash_on
              </span>
            </div>
            <h4 className="heading03 font-black mb-5">快速</h4>
            <p className="text-black-200">
              我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。
            </p>
          </div>
          <div className="border-[1px] border-solid border-black-800 rounded-2xl px-10 py-20">
            <div className="w-20 h-20 mb-5">
              <span className="material-symbols-outlined text-[80px]">
                auto_awesome
              </span>
            </div>
            <h4 className="heading03 font-black mb-5">靈活</h4>
            <p className="text-black-200">
              我們的服務可以根據您的需求進行靈活調整，同時還可以滿足不同項目和預算的需求。
            </p>
          </div>
          <div className="border-[1px] border-solid border-black-800 rounded-2xl px-10 py-20">
            <div className="w-20 h-20 mb-5">
              <span className="material-symbols-outlined text-[80px]">
                library_add
              </span>
            </div>
            <h4 className="heading03 font-black mb-5">擴充</h4>
            <p className="text-black-200">
              我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。
            </p>
          </div>
        </div>

        <h3 className="heading03 font-black mb-20">來自合作夥伴</h3>
        <div className="relative mb-40">
          <div className="absolute w-full h-full bg-black-gradient z-50"></div>
          <div className="flex gap-5 overflow-hidden mb-5">
            <img
              className="w-40 h-10 object-cover"
              src={enterprise1}
              alt="enterprise1"
            />
            <img
              className="w-40 h-10 object-cover"
              src={enterprise2}
              alt="enterprise2"
            />
            <img
              className="w-40 h-10 object-cover"
              src={enterprise3}
              alt="enterprise3"
            />
            <img
              className="w-40 h-10 object-cover"
              src={enterprise4}
              alt="enterprise4"
            />
            <img
              className="w-40 h-10 object-cover"
              src={enterprise5}
              alt="enterprise5"
            />
            <img
              className="w-40 h-10 object-cover"
              src={enterprise6}
              alt="enterprise6"
            />
            <img
              className="w-40 h-10 object-cover"
              src={enterprise1}
              alt="enterprise7"
            />
            <img
              className="w-40 h-10 object-cover"
              src={enterprise2}
              alt="enterprise8"
            />
            {/* <img className="w-40 h-10 object-cover" src={enterprise9} alt="enterprise9" /> */}
          </div>
          <div className="flex gap-5 overflow-hidden">
            <img
              className="w-40 h-10 object-cover"
              src={enterprise6}
              alt="enterprise3"
            />
            <img
              className="w-40 h-10 object-cover"
              src={enterprise7}
              alt="enterprise4"
            />
            <img
              className="w-40 h-10 object-cover"
              src={enterprise8}
              alt="enterprise5"
            />
            <img
              className="w-40 h-10 object-cover"
              src={enterprise9}
              alt="enterprise6"
            />
            <img
              className="w-40 h-10 object-cover"
              src={enterprise11}
              alt="enterprise7"
            />
            <img
              className="w-40 h-10 object-cover"
              src={enterprise12}
              alt="enterprise8"
            />
            <img
              className="w-40 h-10 object-cover"
              src={enterprise6}
              alt="enterprise1"
            />
            <img
              className="w-40 h-10 object-cover"
              src={enterprise7}
              alt="enterprise2"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-40">
          <div className="p-10 bg-black-0/[0.08] rounded-2xl flex flex-col gap-5">
            <div className="flex gap-[5px]">
              <span className="material-symbols-outlined text-base">star</span>
              <span className="material-symbols-outlined text-base">star</span>
              <span className="material-symbols-outlined text-base">star</span>
              <span className="material-symbols-outlined text-base">star</span>
              <span className="material-symbols-outlined text-base">star</span>
            </div>
            <p className="flex-1 text-black-400 pb-10">
              非常喜歡 AI工具王 提供的 AI
              模型租賃服務，使用起來非常方便，而且效果非常好。對於我們公司的業務來說，這個服務非常重要，因為我們需要大量的數據進行分析和預測，AI工具王
              提供的 AI 模型能夠幫助我們節省大量時間和成本，實在是太棒了！
            </p>
            <div className="flex gap-4">
              <img src={avatar3} alt="avatar3" />
              <div className="flex flex-col justify-between">
                <p className="font-bold">陳小姐</p>
                <p className="text-sm">ABC科技有限公司</p>
              </div>
            </div>
          </div>
          <div className="p-10 bg-black-0/[0.08] rounded-2xl flex flex-col gap-5">
            <div className="flex gap-[5px]">
              <span className="material-symbols-outlined text-base">star</span>
              <span className="material-symbols-outlined text-base">star</span>
              <span className="material-symbols-outlined text-base">star</span>
              <span className="material-symbols-outlined text-base">star</span>
              <span className="material-symbols-outlined text-base">star</span>
            </div>
            <p className="flex-1 text-black-400 pb-10">
              作為一家醫療器材公司，我們非常關注人工智能技術的應用，而 AI工具王
              提供的 AI 模型租賃服務為我們帶來了很大的幫助。我們使用 AI工具王
              的模型進行醫學影像分析和預測，這些模型非常精確，能夠幫助我們更好地診斷病情，提高治療效果。感謝
              AI工具王 團隊的辛勤工作！
            </p>
            <div className="flex gap-4">
              <img src={avatar1} alt="avatar1" />
              <div className="flex flex-col justify-between">
                <p className="font-bold">劉小姐</p>
                <p className="text-sm">XYZ 醫療器材有限公司</p>
              </div>
            </div>
          </div>
          <div className="p-10 bg-black-0/[0.08] rounded-2xl flex flex-col gap-5">
            <div className="flex gap-[5px]">
              <span className="material-symbols-outlined text-base">star</span>
              <span className="material-symbols-outlined text-base">star</span>
              <span className="material-symbols-outlined text-base">star</span>
              <span className="material-symbols-outlined text-base">star</span>
              <span className="material-symbols-outlined text-base">star</span>
            </div>
            <p className="flex-1 text-black-400 pb-10">
              我們銀行一直在尋找能夠幫助我們提高風險控制和客戶服務的解決方案，而
              AI工具王 提供的 AI 模型租賃服務正好滿足了我們的需求。我們使用
              AI工具王
              的模型進行客戶信用評估和詐騙檢測等任務，這些模型非常準確，能夠幫助我們更好地控制風險，提高客戶滿意度。非常感謝
              AI工具王 團隊的支持！
            </p>
            <div className="flex gap-4">
              <img src={avatar2} alt="avatar2" />
              <div className="flex flex-col justify-between">
                <p className="font-bold">黃先生</p>
                <p className="text-sm">EFG 銀行</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductSection />

      <div className="container">
        <div className="flex flex-col items-center mb-20">
          <div className="heading01 font-black text-center mb-20">
            現在就來建立屬於你的服務吧
          </div>
          <Button className="pl-10 pr-8" onClick={handleClick}>
            開始使用
            <span className="ml-3 material-symbols-outlined">north_east</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
