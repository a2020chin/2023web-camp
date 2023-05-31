import PropTypes from "prop-types";

import FilterProduct from "./FilterProduct";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const ProductSection = ({ className }) => {
  return (
    <div
      className={`bg-black-0 rounded-[20px] w-full py-20 md:rounded-[80px] md:py-40 lg:rounded-[160px] ${className}`}
    >
      <div className="container">
        <FilterProduct />

        <ProductCard />

        <Pagination />
      </div>
    </div>
  );
};

ProductSection.propTypes = {
  className: PropTypes.string,
};

export default ProductSection;
