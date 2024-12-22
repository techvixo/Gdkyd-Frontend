// import img from "../../../../../public/assets/portfolio-img/portfolio.png";
import PortfolioCard from "./PortfolioCard";
import getPortfolioImage from "../../../../lib/getPortfolioImage";
import DescriptionText from "./DescriptionText";
import { getLocale } from "next-intl/server";

const ImagePortfolio = async () => {
  const portfolioImages = await getPortfolioImage();
  const locale = await getLocale();


  // console.log("portfolioImages:", portfolioImages.data)
  return (
    <div className="my-5 md:my-14">
      <div className="main_container">
        <DescriptionText></DescriptionText>
        <div className="flex flex-col md:flex-row gap-3 md:gap-5">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-y-5 md:gap-y-10">
            {portfolioImages?.data?.map((portfolio, i) => {
              return (
                <PortfolioCard key={i} locale={locale} portfolio={portfolio}></PortfolioCard>
              );
            })}
          </div>
          {/* <div className="w-full md:w-1/5">
            <h4>Filters</h4>
          </div>
          <div className="w-full md:w-4/5 grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-y-5 md:gap-y-10">
            {portfolioImages?.data?.map((portfolio, i) => {
              return (
                <PortfolioCard key={i} locale={locale} portfolio={portfolio}></PortfolioCard>
              );
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ImagePortfolio;
