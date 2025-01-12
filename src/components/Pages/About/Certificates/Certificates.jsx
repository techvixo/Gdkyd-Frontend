import Image from "next/image";
import { useTranslations } from "next-intl";
import { BASEURL } from "../../../../../Constant";

const Certificates = ({ certificatesData, locale }) => {
  const t = useTranslations('AboutPage');

  return (
    <div className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#2d3748] my-8 md:my-12">
          {t(`Certification.title`)}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 pt-6">
          {certificatesData?.map((item, i) => {
            return (
              <div key={i} className="flex flex-col justify-center items-center rounded-lg bg-white shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
                <div className="relative w-full h-72 md:h-96">
                  <Image
                    src={`${BASEURL}/${item?.image}`}
                    alt={locale === "en" ? item?.name_en : item?.name_cn}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="bg-[#064a9b] p-4 w-full text-center">
                  <h4 className="uppercase text-base md:text-lg text-white font-medium mb-2">
                    Certificate:
                  </h4>
                  <h4 className="capitalize text-lg md:text-xl font-semibold text-white">
                    {locale === "en" ? item?.name_en : item?.name_cn}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
