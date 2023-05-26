import { useFilterProduct } from "../../Context";

const AitypeSelectMune = (prop) => {
  const { aitypeValue, setAitypeValue } = useFilterProduct();

  const aitypeValueChange = (e) => {
    if (!aitypeValue.includes("") && aitypeValue.includes(e.target.value)) {
      setAitypeValue(aitypeValue.filter((value) => value !== e.target.value));

      //  useState並不會立即改變該狀態的值，而是將更新排入隊列中，在下一個渲染周期時才會生效
      if (aitypeValue.length === 1) {
        setAitypeValue((prevValue) => [...prevValue, ""]);
      }
    } else if (aitypeValue.length > 0 && e.target.value === "") {
      setAitypeValue([""]);
    } else {
      setAitypeValue((prevValue) => [...prevValue, e.target.value]);
      setAitypeValue((prevValue) => prevValue.filter((value) => value !== ""));
    }
  };
  return (
    <ul
      className={`flex gap-2 mx-auto scrollbarh-hidden overflow-x-auto ${prop.className}`}
    >
      {prop.aitypeSelect.map(({ id, value, label }) => (
        <li key={`AitypeSelectMune-${id}`} className="whitespace-nowrap">
          <button
            type="button"
            className={`inline-block px-4 py-2  font-bold cursor-pointer rounded-2xl duration-300 hover:bg-neutral-100 hover:text-black-800 ${
              aitypeValue.includes(value)
                ? "bg-black-200 text-black-1000"
                : "text-black-600"
            }`}
            htmlFor={id}
            onClick={aitypeValueChange}
            value={value}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default AitypeSelectMune;
