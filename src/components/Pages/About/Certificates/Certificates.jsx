// import img from "../../../../../public/assets/about-img/certificate.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { BASEURL } from "../../../../../Constant";

const Certificates = ({certificatesData, locale}) => {
  const t = useTranslations('AboutPage');
  // console.log(certificatesData);
  return (
    <div className="py-3 md:py-5">
      <div className="">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
      {t(`Certification.title`)}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 pt-2">
            {certificatesData?.map((item, i) => {
              return (
                <div key={i} className="">
                  <Image
                    width={500}
                    height={800}
                    src={`${BASEURL}/${item?.image}`}
                    alt={locale == "en" ? item?.name_en : item?.name_cn}
                    className="w-full h-60 md:h-80 object-cover"
                  />
                <div className="bg-[#064a9b] p-2 md:p-3">
                <h4 className="uppercase text-sm text-white">
                Certificate:
                  </h4>
                <h4 className="capitalize text-sm font-semibold  text-white">
                {locale == "en" ? item?.name_en : item?.name_cn}
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
