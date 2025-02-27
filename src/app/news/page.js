import BlogShow from "../../components/Pages/Blog/BlogShow/BlogShow";
import GetInTouch from "../../components/Shared/GetInTouch/GetInTouch";
import Subscribe from "../../components/Pages/Contact/Subscribe/Subscribe";
import BlogBanner from "../../components/Pages/Blog/BlogBanner/BlogBanner";
import TopGap from "../../components/Shared/TopGap/TopGap";
import getAllBlogs from "../../lib/getAllBlogs"
import { getLocale } from "next-intl/server";
import getBanners from "../../lib/getBanner"
export const metadata = {
  title: "Guangdong KYD Company Blog | Insights on Mask-Making Machines & Non-Woven Equipment",
  description: "Stay informed with the Guangdong KYD Company blog! As a top medical equipment manufacturer and face mask machine supplier, we share the latest trends, innovations, and insights in non-woven production.",
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
      <GetInTouch locale={locale}></GetInTouch>
    </div>
  );
}
