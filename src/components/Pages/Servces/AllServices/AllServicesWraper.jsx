
import { getLocale } from "next-intl/server";
import AllServices from "./AllServices";

const AllServicesWraper = async ({ products }) => {
  const locale = await getLocale();

  return (
   <AllServices locale={locale} products={products}></AllServices>
  );
};

export default AllServicesWraper;
