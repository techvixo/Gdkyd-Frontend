import BlogDetails from "../../../components/Pages/Blog/BlogDetails/BlogDetails";
import TopGap from "../../../components/Shared/TopGap/TopGap";


export default function Page({params}) {
  // console.log("VVVVVVVVVVVVVVVV:", params.slag);
  return (
    <div className="">
      <TopGap></TopGap>
      <BlogDetails id={params?.slag}></BlogDetails>
    </div>
  );
}
