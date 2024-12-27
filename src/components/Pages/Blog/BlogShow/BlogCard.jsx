import Image from "next/image";
import Link from "next/link";
import { BASEURL } from "../../../../../Constant";

const BlogCard = ({ blog, locale }) => { 
  // Extract the required description safely
  const description =
    locale === "en"
      ? blog?.description_en && Array.isArray(blog?.description_en)
        ? blog.description_en[0]
        : ""
      : blog?.description_cn && Array.isArray(blog?.description_cn)
      ? blog.description_cn[0]
      : "";
  return (
    <div>
      <div className="blog_img w-full pb-2">
        <Image
          width={600}
          height={400}
          src={`${BASEURL}/${blog?.heading_image}`}
          alt={locale == "en" ? blog?.name_en : blog?.name_cn}
          className="w-full rounded-md h-52 md:h-64 object-cover"
        />
      </div>
      <h4 className="text-[#064a9b] my-2 text-lg md:text-2xl font-semibold capitalize">
        {locale == "en" ? blog?.name_en?.slice(0, 40) + ".." : blog?.name_cn?.slice(0, 40) + ".."}
      </h4>
      <p className="text-sm md:text-base text-[#606060] my-2 mb-4 md:mb-7">
      {description?.slice(0, 150) + ".." || "No description available."}
      </p>
      <Link
        href={`/news/${blog?._id}`}
        className="text-[#064a9b] hover:text-white hover:bg-primary transition text-sm p-2 md:p-3 px-5 md:px-7 cursor-pointer rounded-full font-semibold blog_border "
      >
        READ MORE
      </Link>
    </div>
  );
};

export default BlogCard;
