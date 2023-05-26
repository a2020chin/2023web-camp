import MotionIcon from "../component/MotionIcon";
import ProductSection from "../component/ProductSection";

const Pricing = () => {
  return (
    <>
      <div className="container">
        <div className="relative h-[calc(100dvh_-_80px)] mb-40 lg:h-[calc(100vh_-_80px)]">
          <h2 className="text-heading01 font-black py-10 mb-20 md:text-[80px] md:w-auto lg:text-display02">
            用多少，
            <br />
            付多少。
          </h2>
          <p className="text-heading01 font-black w-1/2 ml-auto">
            我們相信，最靈活的取用機制，才能最大化的幫助你業務的推動。
          </p>
          <MotionIcon className="absolute inset-x-0 bottom-0 justify-center md:inset-x-auto md:left-0 " />
        </div>
        <div className="mb-40">
          <h3 className="text-heading03 font-bold mb-20">定價</h3>
          <ul className="grid grid-cols-2 gap-6">
            <li className="px-8 py-5 border border-black-800 rounded-2xl">
              <h4 className="mb-3">琪琪</h4>
              <ol>
                <li></li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
      <ProductSection />
    </>
  );
};

export default Pricing;
