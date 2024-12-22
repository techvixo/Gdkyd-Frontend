import ServiceBanner from "./ServiceBanner";
import { BASEURL } from '../../../../../Constant';

const ServiceBannerWrapper = ({ banner, locale }) => {
  // console.log("banner:", banner)
  return (
    <ServiceBanner
      bannerBg={`${BASEURL}/${banner?.banner_image}`}
      title={locale == "en" ? banner?.title_en
        : banner?.title_cn
      }
      des={locale == "en" ? banner?.description_en
        : banner?.description_cn
      }
      link={"services"}
    ></ServiceBanner>
  )
}

export default ServiceBannerWrapper