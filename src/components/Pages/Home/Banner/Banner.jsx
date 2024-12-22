"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { redirect } from "next/navigation";
import { BASEURL } from "../../../../../Constant";

const Banner = ({ locale, data }) => {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  const handleSearch = () => {
    redirect("/services");
  };
  // console.log("object:", data);
  return (
    <div id="banner" className="md:banner overflow-hidden ">
      <div className="slider-container w-full h-full">
        <Slider {...settings}>
          {data?.map((slider, i) => {
            return (
              <div
                id="banner_slider"
                key={i}
                className="relative w-full h-full"
              >
                <div className="contain absolute top-0 left-0 w-full h-full ">
                  <div className="main_container pt-9 flex justify-center items-center flex-col gap-7 w-full h-full text-white ">
                    <h2 className="text-3xl md:text-center text-white font-bold md:text-4xl capitalize ">
                      {locale == "en" ? slider?.title_en : slider?.title_cn}
                    </h2>
                    <p className="text-white text-center md:w-2/3 text-sm md:text-lg">
                      {locale == "en"
                        ? slider?.description_en
                        : slider?.description_cn}
                    </p>
                    <div className="w-full flex items-center justify-center pt-5 md:pt-2">
                      <div className="md:w-2/3 h-12 md:h-14 bg-white relative w-full rounded-2xl">
                        <input
                          // onChange={(e) => setInputValue(e.target.value)}
                          type="text"
                          required
                          placeholder="Search here.."
                          className={`absolute top-0 text-black left-0 input h-full rounded-2xl input-bordered w-full `} // Add red border when email is not valid
                        />
                        <button
                          onClick={handleSearch}
                          className="absolute top-0 right-0 w-24 md:w-36 h-full md:text-md rounded-r-2xl text-white bg-primary"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                    {/* <Link href={"/"}>
                      <button
                        type="button"
                        className="bg-white  uppercase text-xs rounded-none text-black btn btn-sm w-40"
                      >
                        Explore Amenities
                      </button>
                    </Link> */}
                  </div>
                </div>
                <Image
                  width={1200}
                  height={800}
                  src={`${BASEURL}/${slider?.image}`}
                  // alt={locale == "en" ? product?.title_en : product?.title_en}
                  alt="banner-image"
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-0 bottom-4 flex justify-end w-full ">
                  <div className="flex flex-col pr-5 md:pr-10 items-center text-[8px] gap-[2px] uppercase text-white">
                    <span id="icon" className="text-xl pb-1">
                      <MdOutlineKeyboardDoubleArrowDown />
                    </span>
                    <span>scroll down</span>
                    {/* <span>to start the experience</span> */}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
