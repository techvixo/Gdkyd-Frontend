import { useTranslations } from "next-intl";
import ShareBanner from "../../../Shared/ShareBanner/ShareBanner";
import bannerImg from "../../../../../public/assets/banner-img.png";
import { BASEURL } from "../../../../../Constant";

const AboutBanner = ({ banner, locale }) => {
    const t = useTranslations('AboutPage');
    
  return (
    <div>
        <ShareBanner
         bannerBg={`${BASEURL}/${banner?.banner_image}`}
         title={locale == "en" ? banner?.title_en
           : banner?.title_cn
         }
         des={locale == "en" ? banner?.description_en
           : banner?.description_cn
         }
          link={"about"}
          ></ShareBanner>
    </div>
  )
}

export default AboutBanner