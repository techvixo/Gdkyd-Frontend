import Image from "next/image"
import { BASEURL } from "../../../../../Constant"


const PartnerCard = ({part, locale}) => {
  return (
    <div className="bg-white  shadow overflow-hidden">
    <Image
    width={400}
    height={400}
      src={`${part?.image}`}
      alt={locale == "en" ? part?.name_en : part?.name_cn}
      className="w-full"
    />
    <div className="p-2 bg-[#FBFAFE]">
      <h3 className="text-xl md:p-2 capitalize font-semibold text-[#1A1A1A]">
      {locale == "en" ? part?.name_en : part?.name_cn}
      </h3>
    </div>
  </div>
  )
}

export default PartnerCard