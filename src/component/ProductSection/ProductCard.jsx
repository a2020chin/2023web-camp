import React from "react";

const ProductCard = ({ img, title, content, model, author, hashtag }) => {
  return (
    <li className="group flex flex-col rounded-2xl border-[1px] border-solid border-black-200 overflow-hidden cursor-pointer text-black-1000">
      <div className="overflow-hidden">
        <img
          className="w-full object-cover duration-500 group-hover:scale-150"
          src={img}
          alt="tool1"
        />
      </div>
      <div className="flex-1 px-8 py-5 border-b-[1px] border-solid border-black-200">
        <h3 className="font-black text-xl leading-6 mb-3">{title}</h3>
        <p className="text-sm leading-[21px] text-black-800">{content}</p>
      </div>
      <div className="flex justify-between items-center px-8 py-5 border-b-[1px] border-solid border-black-200">
        <p className="font-bold">{model}</p>
        <p>{author}</p>
      </div>
      <div className="flex justify-between items-center px-8 py-5">
        <p>{hashtag}</p>
        <a href="#" className="w-[18px] h-[18px]">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
            alt="share"
          />
        </a>
      </div>
    </li>
  );
};

export default ProductCard;
