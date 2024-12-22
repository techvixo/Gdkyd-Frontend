import Navbar from "./Navbar";
import getAllCategories from "../../../lib/getAllCategories";
import { getLocale } from "next-intl/server";

const NavbarWrap = async () => {
        const allCategories = await getAllCategories()
        const locale = await getLocale();
  return <Navbar locale={locale} allCategories={allCategories?.data}></Navbar>;
};

export default NavbarWrap;
