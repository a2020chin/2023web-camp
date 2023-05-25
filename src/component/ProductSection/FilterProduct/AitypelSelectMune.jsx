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
    <ul className="flex gap-2">
      {prop.aitypeSelect.map(({ id, value, label, name }) => (
        <li key={`AitypeSelectMune-${id}`}>
          <input
            type="checkbox"
            name={name}
            value={value}
            id={id}
            onChange={aitypeValueChange}
            checked={aitypeValue.includes(value)}
            className="sr-only peer"
          />
          <label
            className="px-4 py-2 text-black-600 font-bold cursor-pointer rounded-2xl duration-300 hover:bg-neutral-100 hover:text-black-800 peer-checked:bg-black-200 peer-checked:text-black-1000"
            htmlFor={id}
          >
            {label}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default AitypeSelectMune;
