import { useState } from "react";

import { useTransition, animated, config } from "@react-spring/web";





const Dropdownmune = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aimodelValue, setAimodelValue] = useState("aimodelall");
  const [aitypeValue, setAitypeValue] = useState(["aitypeall"]);

  const aimodelSelect = [
    { id: "aimodelall", value: "aimodelall", label: "所有模型" },
    { id: "卡卡", value: "卡卡", label: "卡卡" },
    { id: "杰杰", value: "杰杰", label: "杰杰" },
    { id: "琪琪", value: "琪琪", label: "琪琪" },
    { id: "昊昊", value: "昊昊", label: "昊昊" },
  ];

  const aitypeSelect = [
    { id: "aitypeall", value: "aitypeall", label: "全部" },
    { id: "聊天", value: "聊天", label: "聊天" },
    { id: "影像辨識", value: "影像辨識", label: "影像辨識" },
    { id: "翻譯", value: "翻譯", label: "翻譯" },
    { id: "行銷", value: "行銷", label: "行銷" },
    { id: "客服", value: "客服", label: "客服" },
    { id: "生產力", value: "生產力", label: "生產力" },
  ];

  const transitions = useTransition(isOpen, {
    from: {
      opacity: 0,
      transform: `scale(${0.9})`,
      transformOrigin: "top left",
    },
    enter: { opacity: 1, transform: `scale(${1})` },
    leave: { opacity: 0, transform: `scale(${0.9})` },
    config: config.wobbly,
  });

  const aimodelTransitions = useTransition(aimodelValue, {
    key: aimodelValue,
    from: { opacity: 0, transform: "scale(0.8)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.8)" },
  });
  const aitypeTransitions = useTransition(aitypeValue, {
    key: aitypeValue,
    from: { opacity: 0, transform: "scale(0.8)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.8)" },
  });

  const aimodelValueChange = (e) => {
    setAimodelValue(e.target.value);
  };
  const aitypeValueChange = (e) => {
    console.log(e.target.value.includes(aitypeValue));
    if (!e.target.value.includes(aitypeValue)) {
      setAitypeValue([...aitypeValue, e.target.value]);
    }
  };

  const MuneItem = ({ id, value, label }) => {
    return (
      <li
        key={`aimodelSelect-${id}`}
        className="hover:bg-black-200"
      >
        <label
          className="pl-10 pr-8 py-2 flex justify-between items-center cursor-pointer"
          htmlFor={id}
        >
          {label}
          <input
            type="radio"
            name="aimodel"
            value={value}
            id={id}
            onChange={aitypeValueChange}
            className="sr-only"
          />
          {aitypeTransitions(
            (aimodelstyle, aimodelitem) =>
              value.includes(aimodelitem) && (
                <animated.div
                  className="overflow-hidden material-symbols-outlined"
                  style={aimodelstyle}
                >
                  done
                </animated.div>
              )
          )}
        </label>
      </li>
    )
  }

  return (
    <div className="relative z-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center px-10 py-5 text-black-1000 border rounded-2xl hover:bg-gray-300 ${isOpen ? "border-black-1000" : ""
          }`}
      >
        <p className="mr-2 flex">
          篩選
          <span className="ml-3 text-base material-symbols-outlined">
            filter_alt
          </span>
        </p>
      </button>

      {transitions(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className="absolute z-10 py-5 w-60 mt-2 bg-white rounded-2xl shadow-cardshaow"
            >
              <ul className="flex flex-col mb-4 text-black-1000">
                <li className="py-1">
                  <h5 className="pl-10 text-sm font-bold leading-[18px] text-black-600">
                    AI 模型
                  </h5>
                </li>
                {aimodelSelect.map(({ id, value, label }) => (<MuneItem key={`aimodelSelect-${id}`} id={id} value={value} label={label} />
                  // <li
                  //   key={`aimodelSelect-${id}`}
                  //   className="hover:bg-black-200"
                  // >
                  //   <label
                  //     className="pl-10 pr-8 py-2 flex justify-between items-center cursor-pointer"
                  //     htmlFor={id}
                  //   >
                  //     {label}
                  //     <input
                  //       type="radio"
                  //       name="aimodel"
                  //       value={value}
                  //       id={id}
                  //       onChange={aimodelValueChange}
                  //       className="sr-only"
                  //     />
                  //     {aimodelTransitions(
                  //       (aimodelstyle, aimodelitem) =>
                  //         aimodelitem === value && (
                  //           <animated.div
                  //             className="overflow-hidden material-symbols-outlined"
                  //             style={aimodelstyle}
                  //           >
                  //             done
                  //           </animated.div>
                  //         )
                  //     )}
                  //   </label>
                  // </li>
                ))}
              </ul>
              <div className="pl-10 pr-8 mt-3 mb-5">
                <div className="border-b border-black-200"></div>
              </div>
              <ul className="flex flex-col mb-4 text-black-1000">
                <li className="py-1">
                  <h5 className="pl-10 text-sm font-bold leading-[18px] text-black-600">
                    類型
                  </h5>
                </li>
                {aitypeSelect.map(({ id, value, label }) => (
                  <li
                    key={`aimodelSelect-${id}`}
                    className="hover:bg-black-200"
                  >
                    <label
                      className="pl-10 pr-8 py-2 flex justify-between items-center cursor-pointer"
                      htmlFor={id}
                    >
                      {label}
                      <input
                        type="radio"
                        name="aimodel"
                        value={value}
                        id={id}
                        onChange={aitypeValueChange}
                        className="sr-only"
                      />
                      {aitypeTransitions(
                        (aimodelstyle, aimodelitem) =>
                          value.includes(aimodelitem) && (
                            <animated.div
                              className="overflow-hidden material-symbols-outlined"
                              style={aimodelstyle}
                            >
                              done
                            </animated.div>
                          )
                      )}
                    </label>
                  </li>
                ))}
              </ul>
            </animated.div>
          )
      )}
    </div>
  );
};

export default Dropdownmune;