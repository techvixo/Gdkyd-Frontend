import Certificates from "../../components/Pages/About/Certificates/Certificates";
import Facilities from "../../components/Pages/About/Facilities/Facilities";
import OurTeam from "../../components/Pages/About/OutTeam/OurTeam";
import WeDo from "../../components/Pages/About/WeDo/WeDo";
import WhoWeAre from "../../components/Pages/About/WhoWeAre/WhoWeAre";
import AboutBanner from "../../components/Pages/About/AboutBanner/AboutBanner";
import ClientTestimonial from "../../components/Pages/Home/Testimonial/Testimonial";
import PageMenu from "../../components/Pages/Portfolios/PageMenu/PageMenu";
import AboutMenuTab from "../../components/Pages/About/AboutMenuTab";
import FindProducts from "../../components/Shared/FindProducts/FindProducts";
import GetInTouch from "../../components/Shared/GetInTouch/GetInTouch";
import TopGap from "../../components/Shared/TopGap/TopGap";
import getAllTeamMember from "../../lib/getAllTeamMember";
import getCertificates from "../../lib/getCertificates";
import getPartners from "../../lib/getPartners";
import getBanners from "../../lib/getBanner";
import { getLocale } from "next-intl/server";
import getHonors from "../../lib/getHonors";
export const metadata = {
  title: "KYD - About",
  description: "Expert Manufacturer of Non-Woven Processing Equipment | Guangdong KYD Precision Machinery Co., Ltd.",
};

export default async function Page() {
  const banner = await getBanners("about_us")
  const teamMembers = await getAllTeamMember()
  const certificatesData = await getCertificates()
  const partnerData = await getPartners()
  const honorsData = await getHonors()
  const locale = await getLocale();
// console.log("certificatesData:", partnerData.data);
  return (
    <div className="">
      <TopGap></TopGap>
      <AboutBanner  locale={locale} banner={banner?.data}></AboutBanner>
      <AboutMenuTab locale={locale} ourPartners={partnerData?.data} ourHonors={honorsData?.data}></AboutMenuTab>
      <WeDo></WeDo>
      <Facilities></Facilities>
      <OurTeam locale={locale} ourTeamMembers={teamMembers?.data}></OurTeam>
      <Certificates locale={locale} certificatesData={certificatesData?.data}></Certificates>
      <ClientTestimonial></ClientTestimonial>
      <GetInTouch></GetInTouch>
      <FindProducts></FindProducts>
    </div>
  );
}
