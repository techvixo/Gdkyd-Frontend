import Image from "next/image"
import { BASEURL } from "../../../../../Constant";


const MachineCard = ({ part, locale }) => {
  const { title_cn, title_en, image } = part;
  // console.log(part)
  return (
    <div className="px-2 mb-5">
      <div className="bg-white rounded-t-lg shadow overflow-hidden">
        <Image
          width={400}
          height={400}
          src={`${BASEURL}/${image}`}
          alt={locale == "en" ? title_en : title_cn}
          className="w-full h-64 object-cover"
        />
        <div className="p-4 bg-[#FBFAFE]">
          <h3 className="text-xl md:my-2 capitalize font-semibold text-[#1A1A1A]">{locale == "en" ? title_en : title_cn}</h3>
        </div>
      </div>
    </div>
  )
}

export default MachineCard