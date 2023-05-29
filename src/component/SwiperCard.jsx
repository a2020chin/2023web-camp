import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

import { useRef } from "react";

const swiperInView = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.5,
    },
  },
};

const bounceInVariants = {
  initial: {
    opacity: 0,
    scale: 0.3,
  },
  whileInView: {
    opacity: 1,
    scale: 1,

    transition: {
      type: "spring",
      damping: 14,
    },
  },
};

function SwiperCard(prop) {
  const navigationRef = useRef(null);
  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      variants={swiperInView}
    >
      <Swiper
        className="grid pb-9"
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {prop.comment.map(({ img, user, userCompany, description }, index) => (
          <SwiperSlide className="flex flex-col" key={`${user}-${index}`}>
            <motion.div
              className="p-10 bg-black-0/[0.08] rounded-2xl flex-1 flex flex-col gap-5"
              variants={bounceInVariants}
            >
              <div className="flex gap-[5px]">
                <span className="material-symbols-outlined text-base">
                  star
                </span>
                <span className="material-symbols-outlined text-base">
                  star
                </span>
                <span className="material-symbols-outlined text-base">
                  star
                </span>
                <span className="material-symbols-outlined text-base">
                  star
                </span>
                <span className="material-symbols-outlined text-base">
                  star
                </span>
              </div>
              <p className="flex-1 text-black-400 pb-10">{description}</p>
              <div className="flex gap-4">
                <img src={img} alt={img} />
                <div className="flex flex-col justify-between">
                  <p className="font-bold">{user}</p>
                  <p className="text-sm">{userCompany}</p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
        <div
          ref={navigationRef}
          className="h-3 absolute flex items-center justify-center gap-x-2 md:hidden"
        ></div>
      </Swiper>
    </motion.div>
  );
}

export default SwiperCard;
