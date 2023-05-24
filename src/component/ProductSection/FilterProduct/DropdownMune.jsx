import { useState } from "react";
import { useFilterProduct } from "../../Context";

import { useTransition, animated, config } from "@react-spring/web";
import DropdownOption from "./DropdownOption";

const DropdownMune = (prop) => {
  const [isOpen, setIsOpen] = useState(false);
  const { aimodelValue, aitypeValue, setAitypeValue, setAimodelValue } =
    useFilterProduct();

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

  const aimodelValueChange = (e) => {
    if (
      !aimodelValue.includes("aimodelall") &&
      aimodelValue.includes(e.target.value)
    ) {
      setAimodelValue(aimodelValue.filter((value) => value !== e.target.value));

      //  useState並不會立即改變該狀態的值，而是將更新排入隊列中，在下一個渲染周期時才會生效
      if (aimodelValue.length === 1) {
        setAimodelValue((prevValue) => [...prevValue, "aimodelall"]);
      }
    } else if (aimodelValue.length > 0 && e.target.value === "aimodelall") {
      setAimodelValue(["aimodelall"]);
    } else {
      setAimodelValue((prevValue) => [...prevValue, e.target.value]);
      setAimodelValue((prevValue) =>
        prevValue.filter((value) => value !== "aimodelall")
      );
    }
  };

  const aitypeValueChange = (e) => {
    if (
      !aitypeValue.includes("aitypeall") &&
      aitypeValue.includes(e.target.value)
    ) {
      setAitypeValue(aitypeValue.filter((value) => value !== e.target.value));

      //  useState並不會立即改變該狀態的值，而是將更新排入隊列中，在下一個渲染周期時才會生效
      if (aitypeValue.length === 1) {
        setAitypeValue((prevValue) => [...prevValue, "aitypeall"]);
      }
    } else if (aitypeValue.length > 0 && e.target.value === "aitypeall") {
      setAitypeValue(["aitypeall"]);
    } else {
      setAitypeValue((prevValue) => [...prevValue, e.target.value]);
      setAitypeValue((prevValue) =>
        prevValue.filter((value) => value !== "aitypeall")
      );
    }
  };

  return (
    <div className="relative z-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center pl-10 pr-8 py-5 text-black-1000 border rounded-2xl hover:bg-gray-300 ${
          isOpen ? "border-black-1000" : ""
        }`}
      >
        <p className="flex">
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
                <DropdownOption
                  options={prop.aimodelSelect}
                  data={aimodelValue}
                  onChange={aimodelValueChange}
                  checkIcon={true}
                />
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
                <DropdownOption
                  options={prop.aitypeSelect}
                  data={aitypeValue}
                  onChange={aitypeValueChange}
                  checkIcon={true}
                />
              </ul>
            </animated.div>
          )
      )}
    </div>
  );
};
export default DropdownMune;