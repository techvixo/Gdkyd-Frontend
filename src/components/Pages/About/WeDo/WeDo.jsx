import { useTranslations } from "next-intl";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const WeDo = () => {
  const t = useTranslations('AboutPage');
  return (
    <div className="my-6 md:my-14 bg">
      <div className="main_container bg-[#E4E5DF] rounded md:rounded-md p-4 md:p-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
        {t(`WhatWeDo.title`)}
        </h2>
        <div className="top_content">
          <p className="my-2">
          {t(`WhatWeDo.description1`)}
          </p>
        </div>
        <div className="flex flex-col gap-3 md:gap-5 pt-2 md:pt-5">
          <p className="flex gap-3">
            <span className="pt-2">
              <MdOutlineKeyboardDoubleArrowRight />
            </span>{" "}
            <span>{t(`WhatWeDo.list.para1`)}</span>
          </p>
          <p className="flex gap-3">
            <span className="pt-2">
              <MdOutlineKeyboardDoubleArrowRight />
            </span>{" "}
            <span>{t(`WhatWeDo.list.para2`)}</span>
          </p>
          <p className="flex gap-3">
            <span className="pt-2">
              <MdOutlineKeyboardDoubleArrowRight />
            </span>{" "}
            <span>{t(`WhatWeDo.list.para3`)}</span>
          </p>
          <p className="flex gap-3">
            <span className="pt-2">
              <MdOutlineKeyboardDoubleArrowRight />
            </span>{" "}
            <span>{t(`WhatWeDo.list.para4`)}</span>
          </p>
          <p className="flex gap-3">
            <span className="pt-2">
              <MdOutlineKeyboardDoubleArrowRight />
            </span>{" "}
            <span>{t(`WhatWeDo.list.para5`)}</span>
          </p>
        </div>
        <div className="top_content">
          <p className="my-2">
          {t(`WhatWeDo.description2`)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeDo;
