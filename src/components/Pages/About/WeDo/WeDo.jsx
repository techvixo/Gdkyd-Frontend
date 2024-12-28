import { useTranslations } from "next-intl";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const WeDo = () => {
  const t = useTranslations("AboutPage");
  return (
    <div className="my-6 md:my-14 bg">
      <div className="main_container bg-[#E4E5DF] rounded md:rounded-md p-4 md:p-8">
          {/* Section content  */}
          <div className="section_content">
          <h4 className="text-xl md:text-2xl font-bold text-[#070F11] my-3 md:my-5">
            {t(`OurPartner.title`)}
          </h4>
          <p className="my-2">{t(`OurPartner.description`)}</p>
        </div>
          {/* Section content  */}
          <div className="section_content">
          <h4 className="text-xl md:text-2xl font-bold text-[#070F11] my-3 md:my-5">
            {t(`WhatWeDo.title`)}
          </h4>
          <p className="my-2">{t(`WhatWeDo.description`)}</p>
        </div>
        {/* Section content  */}
        <div className="section_content">
          <h4 className="text-xl md:text-2xl font-bold text-[#070F11] my-3 md:my-5">
            {t(`CoreValues.title`)}
          </h4>
          <div className="flex flex-col gap-1 md:gap-3 pt-2 ">
            <p className="flex gap-3">
              <span className="pt-2">
                <MdOutlineKeyboardDoubleArrowRight />
              </span>{" "}
              <span>{t(`CoreValues.list.para1`)}</span>
            </p>
            <p className="flex gap-3">
              <span className="pt-2">
                <MdOutlineKeyboardDoubleArrowRight />
              </span>{" "}
              <span>{t(`CoreValues.list.para2`)}</span>
            </p>
            <p className="flex gap-3">
              <span className="pt-2">
                <MdOutlineKeyboardDoubleArrowRight />
              </span>{" "}
              <span>{t(`CoreValues.list.para3`)}</span>
            </p>
            <p className="flex gap-3">
              <span className="pt-2">
                <MdOutlineKeyboardDoubleArrowRight />
              </span>{" "}
              <span>{t(`CoreValues.list.para4`)}</span>
            </p>
          </div>
        </div>
        
          {/* Section content  */}
          <div className="section_content">
          <h4 className="text-xl md:text-2xl font-bold text-[#070F11] my-3 md:my-5">
            {t(`Sustainability.title`)}
          </h4>
          <p className="my-2">{t(`Sustainability.description`)}</p>
        </div>
          {/* Section content  */}
          <div className="section_content">
          <h4 className="text-xl md:text-2xl font-bold text-[#070F11] my-3 md:my-5">
            {t(`Condition.title`)}
          </h4>
          <p className="my-2">{t(`Condition.description`)}</p>
        </div>
          {/* Section content  */}
          <div className="section_content">
          <h4 className="text-xl md:text-2xl font-bold text-[#070F11] my-3 md:my-5">
            {t(`Company.title`)}
          </h4>
          <p className="my-2">{t(`Company.description`)}</p>
        </div>
          {/* Section content  */}
          <div className="section_content">
          <h4 className="text-xl md:text-2xl font-bold text-[#070F11] my-3 md:my-5">
            {t(`Future.title`)}
          </h4>
          <p className="my-2">{t(`Future.description`)}</p>
        </div>
        {/* Section content  */}
        <div className="section_content">
          <h4 className="text-xl md:text-2xl font-bold text-[#070F11] my-3 md:my-5">
            {t(`OurService.title`)}
          </h4>
          <p className="my-2">{t(`OurService.description1`)}</p>
          <div className="flex flex-col gap-1 md:gap-3 pt-2 md:py-5">
            <p className="flex gap-3">
              <span className="pt-2">
                <MdOutlineKeyboardDoubleArrowRight />
              </span>{" "}
              <span>{t(`OurService.list.para1`)}</span>
            </p>
            <p className="flex gap-3">
              <span className="pt-2">
                <MdOutlineKeyboardDoubleArrowRight />
              </span>{" "}
              <span>{t(`OurService.list.para2`)}</span>
            </p>
          </div>
          <p className="my-2">{t(`OurService.description2`)}</p>
        </div>
      </div>
    </div>
  );
};

export default WeDo;
