import { useTranslations } from "next-intl";
// import img from "../../../../../public/assets/blog-img/blog.png";
import Image from "next/image";
import notFoundImg from "../../../../../public/assets/services/product-not-found.png";
import BlogCard from "../BlogShow/BlogCard";

const RelatedBlogs = ({ blogs, locale }) => {
  const t = useTranslations("Blog");
  return (
    <div className="my-5 md:my-14">
      <div className="main_container">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
          {t(`BlogDetail.title`)}
        </h2>
        {blogs?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {blogs.map((blog, i) => {
              return <BlogCard key={i} locale={locale} blog={blog}></BlogCard>;
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-5 items-center py-5">
            <h3 className="text-xl md:text-2xl font-bold text-gray-500 text-center">
              Blogs Not Found!
            </h3>
            <Image
              src={notFoundImg}
              alt="not-found-image"
              width={200}
              className="w-16 md:w-24"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RelatedBlogs;
