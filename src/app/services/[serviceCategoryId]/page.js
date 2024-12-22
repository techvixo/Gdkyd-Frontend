import FAQ from "../../../components/Pages/Home/FAQ/FAQ";
import PageMenu from "../../../components/Pages/Portfolios/PageMenu/PageMenu";
import AllServices from "../../../components/Pages/Servces/AllServices/AllServices";
import MachinesCenter from "../../../components/Pages/Servces/MachinsCenter/MachinsCenter";
import ServiceBanner from "../../../components/Pages/Servces/ServiceBanner/ServiceBanner";
import ServiceProcesses from "../../../components/Pages/Servces/ServiceProcesses/ServiceProcesses";
import WintechStandard from "../../../components/Pages/Servces/WintechStandard/WintechStandard";
import GetInTouch from "../../../components/Shared/GetInTouch/GetInTouch";
import TopGap from "../../../components/Shared/TopGap/TopGap";
import getSpecificCategory from "../../../lib/getSpecificCategory"
import ServiceMenu from "../../../components/Pages/Servces/ServiceMenu";
import getBanners from "../../../lib/getBanner"
import { getLocale } from "next-intl/server";
import { BASEURL } from "../../../../Constant";

export default async function Page({params}) {
  const categoryProducts = await getSpecificCategory(params?.serviceCategoryId);
  const banner = await getBanners("services")
  const locale = await getLocale();
  return (
    <div className="">
      <TopGap></TopGap>
      <ServiceBanner
        bannerBg={`${BASEURL}/${banner?.data?.banner_image}`}
        title={locale == "en" ? banner?.data?.title_en
          : banner?.data?.title_cn
        }
        des={locale == "en" ? banner?.data?.description_en
          : banner?.data?.description_cn
        }
        link={"/services"}
      ></ServiceBanner>
      {/* <PageMenu menus={menus}></PageMenu> */}
      <ServiceMenu></ServiceMenu>
      <AllServices locale={locale} products={categoryProducts?.data?.products}></AllServices>
      <ServiceProcesses></ServiceProcesses>
      <WintechStandard></WintechStandard>
      <MachinesCenter></MachinesCenter>
      <FAQ></FAQ>
      <GetInTouch></GetInTouch>
    </div>
  );
}
