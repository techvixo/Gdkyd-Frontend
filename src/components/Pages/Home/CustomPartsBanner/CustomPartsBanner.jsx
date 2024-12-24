import { useTranslations } from "next-intl";
import Link from "next/link";

const CustomPartsBanner = () => {
  const t = useTranslations("HomePage");
  return (
    <div id="custom_part" className="relative py-10 md:py-24 overflow-hidden">
      {/* Background Video */}
      {/* <BgVideo></BgVideo> */}

      {/* Overlay Content */}
      <div className="relative z-10 main_container">
        <div className="flex flex-col items-center justify-center gap-3">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white my-4 md:my-7">
            {t(`CustomPart.title`)}
          </h2>
          <Link href={"/services"}>
            <button className="font-semibold bg-gradient-to-r from-[#4177B7] to-[#86BCFC] hover:bg-gradient-to-r hover:from-[#86BCFC] hover:to-[#4177B7] p-2 text-base md:text-lg px-3 md:px-10 rounded-md text-[#FFFFFF] transition">
              {t(`CustomPart.button`)}
            </button>
          </Link>
        </div>
      </div>

      {/* Dark Overlay to Enhance Text Visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    </div>
  );
};

export default CustomPartsBanner;
