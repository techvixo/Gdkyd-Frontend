import BlogShow from "../../components/Pages/Blog/BlogShow/BlogShow";
import GetInTouch from "../../components/Shared/GetInTouch/GetInTouch";
import Subscribe from "../../components/Pages/Contact/Subscribe/Subscribe";
import BlogBanner from "../../components/Pages/Blog/BlogBanner/BlogBanner";
import TopGap from "../../components/Shared/TopGap/TopGap";
import getAllBlogs from "../../lib/getAllBlogs"
import { getLocale } from "next-intl/server";
import getBanners from "../../lib/getBanner"
export const metadata = {
  title: "KYD - Blog",
  description: "Expert Manufacturer of Non-Woven Processing Equipment | Guangdong KYD Precision Machinery Co., Ltd.",
};
export default async function Page() {
  const blogsData = await getAllBlogs()
  const banner = await getBanners("blog")
  const locale = await getLocale();
  // console.log("blogsData:", blogsData.data)
  return (
    <div className="">
      <TopGap></TopGap>
     <BlogBanner locale={locale} banner={banner?.data}></BlogBanner>
      <BlogShow blogs={blogsData.data} locale={locale}></BlogShow>
      <Subscribe></Subscribe>
      <GetInTouch></GetInTouch>
    </div>
  );
}
