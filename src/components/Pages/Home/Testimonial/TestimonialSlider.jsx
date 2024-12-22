"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import your images
// import img1 from "../../../../../public/assets/home-img/testimonial-img/client-img.png";
// import img2 from "../../../../../public/assets/home-img/testimonial-img/client-img.png";
// import img3 from "../../../../../public/assets/home-img/testimonial-img/client-img.png";
import Image from "next/image";
import TestimonialCard from "./TestimonailCard";
import { useTranslations } from "next-intl";

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
    return (
        <button
            className="absolute right-[35%] md:right-[45%] bottom-[-17px] z-10 transform-translate-y-1/2 bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-300"
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
            className="absolute left-[35%] md:left-[45%] z-10 bottom-[-17px] transform-translate-y-1/2 bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-300"
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
const TestimonialSlider = ({ keys, images, title, description }) => {
    const t = useTranslations('HomePage');
    return (
        <div className="my-5 md:my-10">
            <div className="main_container relative">
                <div className="pb-2 md:pb-5">
                    <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-1 md:my-2">
                        {title}
                    </h2>
                    <p className="text-[#000000] text-sm md:text-base text-center my-3"> {description}</p>
                </div>
                <Slider {...settings}>
                    {keys.map((item, i) => {
                        const name = t(`Testimonial.testimonialData.${item}.name`);
                        const des = t(`Testimonial.testimonialData.${item}.des`);
                        const rating = 4;
                        const imgUrl = images[i];
                        return (
                            <TestimonialCard
                                key={i}
                                name={name}
                                des={des}
                                rating={rating}
                                imgUrl={imgUrl}
                            ></TestimonialCard>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialSlider;
