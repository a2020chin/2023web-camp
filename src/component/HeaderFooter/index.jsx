import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { FilterProductContext } from "../Context";
import queryString from "query-string";
import axios from "axios";

import Footer from "./Footer";
import Header from "./Header";
import Loading from "../Loading";

const HeaderFooter = () => {
  const [product, setProduct] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [aimodelValue, setAimodelValue] = useState([""]);
  const [aitypeValue, setAitypeValue] = useState([""]);
  const [toSort, setToSort] = useState(0);
  const [pageValue, setPageValue] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(0);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = queryString.stringify({
          type: aitypeValue,
          sort: toSort,
          search: searchValue,
          page: pageValue,
        });
        const url = `https://2023-engineer-camp.zeabur.app/api/v1/works/?${query}`;
        const response = await axios.get(url);
        setProduct(response.data?.ai_works?.data);
        setPagination(response.data?.ai_works?.page);
        console.log(toSort);

        if (isLoading == 0) {
          setIsLoading(1);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [aitypeValue, toSort, searchValue, pageValue]);

  return (
    <>
      <FilterProductContext.Provider
        value={{
          product,
          pagination,
          aimodelValue,
          setAimodelValue,
          aitypeValue,
          setAitypeValue,
          toSort,
          setToSort,
          pageValue,
          setPageValue,
          searchValue,
          setSearchValue,
          isLoading,
          showHeader,
          setShowHeader,
        }}
      >
        <Loading isLoading={isLoading} setIsLoading={setIsLoading} />
        {isLoading == 2 && (
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        )}
      </FilterProductContext.Provider>
    </>
  );
};

export default HeaderFooter;
