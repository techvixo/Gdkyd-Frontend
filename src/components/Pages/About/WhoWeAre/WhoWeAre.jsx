import Image from "next/image";
import img from "../../../../../public/assets/about-img/who-we-are.jpg";
import { useTranslations } from "next-intl";

const WhoWeAre = () => {
  const t = useTranslations("AboutPage");
  return (
    <div className="my-6 md:my-14">
      <div className="main_container">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-3 md:gap-5">
          <div className="left_content_we">
            <h2 className="text-2xl md:text-3xl font-bold text-[#070F11] my-4">
              {t("WhoWeAre.title")}
            </h2>
            <p className="my-2"> {t(`WhoWeAre.des1`)}</p>
            <p className="my-2">   {t(`WhoWeAre.des2`)} {t(`WhoWeAre.des3`)}</p>
            {/* <p className="my-2">   {t(`WhoWeAre.des3`)}</p> */}
            <p className="my-2">   {t(`WhoWeAre.des4`)}</p>
          </div>
          <div className="right_img_we">
            <Image
              width={800}
              src={img}
              alt={"Who-we-are-image"}
              className="w-full rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
