import { useFilterProduct } from "../../Context";
function Search() {
  const { searchValue, setSearchValue } = useFilterProduct();

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <>
      <h2 className="text-heading03 text-black-1000 font-black text-center mb-8 md:text-display03 md:mb-20">
        這些超酷的應用，都來自AI工具王
      </h2>
      <label className="relative block mb-6">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-10">
          <svg className="h-6 w-6 fill-black-600" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <input
          className="placeholder:text-black-600 text-black-1000 block bg-black-200 w-full border border-slate-300 rounded-2xl py-5 pl-[76px] pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="輸入關鍵字搜尋"
          type="text"
          name="search"
          value={searchValue}
          onChange={handleInputChange}
        />
      </label>
    </>
  );
}

export default Search;
