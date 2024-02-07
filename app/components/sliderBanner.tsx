import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ISliderItem {
  title: string;
  description: string;
  videoUrl: string;
  imgUrl: string;
}

export default function SliderBanner({
  sliderItem,
}: {
  sliderItem: ISliderItem[];
}) {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: {
      x: 300,
      opacity: 0,
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      x: -300,
      opacity: 0,
    },
  };

  useEffect(() => {
    console.log(sliderItem[page].imgUrl);
  }, [page]);

  return (
    <div className="relative flex flex-col items-center justify-center h-[500px] mt-[64px]">
      <div className="h-full w-full overflow-hidden my-3 px-1">
        <motion.div
          key={page}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className={`p-10 mx-6 bg-[url('/bannerImgC.png')] bg-cover bg-center rounded-xl h-full flex flex-col justify-center text-white`}
        >
          <div>
            {/* Dynamic content based on the slide */}
            <h2 className="text-2xl font-bold  mb-2">
              {sliderItem[page].title}
            </h2>
            <p className="">{sliderItem[page].description}</p>
            <p className="">{sliderItem[page].description}</p>
            <p className="mb-4">{sliderItem[page].description}</p>
            <button className="bg-blue-500 text-white rounded-full px-4 py-2 flex cursor-pointer h-[40px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                />
              </svg>

              <span>View collection</span>
            </button>
          </div>
        </motion.div>
        <div className="absolute bottom-0 top-0 left-0 right-0 p-1 flex justify-between items-center px-2">
          <button
            className=" text-black text-lg"
            onClick={() => paginate(-1)}
            disabled={page <= 0}
          >
            {"<"}
          </button>
          <button
            className=" text-black text-lg"
            onClick={() => paginate(1)}
            disabled={page >= sliderItem.length - 1}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
