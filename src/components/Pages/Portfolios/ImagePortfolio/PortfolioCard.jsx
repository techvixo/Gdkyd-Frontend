import Image from "next/image";
import Link from "next/link";
import { BASEURL } from "../../../../../Constant";

const PortfolioCard = ({ portfolio, locale }) => {
  return (
    <div className="relative">
      <div className="portfolio_img w-full">
        <Image
          width={400}
          height={600}
          src={`${portfolio?.image}`}
          alt={locale == "en" ? portfolio?.name_en : portfolio?.name_cn}
          className="w-full rounded-md"
        />
      </div>
      <div className="absolute bottom-[-20px] left-0 w-full flex items-center justify-center">
        <Link
          href={`/portfolio/${portfolio?._id}`}
          className="text-[#064a9b] shadow-md bg-white w-2/3 text-center hover:text-white hover:bg-primary transition text-sm p-2 md:p-3 px-5 md:px-7 cursor-pointer rounded-md font-semibold "
        >
        {locale == "en" ? portfolio?.name_en : portfolio?.name_cn}
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
