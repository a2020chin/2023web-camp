import { useState, useEffect } from "react";
import axios from "axios";
import queryString from "query-string";
import PropTypes from "prop-types";

import { FilterProductContext } from "../Context";

import FilterProduct from "./FilterProduct";
import ProductCard from "./ProductCard";

const ProductSection = ({ className }) => {
  const [product, setProduct] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [aimodelValue, setAimodelValue] = useState([""]);
  const [aitypeValue, setAitypeValue] = useState([""]);
  const [toSort, setToSort] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = queryString.stringify({
          type: aitypeValue,
          sort: toSort,
        });
        const url = `https://2023-engineer-camp.zeabur.app/api/v1/works/?${query}`;
        const response = await axios.get(url);
        setProduct(response.data?.ai_works?.data);
        setPagination(response.data?.ai_works?.page);
        console.log(response);
        console.log(response.data?.ai_works.page);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [aitypeValue, toSort]);

  return (
    <FilterProductContext.Provider
      value={{
        aimodelValue,
        setAimodelValue,
        aitypeValue,
        setAitypeValue,
        toSort,
        setToSort,
      }}
    >
      <div
        className={`bg-black-0 rounded-[20px] w-full py-20 md:rounded-[80px] md:py-40 lg:rounded-[160px] ${className}`}
      >
        <div className="container">
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
            />
          </label>

          <FilterProduct />

          <ul className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product &&
              product.map(
                ({
                  description,
                  discordId,
                  id,
                  imageUrl,
                  model,
                  title,
                  type,
                }) => (
                  <ProductCard
                    key={id}
                    img={imageUrl}
                    title={title}
                    content={description}
                    model={model}
                    author={discordId}
                    type={type}
                  />
                )
              )}
          </ul>

          <nav className="flex justify-end">
            <ul className="flex items-center gap-x-1">
              <li>
                <button
                  className="flex w-12 h-12 duration-300 items-center justify-center text-black-1000 rounded-2xl hover:bg-black-1000 hover:text-white"
                  type="button"
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
              {Array.from(
                new Array(pagination.total_pages),
                (_, index) => index + 1
              ).map((item) => (
                <li key={`pagination-${item}`}>
                  <button
                    className={`flex w-12 h-12 duration-300 items-center justify-center rounded-2xl hover:bg-black-1000 hover:text-white ${
                      pagination.current_page === item
                        ? "bg-black-1000 text-white"
                        : "text-black-1000"
                    }`}
                    type="button"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className="flex w-12 h-12 duration-300 items-center justify-center text-black-1000 rounded-2xl hover:bg-black-1000 hover:text-white disabled:cursor-wait"
                  // disabled={pagination.has_pre === false}
                  type="button"
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
        </div>
      </div>
    </FilterProductContext.Provider>
  );
};

ProductSection.propTypes = {
  className: PropTypes.string,
};

export default ProductSection;
