import Image from "next/image";
import img1 from "../../../../../public/assets/home-img/machine/1.png";
import img2 from "../../../../../public/assets/home-img/machine/2.png";
import { useTranslations } from "next-intl";

const FeaturedVideos = ({locale, videos}) => {
  const videosList = [
    {
      id: 1,
      title: "Machining Rocket Engines at Blue Origin",
      img: img1,
      videoLink: "https://www.youtube.com/watch?v=O5lZqqy7VQE",
    },
    {
      id: 1,
      title: "Machining Rocket Engines at Blue Origin",
      img: img2,
      videoLink: "https://www.youtube.com/watch?v=O5lZqqy7VQE",
    },
  ];
  const t = useTranslations('HomePage');
  // console.log(videos)
  return (
    <div className="py-3 md:py-5 ">
      <div className="main_container">
        <div className="">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
          {t(`FeaturedVideo.title`)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          {videosList.map((item, i) => {
                return (
                  <div key={i} className="w-full relative rounded-md md:rounded-xl overflow-hidden">
                    <Image
                      width={800}
                      height={800}
                      src={item.img}
                      alt={"video-image"}
                      className="w-full"
                    />
                    <div className="bg-[#0104088a] absolute top-0 left-0 right-0 w-full h-full flex items-center justify-center flex-col gap-6 md:gap-12 p-4 md:p-8">
                      <h3 className="text-center text-2xl md:text-3xl font-bold text-white ">
                        {item.title}
                      </h3>
                      <button className=" font-semibold bg-gradient-to-r from-[#4177B7] to-[#86BCFC]  hover:bg-gradient-to-r hover:from-[#86BCFC] hover:to-[#4177B7] p-2 text-base md:text-lg px-3 md:px-10 rounded-md text-[#FFFFFF]  transition">
                         WATCH NOW
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideos;
