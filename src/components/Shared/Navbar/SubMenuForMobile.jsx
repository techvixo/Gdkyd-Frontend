import Link from 'next/link'

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import MenuLink from './MenuLink';

const SubMenuForMobile = ({ setNavToggle, openSubMenus }) => {
  const subMenu = [
    {
      serviceName: "CNC Machining Services",
      path: "/cnc-machining",
      subServiceName: [
        {
          path: "/cnc-turing",
          title: "CNC Turning",
        },
        {
          path: "/cnc-turing",
          title: "CNC Milling",
        },
        {
          path: "/cnc-turing",
          title: "Complex Mill-Turning",
        },
        {
          path: "/cnc-turing",
          title: "5-Axis Machining",
        },
      ]
    },
    {
      serviceName: "Materials Machined",
      path: "/cnc-machining",
      subServiceName: [
        {
          path: "/cnc-turing",
          title: "Metals",
        },
        {
          path: "/cnc-turing",
          title: "Plastics",
        },
        {
          path: "/cnc-turing",
          title: "Complex Mill",
        },
        {
          path: "/cnc-turing",
          title: " Machining",
        },
      ]
    },
    {
      serviceName: "Surface Finishing Services",
      path: "/cnc-machining",
      subServiceName: [
        {
          path: "/cnc-turing",
          title: "CNC Turning",
        },
        {
          path: "/cnc-turing",
          title: "CNC Milling",
        },
        {
          path: "/cnc-turing",
          title: "Complex Mill-Turning",
        },
        {
          path: "/cnc-turing",
          title: "5-Axis Machining",
        },
      ]
    },
  ]
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
        href={"/services"}
        activeClassName="text-secondary font-semibold"
        exact={"/services" === "/"}
      >
        {"All Services"}
      </MenuLink>
    </li>
      {subMenu?.slice(0, 4)?.map((subService, i) => {
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
              href={`/services${subService?.path}`}
              activeClassName="text-secondary font-semibold"
              exact={`/services${subService?.path}` === "/"}
            >
              {subService?.serviceName}
            </MenuLink>
          </li>
        )
      })
      }
    </ul>
  )
}

export default SubMenuForMobile