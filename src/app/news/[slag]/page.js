import BlogDetails from "../../../components/Pages/Blog/BlogDetails/BlogDetails";
import TopGap from "../../../components/Shared/TopGap/TopGap";
import getSingleBlog from "../../../lib/getSingleBlog";

export async function generateMetadata({ params }) {
  // read route params
  const id = (await params).slag
  const blog = await getSingleBlog(id);
 
  return {
    title: blog?.data?.name_en,
    description: blog?.data?.description_en,
  }
}
 

export default function Page({params}) {
  // console.log("VVVVVVVVVVVVVVVV:", params.slag);
  return (
    <div className="">
      <TopGap></TopGap>
      <BlogDetails id={params?.slag}></BlogDetails>
    </div>
  );
}
