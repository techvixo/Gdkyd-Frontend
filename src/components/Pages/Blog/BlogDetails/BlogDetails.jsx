import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Subscribe from "../../Contact/Subscribe/Subscribe";
import RelatedBlogs from "../RelatadeBlog/RelatedBlogs";
import GetInTouch from "../../../Shared/GetInTouch/GetInTouch";
import getSingleBlog from "../../../../lib/getSingleBlog";
import getAllBlogs from "../../../../lib/getAllBlogs";
import { BASEURL } from "../../../../../Constant";
import { getLocale } from "next-intl/server";

const BlogDetails = async ({id}) => {
  const blog = await getSingleBlog(id);
  const relatedBlogs = await getAllBlogs()
  const locale = await getLocale();
  const isBlog = id;

  // Filter out the current Blog from related blogs
  const filterBlogs = relatedBlogs?.data?.filter(
    (relatedBlog) => relatedBlog?._id !== isBlog
  );
  // console.log("blogGGGGGGGGGGGGGGGGGGG:", blog);
  return (
    <div>
      <div className="blog_detail_top bg-[#064a9b1A] py-3 md:py-5">
        <div className="main_container">
          <p className="flex items-center gap-2 md:font-semibold text-sm">
            <span>Home</span>
            <span>
              <IoIosArrowForward />
            </span>
            <Link className="capitalize" href={"/blog"}>
              Blog
            </Link>
            <span>
              <IoIosArrowForward />
            </span>
            <span>{"Blog single details"}</span>
          </p>
          <h2 className="text-xl md:text-2xl font-bold uppercase text-[#064a9b] ">
            {locale == "en" ? blog?.data?.name_en : blog?.data?.name_cn}
          </h2>
        </div>
      </div>
      <div className="main_container">
        <div className="py-4 md:py-7">
          <Image
            width={1000}
            height={600}
            src={`${blog?.data?.heading_image}`}
            // alt={locale == "en" ? product?.title_en : product?.title_en}
            alt={"Blog detail image here.."}
            className="w-full"
          />
        </div>
        {locale == "en" ? (
          <div className="blog_para">
            {blog?.data?.description_en?.map((des, i) => {
              return (
                <p
                  key={i}
                  className="text-sm md:text-base text-[#606060] my-3 md:my-8"
                >
                  {des}
                </p>
              );
            })}
          </div>
        ) : (
          <div className="blog_para">
            {blog?.data?.description_cn?.map((des, i) => {
              return (
                <p
                  key={i}
                  className="text-sm md:text-base text-[#606060] my-3 md:my-8"
                >
                  {des}
                </p>
              );
            })}
          </div>
        )}
        
      </div>
      <RelatedBlogs locale={locale} blogs={filterBlogs}></RelatedBlogs>
      <Subscribe></Subscribe>
      <GetInTouch locale={locale}></GetInTouch>
    </div>
  );
};

export default BlogDetails;
