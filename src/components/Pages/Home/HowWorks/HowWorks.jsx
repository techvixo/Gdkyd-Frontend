import { useTranslations } from "next-intl";
// import worksImg from "../../../../../public/assets/home-img/work-img/work-img.png";
import worksImg from "../../../../../public/assets/home-img/work-img/location.jpg";
import Image from "next/image";

const HowWorks = () => {
 
  const t = useTranslations('HomePage');
  const keys = ['work1', 'work2', 'work3', 'work4', 'work5', 'work6'];
  return (
    <div className="py-3 md:py-5 ">
      <div className="main_container">
        <div className="">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
          {t(`HowWork.title`)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="w-full">
              <Image
                width={1000}
                height={600}
                src={worksImg}
                alt={"work-image"}
                className="w-auto h-full"
              />
            </div>
            <div className="w-full flex flex-col gap-3 md:gap-5 bg-[#E4E5DF4D] p-4 md:p-6 md:px-10">
              {keys.map((key, i) => {
                return (
                  <div key={i} className="h-full">
                    <h4 className="capitalize font-semibold text-md md:text-lg text-[#064a9b]">
                    {t(`HowWork.WorksList.${key}.title`)}
                    </h4>
                    <p className="text-[#000000] text-sm md:text-base"> {t(`HowWork.WorksList.${key}.description`)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
