import ServiceBanner from "../../../../components/Pages/Servces/ServiceBanner/ServiceBanner";
import ServiceDetails from "../../../../components/Pages/Servces/ServiceDetails/ServiceDetails";
import TopGap from "../../../../components/Shared/TopGap/TopGap";
import getSpecificProduct from "../../../../lib/getSpecificProduct";
import getBanners from "../../../../lib/getBanner";
import { getLocale } from "next-intl/server";
import { BASEURL } from "../../../../../Constant";


export default async function Page({params}) {
  // const productId = "673cc31e7f4e54dc479bd6d2"
  const product = await getSpecificProduct(params?.serviceId)
  const banner = await getBanners("services")
  const locale = await getLocale();

  return (
    <div className="">
      <TopGap></TopGap>
      <ServiceBanner
        bannerBg={`${BASEURL}/${banner?.data?.banner_image}`}
        title={locale == "en" ? banner?.data?.title_en
          : banner?.data?.title_cn
        }
        des={locale == "en" ? banner?.data?.description_en
          : banner?.data?.description_cn
        }
        link={"/product"}
      ></ServiceBanner>
      <ServiceDetails  product={product?.data}></ServiceDetails>
    </div>
  );
}
