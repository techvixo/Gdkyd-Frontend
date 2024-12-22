import Banner from "./Banner/Banner"
import FindProducts from "../../Shared/FindProducts/FindProducts"
import GetInTouch from "../../Shared/GetInTouch/GetInTouch"
import CngMachines from "./CNGMachins/CngMachins"
import CounterSection from "./CounterSection/CounterSection"
import CustomPartsBanner from "./CustomPartsBanner/CustomPartsBanner"
import FAQ from "./FAQ/FAQ"
import FeaturedVideos from "./FeaturedVideos/FeaturedVideos"
import FeaturedVideoShow from "./FeaturedVideos/FeaturedVideoShow"
import HowWorks from "./HowWorks/HowWorks"
import ClientTestimonial from "./Testimonial/Testimonial"
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs"
import getHomePageData from '../../../lib/getHomePageData';
import getHomeBannerData from '../../../lib/getHomeBannerData';
import { getLocale } from "next-intl/server"

const HomePage = async () => {
  const homeBanner = await getHomeBannerData()
  const homePageData = await getHomePageData()
  const locale = await getLocale();
  // console.log("Home_Page_Data:",homeBanner?.data)
  return (
    <div>
      <Banner locale={locale} data={homeBanner?.data}></Banner>
      <CngMachines locale={locale} machines={homePageData?.data?.cnc_machine_parts}></CngMachines>
      <CustomPartsBanner></CustomPartsBanner>
      <WhyChooseUs></WhyChooseUs>
      <CounterSection></CounterSection>
      <HowWorks></HowWorks>
      {/* <FeaturedVideos locale={locale} videos={homePageData?.data?.featured_video}></FeaturedVideos> */}
      <FeaturedVideoShow locale={locale} videos={homePageData?.data?.featured_video}></FeaturedVideoShow>
      <ClientTestimonial></ClientTestimonial>
      <FAQ></FAQ>
      <GetInTouch></GetInTouch>
      <FindProducts></FindProducts>
    </div>
  )
}

export default HomePage