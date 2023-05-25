import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFilterProduct } from "../../Context";

import DropdownOption from "./DropdownOption";

const DropdownSort = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toSort, setToSort } = useFilterProduct();

  const sortSelect = [
    { id: "toOld", value: "0", label: "由新到舊", name: "toSort" },
    { id: "toNew", value: "1", label: "由舊到新", name: "toSort" },
  ];

  const sortValueChange = (e) => {
    e.target.value === "0" ? setToSort(() => "0") : setToSort(() => "1");
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
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mr-2"
          >
            {sortSelect[toSort].label}
          </motion.p>

          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-base font-bold material-symbols-outlined"
          >
            expand_more
          </motion.span>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, transformOrigin: "top right" }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 z-10 py-5 w-36 mt-2 bg-white rounded-2xl shadow-cardshaow"
          >
            <ul className="flex flex-col text-black-1000">
              <DropdownOption
                options={sortSelect}
                data={[sortSelect[toSort].label]}
                onChange={sortValueChange}
                checkIcon={false}
              />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownSort;
