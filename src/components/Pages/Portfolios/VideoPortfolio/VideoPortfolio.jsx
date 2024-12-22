"use client"
import { useTranslations } from "next-intl";
import img from "../../../../../public/assets/portfolio-img/portfolio.png";
import getPortfolioImage from "../../../../lib/getPortfolioImage";
import VideoCard from "./VideoCard";

const VideoPortfolio =  ({locale, videos}) => {
  // console.log("portfolioImages:", videos.featured_video.left_side_video)
  const data = [
    {
      title: "Project Name",
      img: img,
      video: videos?.featured_video?.left_side_video,
      link: "/",
    },
    {
      title: "Project Name",
      img: img,
      video: videos?.featured_video?.left_side_video,
      link: "/",
    },
    {
      title: "Project Name",
      img: img,
      video: videos?.featured_video?.left_side_video,
      link: "/",
    },
    {
      title: "Project Name",
      img: img,
      video: videos?.featured_video?.left_side_video,
      link: "/",
    },
    {
      title: "Project Name",
      img: img,
      video: videos?.featured_video?.left_side_video,
      link: "/",
    },
    {
      title: "Project Name",
      img: img,
      video: videos?.featured_video?.left_side_video,
      link: "/",
    },
  ];
  return (
    <div className="my-5 md:my-14">
      <div className="main_container">
        <div className="w-full md:w-full grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          {data?.map((video, i) => {
            return (
              <div key={i} className="relative w-full h-0 pb-[56.25%]">
              {video ? (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={video?.video}
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoPortfolio;
