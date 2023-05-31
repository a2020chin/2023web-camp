import { useFilterProduct } from "../Context";

const Pagination = () => {
  const { pagination, setPageValue } = useFilterProduct();
  return (
    <nav className="flex justify-end">
      <ul className="flex items-center gap-x-1">
        <li>
          <button
            className={`flex w-12 h-12 duration-300 items-center justify-center text-black-1000 rounded-2xl ${
              pagination?.has_pre == false
                ? "cursor-not-allowed text-black-400"
                : "text-black-1000 hover:bg-black-1000 hover:text-white"
            }`}
            disabled={pagination?.has_pre == false}
            type="button"
            onClick={() => setPageValue((pre) => pre - 1)}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        {pagination?.total_pages &&
          Array(pagination?.total_pages)
            .fill()
            .map((val, index) => index + 1)
            .map((item) => (
              <li key={`pagination-${item}`}>
                <button
                  className={`flex w-12 h-12 duration-300 items-center justify-center rounded-2xl hover:bg-black-1000 hover:text-white ${
                    pagination?.current_page == item
                      ? "bg-black-1000 text-white"
                      : "text-black-1000"
                  }`}
                  disabled={pagination?.current_page == item}
                  type="button"
                  onClick={() => {
                    setPageValue(Number(item));
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
        <li>
          <button
            className={`flex w-12 h-12 duration-300 items-center justify-center rounded-2xl  ${
              pagination?.has_next == false
                ? "cursor-not-allowed text-black-400"
                : "text-black-1000 hover:bg-black-1000 hover:text-white"
            }`}
            disabled={pagination?.has_next == false}
            type="button"
            onClick={() => setPageValue((pre) => pre + 1)}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
