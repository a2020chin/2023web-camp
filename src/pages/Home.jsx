import FlashImg from "@/assets/icons/flashon.png";

import Button from "../component/Button";
import MotionIcon from "../component/MotionIcon";

// const AdvantageCard = ({ children }) => {
//   return (
//     <>
//       <div className="border-[1px] border-solid border-[#525252] rounded-2xl px-10 py-20">
//         {children}
//       </div>
//     </>
//   );
// };

const Home = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <div className="container">
        <div className="relative h-[calc(100vh_-_80px)] mb-40">
          <h2 className="display02 font-black py-10">
            透過
            <br />
            AI 工具王的
            <br />
            強大模型
            <br />
            讓您的業務更聰明
          </h2>
          <Button className="" text="開始使用" onClick={handleClick} />
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
        <div className="relative">
          <div className="absolute w-full h-full bg-black-gradient"></div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          ipsa molestias unde nisi iste facilis, iusto distinctio ab aspernatur
          nam voluptatibus nulla, minima nihil consequuntur obcaecati ipsum
          quisquam, aliquid sapiente.
        </div>
      </div>
    </>
  );
};

export default Home;
