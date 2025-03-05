import Portfolio from "../../components/Pages/Portfolios/Portfilio";
import FindProducts from "../../components/Shared/FindProducts/FindProducts";
import ShareBanner from "../../components/Shared/ShareBanner/ShareBanner";
import TopGap from "../../components/Shared/TopGap/TopGap";
import { getLocale } from "next-intl/server";
import getBanners from "../../lib/getBanner"
import { BASEURL } from "../../../Constant";
export const metadata = {
  title: "Guangdong KYD Company Portfolio | Precision Mask Making & Medical Equipment Manufacturing",
  description: "See our work at Guangdong KYD Company, a trusted medical equipment manufacturer and face mask machine supplier. Our portfolio highlights high-quality non-woven machinery and innovative production solutions worldwide.",
};
export default async function Page() {
  const banner = await getBanners("portfolio")
  const locale = await getLocale();
  return (
    <div className="">
      <TopGap></TopGap>
      <ShareBanner
        bannerBg={`${banner?.data?.banner_image}`}
        title={locale == "en" ? banner?.data?.title_en
          : banner?.data?.title_cn
        }
        des={locale == "en" ? banner?.data?.description_en
          : banner?.data?.description_cn
        }
        link={"portfolio"}
      ></ShareBanner>
      <Portfolio></Portfolio>
      <FindProducts></FindProducts>
    </div>
  );
}
