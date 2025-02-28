// "use client"
import img from "../../../../../public/assets/about-img/team/team-profile.png";
import Image from "next/image";
import { BsBagCheck } from "react-icons/bs";
import { IoLanguageOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { BASEURL } from "../../../../../Constant";

const OurTeam = ({ourTeamMembers, locale}) => {
  const data = [
    {
      id: 1,
      img: img,
      name: "Arafat Jaman Chowdhury",
      post: "Engineer",
      exp: "08 years Experience",
      lang: "English, Hindi",
      address: "Badda, Bangladesh",
      edu: "United International University",
      link: "/",
    },
    {
      id: 1,
      img: img,
      name: "Arafat Jaman Chowdhury",
      post: "Engineer",
      exp: "08 years Experience",
      lang: "English, Hindi",
      address: "Badda, Bangladesh",
      edu: "United International University",
      link: "/",
    },
    {
      id: 1,
      img: img,
      name: "Arafat Jaman Chowdhury",
      post: "Engineer",
      exp: "08 years Experience",
      lang: "English, Hindi",
      address: "Badda, Bangladesh",
      edu: "United International University",
      link: "/",
    },
    {
      id: 1,
      img: img,
      name: "Arafat Jaman Chowdhury",
      post: "Engineer",
      exp: "08 years Experience",
      lang: "English, Hindi",
      address: "Badda, Bangladesh",
      edu: "United International University",
      link: "/",
    },
    {
      id: 1,
      img: img,
      name: "Arafat Jaman Chowdhury",
      post: "Engineer",
      exp: "08 years Experience",
      lang: "English, Hindi",
      address: "Badda, Bangladesh",
      edu: "United International University",
      link: "/",
    },
    {
      id: 1,
      img: img,
      name: "Arafat Jaman Chowdhury",
      post: "Engineer",
      exp: "08 years Experience",
      lang: "English, Hindi",
      address: "Badda, Bangladesh",
      edu: "United International University",
      link: "/",
    },
  ];
  const t = useTranslations('AboutPage');
  const keys = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
  // const images = [img1, img2, img3, img4];
  // console.log("ourTeamMembers;", ourTeamMembers);
  
  return (
    <div className="py-4 md:py-10">
      <div className="main_container">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:mb-7">
        {t(`OurTeam.title`)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 pt-2">
          {ourTeamMembers?.map((item, i) => {
            return (
              <div
                key={i}
                className="shadow md:shadow-lg p-3 md:p-5 rounded md:rounded-md"
              >
                <div className="top flex gap-2 border-b-2 pb-2">
                  <div className="img w-1/3 pr-2">
                    <Image
                      width={100}
                      height={100}
                      src={`${item?.image}`}
                      alt={locale == "en" ? item?.name_en : item?.name_cn}
                      className="w-full rounded-full h-full object-cover"
                    />
                  </div>
                  <div className="rr">
                    <h6 className="capitalize font-semibold text-md text-[#29367D]">
                    {locale == "en" ? item?.name_en : item?.name_cn}
                    </h6>
                    <span className="text-[#606060] text-sm ">
                    {locale == "en" ? item?.role : item?.role}
                    </span>
                    <p className="flex items-center gap-1 text-[#60606082] text-sm my-1"> <span className="text-[#AEAEAE] font-semibold"><BsBagCheck /></span><span>
                    {locale == "en" ? item?.experience_en : item?.experience_cn}
                    </span></p>
                    <p className="flex items-center gap-1 text-[#60606082] text-sm my-1"> <span className="text-[#AEAEAE] font-semibold"><IoLanguageOutline /></span><span>
                      {
                        item?.language?.map((lng, i) => {
                          return <span key={i}>{lng}</span>
                        })
                      }
                    </span></p>
                  </div>
                </div>
                <div className="my-2">
                  <p className="flex items-center gap-2 text-[#AEAEAE] text-sm my-1 font-semibold"> <span className="text-[#676767] font-semibold"><CiLocationOn /></span><span>
                  {locale == "en" ? item?.address_en : item?.address_cn}
                  </span></p>
                  <p className="flex items-center gap-2 text-[#AEAEAE] text-sm my-1 font-semibold"> <span className="text-[#AEAEAE] font-semibold"><FaGraduationCap /></span><span>
                  {locale == "en" ? item?.university_en : item?.university_cn}
                    </span></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
