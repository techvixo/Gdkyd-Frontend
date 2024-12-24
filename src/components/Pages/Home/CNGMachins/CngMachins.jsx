"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import img1 from "../../../../../public/assets/home-img/machine/1.png";
// import img2 from "../../../../../public/assets/home-img/machine/2.png";
// import img3 from "../../../../../public/assets/home-img/machine/3.png";
// import img4 from "../../../../../public/assets/home-img/machine/2.png"; 
import MachineCard from "./MachineCard";
import { useTranslations } from "next-intl";

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute  right-[35%] md:right-[45%] bottom-[-30px] md:bottom-[-40px] z-10 transform-translate-y-1/2 bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-300"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute  left-[35%] md:left-[45%] z-10 bottom-[-30px] md:bottom-[-40px] transform-translate-y-1/2 bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-300"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

const CngMachines = ({ machines, locale }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const t = useTranslations('HomePage');
  // console.log(machines)
  return (
    <div className="my-5 md:my-10">
      <div className="main_container relative pb-6 md:pb-10">
        <h2 className="text-center md:w-1/2 mx-auto text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
          {t(`CncMachined.title`)}
        </h2>
        <Slider {...settings}>
          {machines?.map((part, i) => {
            return (
              <MachineCard  locale={locale} key={i} part={part}></MachineCard>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CngMachines;
