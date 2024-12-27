import ServiceFAQ from "../../components/Pages/Servces/ServiceFAQ/ServiceFAQ";
import ServiceMenu from "../../components/Pages/Servces/ServiceMenu";
import AllServices from "../../components/Pages/Servces/AllServices/AllServices";
import MachinesCenter from "../../components/Pages/Servces/MachinsCenter/MachinsCenter";
import ServiceBannerWrapper from "../../components/Pages/Servces/ServiceBanner/ServiceBannerWraper";
import ServiceProcesses from "../../components/Pages/Servces/ServiceProcesses/ServiceProcesses";
import WintechStandard from "../../components/Pages/Servces/WintechStandard/WintechStandard";
import GetInTouch from "../../components/Shared/GetInTouch/GetInTouch";
import TopGap from "../../components/Shared/TopGap/TopGap";
import getProducts from "../../lib/getProducts"
import getBanners from "../../lib/getBanner"
import { getLocale } from "next-intl/server";
export const metadata = {
  title: "KYD - Services",
  description: "Expert Manufacturer of Non-Woven Processing Equipment | Guangdong KYD Precision Machinery Co., Ltd.",
};
export default async function Page() {
  const allProducts = await getProducts()
  const banner = await getBanners("services")
  const locale = await getLocale();


  return (
    <div className="">
      <TopGap></TopGap>
      <ServiceBannerWrapper locale={locale} banner={banner?.data}></ServiceBannerWrapper>
      {/* <PageMenu menus={menus}></PageMenu> */}
      <ServiceMenu></ServiceMenu>
      <AllServices locale={locale} products={allProducts?.data}></AllServices>
      <ServiceProcesses></ServiceProcesses>
      <WintechStandard></WintechStandard>
      <MachinesCenter></MachinesCenter>
      <ServiceFAQ></ServiceFAQ>
      <GetInTouch></GetInTouch>
    </div>
  );
}
