import PropTypes from "prop-types";

const ProductCard = ({ img, title, content, model, author, type }) => {
  return (
    <li className="group flex flex-col rounded-2xl border-[1px] border-solid border-black-200 overflow-hidden cursor-pointer text-black-1000">
      <div className="overflow-hidden">
        <img
          className="w-full object-cover duration-500 group-hover:scale-150"
          src={img}
          alt={title}
        />
      </div>
      <div className="flex-1 px-8 py-5 border-b-[1px] border-solid border-black-200">
        <h3 className="font-black text-heading06 mb-3">{title}</h3>
        <p className="text-sm leading-[21px] text-black-800">{content}</p>
      </div>
      <div className="flex justify-between items-center px-8 py-5 border-b-[1px] border-solid border-black-200">
        <p className="font-bold">{model}</p>
        <p>{author}</p>
      </div>
      <div className="flex justify-between items-center px-8 py-5">
        <p>{type}</p>
        <a href="#" className="w-[18px] h-[18px]">
          <span className="text-[18px] font-bold material-symbols-outlined">
            share
          </span>
        </a>
      </div>
    </li>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ProductCard;
