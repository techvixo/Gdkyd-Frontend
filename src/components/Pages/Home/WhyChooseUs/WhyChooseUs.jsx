import Link from "next/link";
import img1 from "../../../../../public/assets/home-img/why-chose-us/Commitment.svg";
import img2 from "../../../../../public/assets/home-img/why-chose-us/Advanced-Technology.svg";
import img3 from "../../../../../public/assets/home-img/why-chose-us/Expertise.svg";
import img4 from "../../../../../public/assets/home-img/why-chose-us/Tailored-Solutions.svg";
import img5 from "../../../../../public/assets/home-img/why-chose-us/Responsive-Transparent.svg";
import img6 from "../../../../../public/assets/home-img/why-chose-us/Cost-Effective.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const WhyChooseUs = () => {

  const t = useTranslations('HomePage');
  const keys = ['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6'];
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <div className="py-5 md:py-8 bg-[#E4E5DF]">
      <div className="main_container">
        <div className="">
          <h2 className="text-center w-full md:w-1/2 mx-auto text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
            {t("WhyChoose.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
            {keys.map((key, i) => {
              return (
                <div key={i} className="bg-white shadow h-full">
                  <div className="top_s bg-[#00000005] p-1 px-4 md:px-6 pt-3">
                    <div className="h-16 w-full my-3 md:my-5">
                      <Image
                        width={100}
                        src={images[i]} 
                        alt={t(`WhyChoose.Features.${key}.title`)}
                        className="w-auto h-full"
                      />
                    </div>
                    <h4 className="capitalize font-semibold text-xl text-[#064a9b]">{t(`WhyChoose.Features.${key}.title`)}</h4>
                  </div>
                  <div className="p-4 md:p-6">
                  <p className="text-[#000000]">{t(`WhyChoose.Features.${key}.description`)}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-4 md:my-4">
          <Link href={"/services"}>
            <button
              className=" font-semibold md:mt-4  bg-gradient-to-r from-[#4177B7] to-[#86BCFC]  hover:bg-gradient-to-r hover:from-[#86BCFC] hover:to-[#4177B7] p-2 text-sm md:text-md px-3 md:px-10 rounded-md text-[#FFFFFF]  transition"
            >
              {t("WhyChoose.button")}
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
