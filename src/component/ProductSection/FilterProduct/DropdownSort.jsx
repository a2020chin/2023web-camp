import { useState } from "react";
import { useSpring, useTransition, animated, config } from "@react-spring/web";

import DropdownOption from "./DropdownOption";

const DropdownSort = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toSort, setToSort] = useState(["由新到舊"]);

  const sortSelect = [
    { id: "toOld", value: "由新到舊", label: "由新到舊", name: "toSort" },
    { id: "toNew", value: "由舊到新", label: "由舊到新", name: "toSort" },
  ];

  const transitions = useTransition(isOpen, {
    from: {
      opacity: 0,
      transform: `scale(${0.9})`,
      transformOrigin: "top right",
    },
    enter: { opacity: 1, transform: `scale(${1})` },
    leave: { opacity: 0, transform: `scale(${0.9})` },
    config: config.wobbly,
  });

  const springProps = useSpring({
    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
    config: config.wobbly,
  });

  const textAnimation = useTransition(toSort, {
    from: { opacity: 0, transform: "translateY(-20px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    config: { mass: 1, tension: 2000, friction: 200 },
    trail: 200, // 每個元素之間的延遲時間
    keys: toSort, // 使用元素本身作為 key
  });

  const sortValueChange = (e) => {
    e.target.value === "由新到舊"
      ? setToSort(() => ["由新到舊"])
      : setToSort(() => ["由舊到新"]);
  };

  return (
    <div className="relative z-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center pl-10 pr-8 py-5 text-black-1000 border rounded-2xl hover:bg-gray-300 ${
          isOpen ? "border-black-1000" : ""
        }`}
      >
        <div className="flex">
          {textAnimation((style) => (
            <animated.p className="mr-2" style={style}>
              {toSort}
            </animated.p>
          ))}

          <animated.span
            className="text-base font-bold material-symbols-outlined"
            style={springProps}
          >
            expand_more
          </animated.span>
        </div>
      </button>

      {transitions(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className="absolute right-0 z-10 py-5 w-36 mt-2 bg-white rounded-2xl shadow-cardshaow"
            >
              <ul className="flex flex-col mb-4 text-black-1000">
                <DropdownOption
                  options={sortSelect}
                  data={toSort}
                  onChange={sortValueChange}
                  checkIcon={false}
                />
              </ul>
            </animated.div>
          )
      )}
    </div>
  );
};

export default DropdownSort;
