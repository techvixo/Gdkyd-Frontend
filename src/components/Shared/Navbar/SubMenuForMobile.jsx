import Link from 'next/link'

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import MenuLink from './MenuLink';

const SubMenuForMobile = ({ setNavToggle, openSubMenus, allCategories, locale }) => {

  return (
    <ul
      className={`mobile_sub_nav_men flex flex-col text-[13px] font-normal text-[#111547] w-full 
         ${openSubMenus
          ? "open pt-3" : ""
        }
      `}
    >
    <li
      className="flex items-center gap-2 hover:bg-white py-3"
    >
      <span className="text-primary">
        <MdOutlineKeyboardDoubleArrowRight />
      </span>
      <MenuLink
        onClick={() => setNavToggle(false)}
        href={"/product"}
        activeClassName="text-secondary font-semibold"
        exact={"/product" === "/"}
      >
        {"All Products"}
      </MenuLink>
    </li>
      {allCategories?.slice(0, 4)?.map((subService, i) => {
        return (
          <li
            key={i}
            className="flex items-center gap-2 hover:bg-white py-3"
          >
            <span className="text-primary">
              <MdOutlineKeyboardDoubleArrowRight />
            </span>
            <MenuLink
              onClick={() => setNavToggle(false)}
              href={`/product/${subService?._id}`}
              activeClassName="text-secondary font-semibold"
              exact={`/product/${subService?._id}` === "/"}
            >
              {subService?.name_en}
            </MenuLink>
          </li>
        )
      })
      }
    </ul>
  )
}

export default SubMenuForMobile