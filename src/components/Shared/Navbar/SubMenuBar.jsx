import Image from "next/image";
import NavLink from "./NavLink";

import logo from "../../../../public/assets/logo/logo.webp";
import Link from "next/link";
const SubMenuBar = ({ setNavToggle, allCategories, locale }) => {

  // console.log("HHHHHHHHHHHHHHHH:", allCategories);
  return (
    <div className="sub_nav_manu py-6 z-10 shadow-lg absolute top-28 left-0 right-0 w-full h-auto bg-primary p-1 text-white ">
      <div className="main_container">
        <div className="relative">
          <span className="absolute -z-50 top-[-20px] left-1/2  rotate-45  bg-primary h-5 w-5 "></span>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {allCategories?.slice(0, 4)?.map((service, i) => {
            return (
              <div key={i} className="mx-auto z-40 p-2">
                <NavLink
                  onClick={() => setNavToggle(false)}
                  href={`/product/${service?._id}`}
                // activeClassName=""
                // exact={service?.path === "/"}
                >
                  {/* {service?.name_en} */}
                  {locale == "en" ? service?.name_en : service?.name_cn}
                </NavLink>
                <ul className=" py-2">
                  {service?.products?.slice(0, 5)?.map((subService, i) => {
                    // Function to convert a string into a URL-friendly slug
                    const generateSlug = (text) => {
                      return text
                        .toLowerCase() // Convert to lowercase
                        .replace(/\s+/g, "-") // Replace spaces with hyphens
                        .replace(/[^\w-]+/g, ""); // Remove all non-word characters
                    };
                    const slug = generateSlug(service?.name_en);
                    return (
                      <li
                        key={i}
                        className="mx-auto z-40 hover:text-white capitalize font-normal hover:bg-[#50d6f730]  px-4 p-2"
                      >
                        <NavLink
                          onClick={() => setNavToggle(false)}
                          href={`/product/${slug}/${subService?._id}`}
                        // activeClassName=""
                        // exact={subService?.path === "/"}
                        >
                          {subService?.title_en}
                          {locale == "en" ? subService?.title_en : subService?.title_cn}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          {/* <div className="w-full flex items-center justify-center">
            <Link className="w-1/2" href={"/"}>
              <Image src={logo} alt="logo" width={200} className="w-full" />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SubMenuBar;
