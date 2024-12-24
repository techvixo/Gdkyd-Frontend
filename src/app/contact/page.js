import ContactBox from "../../components/Pages/Contact/ContactUsBox/ContactBox";
import MapLocation from "../../components/Pages/Contact/MapLocation/MapLocation";
import Subscribe from "../../components/Pages/Contact/Subscribe/Subscribe";
import ShareBanner from "../../components/Shared/ShareBanner/ShareBanner";
import TopGap from "../../components/Shared/TopGap/TopGap";
import getBanners from "../../lib/getBanner";
import { BASEURL } from "../../../Constant";
import { getLocale } from "next-intl/server";
export const metadata = {
  title: "KYD - Contact",
  description: "Expert Manufacturer of Non-Woven Processing Equipment | Guangdong KYD Precision Machinery Co., Ltd.",
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
      <ContactBox></ContactBox>
      <MapLocation></MapLocation>
      <Subscribe></Subscribe>
    </div>
  );
}
