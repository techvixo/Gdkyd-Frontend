import ServiceBanner from "../../../../components/Pages/Servces/ServiceBanner/ServiceBanner";
import ServiceDetails from "../../../../components/Pages/Servces/ServiceDetails/ServiceDetails";
import TopGap from "../../../../components/Shared/TopGap/TopGap";
import getSpecificProduct from "../../../../lib/getSpecificProduct";
import getBanners from "../../../../lib/getBanner";
import { getLocale } from "next-intl/server";
import { BASEURL } from "../../../../../Constant";

export async function generateMetadata({ params }) {
  // read route params
  const id = (await params).serviceId
  const product = await getSpecificProduct(id)
 
  return {
    title: product?.data?.title_en,
    description: product?.data?.subTitle_en,
  }
}


export default async function Page({params}) {
  // const productId = "673cc31e7f4e54dc479bd6d2"
  const product = await getSpecificProduct(params?.serviceId)
  const banner = await getBanners("services")
  const locale = await getLocale();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product?.data?.title_en,
    image:  `${BASEURL}/${product?.data?.images[0]}`,
    description: product?.data?.subTitle_en,
  }
  
  return (
    <div className="">
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopGap></TopGap>
      <ServiceBanner
        bannerBg={`${banner?.data?.banner_image}`}
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
