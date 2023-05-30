import { useState } from "react";
import { useFilterProduct } from "../../Context";
import { motion, AnimatePresence } from "framer-motion";

import DropdownOption from "./DropdownOption";

const DropdownMune = (prop) => {
  const [isOpen, setIsOpen] = useState(false);
  const { aimodelValue, aitypeValue, setAitypeValue, setAimodelValue } =
    useFilterProduct();

  const aimodelValueChange = (e) => {
    if (!aimodelValue.includes("") && aimodelValue.includes(e)) {
      setAimodelValue(aimodelValue.filter((value) => value !== e));

      //  useState並不會立即改變該狀態的值，而是將更新排入隊列中，在下一個渲染周期時才會生效
      if (aimodelValue.length === 1) {
        setAimodelValue((prevValue) => [...prevValue, ""]);
      }
    } else if (aimodelValue.length > 0 && e === "") {
      setAimodelValue([""]);
    } else {
      setAimodelValue((prevValue) => [...prevValue, e]);
      setAimodelValue((prevValue) => prevValue.filter((value) => value !== ""));
    }
  };

  const aitypeValueChange = (e) => {
    if (!aitypeValue.includes("") && aitypeValue.includes(e)) {
      setAitypeValue(aitypeValue.filter((value) => value !== e));

      //  useState並不會立即改變該狀態的值，而是將更新排入隊列中，在下一個渲染周期時才會生效
      if (aitypeValue.length === 1) {
        setAitypeValue((prevValue) => [...prevValue, ""]);
      }
    } else if (aitypeValue.length > 0 && e === "") {
      setAitypeValue([""]);
    } else {
      setAitypeValue((prevValue) => [...prevValue, e]);
      setAitypeValue((prevValue) => prevValue.filter((value) => value !== ""));
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, transformOrigin: "top left" }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 25,
            }}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default DropdownMune;
