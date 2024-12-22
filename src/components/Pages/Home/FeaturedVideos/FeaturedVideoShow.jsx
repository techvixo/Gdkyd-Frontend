
"use client"
import { useTranslations } from "next-intl";

const FeaturedVideoShow = ({ locale, videos }) => {

  const t = useTranslations("HomePage");
  return (
    <div className="py-3 md:py-5">
      <div className="main_container">
        <div>
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
            {t(`FeaturedVideo.title`)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            {/* Left Video */}
            <div className="relative w-full h-0 pb-[56.25%]">
              {videos?.left_side_video ? (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={videos?.left_side_video}
                  title="Left Side Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200">
                  <div className="loader border-t-4 border-b-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            {/* Right Video */}
            <div className="relative w-full h-0 pb-[56.25%]">
              {videos?.right_side_video ? (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={videos?.right_side_video}
                  title="Right Side Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200">
                  <div className="loader border-t-4 border-b-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideoShow;
