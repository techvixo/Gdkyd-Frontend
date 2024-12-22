import PortfolioCard from "../PortfolioCard";
import getPortfolioImage from "../../../../../lib/getPortfolioImage";
import { getLocale } from "next-intl/server";

const RelatedImagePortfolio = async ({slag}) => {
  const relatedPortfolioImages = await getPortfolioImage();
  const locale = await getLocale();
  const isImage = slag;

  // Filter out the current product from related products
  const filteredPortfolios = relatedPortfolioImages?.data?.filter(
    (relatedImage) => relatedImage?._id !== isImage
  );
  // console.log("PPPPPPPPPPPPPPPPP:", filteredPortfolios);
  return (
    <div className="my-5 md:my-14">
      <div className="main_container">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
          Other Portfolio
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-y-5 md:gap-y-10">
          {filteredPortfolios?.map((portfolio, i) => {
            return (
              <PortfolioCard key={i} locale={locale} portfolio={portfolio}></PortfolioCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedImagePortfolio;
