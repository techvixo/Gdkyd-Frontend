
import VideoPortfolio from "../../../components/Pages/Portfolios/VideoPortfolio/VideoPortfolio";
import FindProducts from "../../../components/Shared/FindProducts/FindProducts";
import ShareBanner from "../../../components/Shared/ShareBanner/ShareBanner";
import TopGap from "../../../components/Shared/TopGap/TopGap";
import bannerImg from "../../../../public/assets/banner-img.png"
import PageMenu from "../../../components/Pages/Portfolios/PageMenu/PageMenu";
import getBanners from "../../../lib/getBanner";
import getHomePageData from "../../../lib/getHomePageData";
import { getLocale } from "next-intl/server";
import { BASEURL } from "../../../../Constant";

export default async function Page() {
  const banner = await getBanners("portfolio")
  const videos = await getHomePageData();
  const locale = await getLocale();
  const menus = [
    {
      id: 1,
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      id: 1,
      name: "Video",
      link: "/portfolio/video",
    }
  ];
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
        }
        link={"portfolio"}
      ></ShareBanner>
      <PageMenu menus={menus}></PageMenu>
      <VideoPortfolio locale={locale} videos={videos?.data}></VideoPortfolio>
      <FindProducts></FindProducts>
    </div>
  );
}
