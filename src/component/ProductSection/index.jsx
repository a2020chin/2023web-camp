const ProductSection = () => {
  return (
    <>
      <div className="bg-black-0 rounded-[160px] w-full py-40">
        <div className="container">
          <h2 className="display03 text-black-1000 font-black text-center mb-20">
            這些超酷的應用，都來自 AI工具王
          </h2>
          <label class="relative block mb-6">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-10">
              <svg class="h-6 w-6 fill-black-600" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <input
              class="placeholder:text-black-600 text-black-1000 block bg-black-200 w-full border border-slate-300 rounded-2xl py-5 pl-[76px] pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="輸入關鍵字搜尋"
              type="text"
              name="search"
            />
          </label>
          <ul className="grid grid-cols-1 mb-10 md:grid-cols-2  lg:grid-cols-3 gap-6">
            <li className="group flex flex-col rounded-2xl border-[1px] border-solid border-black-200 overflow-hidden cursor-pointer text-black-1000">
              <div className="overflow-hidden">
                <img
                  className="w-full object-cover duration-500 group-hover:scale-150"
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool1.png?raw=true"
                  alt="tool1"
                />
              </div>
              <div className="flex-1 px-8 py-5 border-b-[1px] border-solid border-black-200">
                <h3 className="font-black text-xl leading-6 mb-3">
                  Chatbot Builder
                </h3>
                <p className="text-sm leading-[21px] text-black-800">
                  建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。
                </p>
              </div>
              <div className="flex justify-between items-center px-8 py-5 border-b-[1px] border-solid border-black-200">
                <p className="font-bold">AI 模型</p>
                <p>卡卡</p>
              </div>
              <div className="flex justify-between items-center px-8 py-5">
                <p>#聊天</p>
                <a href="#" className="w-[18px] h-[18px]">
                  <img
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                    alt="share"
                  />
                </a>
              </div>
            </li>
            <li className="group flex flex-col rounded-2xl border-[1px] border-solid border-black-200 overflow-hidden cursor-pointer text-black-1000">
              <div className="overflow-hidden">
                <img
                  className="w-full object-cover duration-500 group-hover:scale-150"
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool2.png?raw=true"
                  alt="tool2"
                />
              </div>
              <div className="flex-1 px-8 py-5 border-b-[1px] border-solid border-black-200">
                <h3 className="font-black text-xl leading-6 mb-3">
                  Image Recognition Platform
                </h3>
                <p className="text-sm leading-[21px] text-black-800">
                  專業的圖像識別平台，識別圖像、分類、標記等。
                </p>
              </div>
              <div className="flex justify-between items-center px-8 py-5 border-b-[1px] border-solid border-black-200">
                <p className="font-bold">AI 模型</p>
                <p>杰杰</p>
              </div>
              <div className="flex justify-between items-center px-8 py-5">
                <p>#影像辨識</p>
                <a href="#" className="w-[18px] h-[18px]">
                  <img
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                    alt="share"
                  />
                </a>
              </div>
            </li>
            <li className="group flex flex-col rounded-2xl border-[1px] border-solid border-black-200 overflow-hidden cursor-pointer text-black-1000">
              <div className="overflow-hidden">
                <img
                  className="w-full object-cover duration-500 group-hover:scale-150"
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool3.png?raw=true"
                  alt="tool3"
                />
              </div>
              <div className="flex-1 px-8 py-5 border-b-[1px] border-solid border-black-200">
                <h3 className="font-black text-xl leading-6 mb-3">
                  Language Translation API
                </h3>
                <p className="text-sm leading-[21px] text-black-800">
                  專業的語言翻譯 API，實現文本翻譯功能，支援多種格式的文本。
                </p>
              </div>
              <div className="flex justify-between items-center px-8 py-5 border-b-[1px] border-solid border-black-200">
                <p className="font-bold">AI 模型</p>
                <p>琪琪</p>
              </div>
              <div className="flex justify-between items-center px-8 py-5">
                <p>#翻譯</p>
                <a href="#" className="w-[18px] h-[18px]">
                  <img
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                    alt="share"
                  />
                </a>
              </div>
            </li>
            <li className="group flex flex-col rounded-2xl border-[1px] border-solid border-black-200 overflow-hidden cursor-pointer text-black-1000">
              <div className="overflow-hidden">
                <img
                  className="w-full object-cover duration-500 group-hover:scale-150"
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool4.png?raw=true"
                  alt="tool4"
                />
              </div>
              <div className="flex-1 px-8 py-5 border-b-[1px] border-solid border-black-200">
                <h3 className="font-black text-xl leading-6 mb-3">
                  Sentiment Analysis API
                </h3>
                <p className="text-sm leading-[21px] text-black-800">
                  自動識別文本中的情感傾向，包括正向、負向和中性等。適用於情感分析、社交媒體監控、市場調查等。
                </p>
              </div>
              <div className="flex justify-between items-center px-8 py-5 border-b-[1px] border-solid border-black-200">
                <p className="font-bold">AI 模型</p>
                <p>昊昊</p>
              </div>
              <div className="flex justify-between items-center px-8 py-5">
                <p>#行銷</p>
                <a href="#" className="w-[18px] h-[18px]">
                  <img
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                    alt="share"
                  />
                </a>
              </div>
            </li>
            <li className="group flex flex-col rounded-2xl border-[1px] border-solid border-black-200 overflow-hidden cursor-pointer text-black-1000">
              <div className="overflow-hidden">
                <img
                  className="w-full object-cover duration-500 group-hover:scale-150"
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool5.png?raw=true"
                  alt="tool5"
                />
              </div>
              <div className="flex-1 px-8 py-5 border-b-[1px] border-solid border-black-200">
                <h3 className="font-black text-xl leading-6 mb-3">
                  Fraud Detection Platform
                </h3>
                <p className="text-sm leading-[21px] text-black-800">
                  預防詐騙活動，適用於銀行、金融、電商等。
                </p>
              </div>
              <div className="flex justify-between items-center px-8 py-5 border-b-[1px] border-solid border-black-200">
                <p className="font-bold">AI 模型</p>
                <p>卡卡</p>
              </div>
              <div className="flex justify-between items-center px-8 py-5">
                <p>#客服</p>
                <a href="#" className="w-[18px] h-[18px]">
                  <img
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                    alt="share"
                  />
                </a>
              </div>
            </li>
            <li className="group flex flex-col rounded-2xl border-[1px] border-solid border-black-200 overflow-hidden cursor-pointer text-black-1000">
              <div className="overflow-hidden">
                <img
                  className="w-full object-cover duration-500 group-hover:scale-150"
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool6.png?raw=true"
                  alt="tool6"
                />
              </div>
              <div className="flex-1 px-8 py-5 border-b-[1px] border-solid border-black-200">
                <h3 className="font-black text-xl leading-6 mb-3">
                  Voice Assistant SDK
                </h3>
                <p className="text-sm leading-[21px] text-black-800">
                  通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送信息等。
                </p>
              </div>
              <div className="flex justify-between items-center px-8 py-5 border-b-[1px] border-solid border-black-200">
                <p className="font-bold">AI 模型</p>
                <p>杰杰</p>
              </div>
              <div className="flex justify-between items-center px-8 py-5">
                <p>#生產力</p>
                <a href="#" className="w-[18px] h-[18px]">
                  <img
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                    alt="share"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
