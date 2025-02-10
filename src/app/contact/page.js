import ContactBox from "../../components/Pages/Contact/ContactUsBox/ContactBox";
import MapLocation from "../../components/Pages/Contact/MapLocation/MapLocation";
import Subscribe from "../../components/Pages/Contact/Subscribe/Subscribe";
import ShareBanner from "../../components/Shared/ShareBanner/ShareBanner";
import TopGap from "../../components/Shared/TopGap/TopGap";
import getBanners from "../../lib/getBanner";
import { BASEURL } from "../../../Constant";
import { getLocale } from "next-intl/server";
export const metadata = {
  title: "Guangdong KYD Company Contact Information - Precision Machinery Leaders",
  description: "Get in touch with Guangdong KYD Company, a trusted medical equipment manufacturer and face mask machine supplier. Contact us for inquiries about our advanced non-woven production solutions and reliable customer support.",
};
export default async function Page() {
  const banner = await getBanners("contact_us")
  const locale = await getLocale();

  return (
    <div className="">
      <TopGap></TopGap>
      <ShareBanner
        bannerBg={`${BASEURL}/${banner?.data?.banner_image}`}
        title={locale == "en" ? banner?.data?.title_en
          : banner?.data?.title_cn
        }
        des={locale == "en" ? banner?.data?.description_en
          : banner?.data?.description_cn
        } link={"contact"}
      ></ShareBanner>
      <ContactBox locale={locale}></ContactBox>
      <MapLocation></MapLocation>
      <Subscribe></Subscribe>
    </div>
  );
}
