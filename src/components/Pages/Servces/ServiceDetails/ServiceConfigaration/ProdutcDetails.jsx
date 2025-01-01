"use client"
import Link from "next/link";
import { useState } from "react";
import { FaCloudArrowDown } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";

const ProductDetails = ({configurations, product, locale, productInfo, aboutProduct}) => {
  const [activeTab, setActiveTab] = useState("introduction");
  // Check if configurations exist
  const configurationsArray = configurations
    ? Object.entries(configurations).map(([key, value]) => ({
        [key]: value,
      }))
    : null;
// console.log("RRRRRRRRRRRRRRRRRRr", product);
  return (
    <div className="py-3 md:py-5">
      {/* Tabs */}
      <div className="flex gap-2 border-b mb-2 md:mb-6">
        <button
          onClick={() => setActiveTab("introduction")}
          className={`px-4 py-2 font-semibold rounded-t-md text-sm cursor-pointer ${
            activeTab === "introduction"
               ? "bg-[#064a9b] text-white"
              : "bg-[#E4E5DF] text-[#333333]"
          }`}
        >
          Product Introduction
        </button>
        <button
          onClick={() => setActiveTab("related")}
          className={`px-4 py-2 font-semibold rounded-t-md text-sm cursor-pointer ${
            activeTab === "related"
              ? "bg-[#064a9b] text-white"
              : "bg-[#E4E5DF] text-[#333333]"
          }`}
        >
          Related Products
        </button>
      </div>

      {activeTab === "introduction" && (
        <div className="flex flex-col lg:flex-row gap-5 md:gap-10">
          {/* Left Section - Product Details */}
          <div className="w-full md:w-3/5">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 md:mb-4">{productInfo}: <span className="font-bold text-gray-900"> {locale == "en" ? product?.title_en : product?.title_cn}</span></h3>
            <ul className="space-y-1 md:space-y-2 text-gray-600">
            {configurationsArray ? (
              <ul className="space-y-1 md:space-y-2 text-gray-600">
                {configurationsArray.map((config, index) => (
                  <li key={index} className="capitalize">
                    {Object.keys(config)[0]}:{" "}
                    <span className="text-gray-800">
                      {Object.values(config)[0]}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-red-600">Configurations not found.</p>
            )}
              {/* <li>Detection Mode: <span className="text-gray-800">Automated</span></li>
              <li>Size: <span className="text-gray-800">Variable</span></li>
              <li>Voltage: <span className="text-gray-800">220V</span></li>
              <li>Power: <span className="text-gray-800">500W</span></li>
              <li>Pressure: <span className="text-gray-800">1500 PSI</span></li>
              <li>Yield: <span className="text-gray-800">95%</span></li>
              <li>Control Mode: <span className="text-gray-800">Automatic</span></li> */}
            </ul>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-700">{aboutProduct}:</h4>
              {/* <p className="text-gray-600 mt-2">
                Explore our comprehensive range of CNC machining services and products, including CNC turning, CNC milling, complex mill-turning, and 5-axis machining, tailored for diverse industries.
              </p> */}
              <p className="text-gray-600 mt-2">
              {locale == "en" ? product?.subTitle_en : product?.subTitle_cn}
              </p>
            </div>
          </div>

          {/* Right Section - Quote Box */}
          <div className="w-full md:w-2/5  flex items-center justify-center p-6 border-dashed border-2 border-gray-300 rounded-lg">
            <div className="text-center">
              <div className="flex justify-center space-x-4 mb-4 text-gray-600">
                <span className="text-3xl">🔩</span>
                <span className="text-3xl">⚙️</span>
                <span className="text-3xl">🛠️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Start A New Quote</h3>
              <p className="text-gray-500 mb-4 text-sm">STEP | STP | SLDPRT | IPT | PRT | SAT files</p>
             <Link href={"/contact"}>
             <button className="flex items-center gap-2 bg-gradient-to-r from-[#4177B7] to-[#86BCFC]  hover:bg-gradient-to-r hover:from-[#86BCFC] hover:to-[#4177B7] text-white px-6 py-2 rounded font-semibold transition duration-150">
               <span ><FaCloudArrowDown /></span> Start Your New Instant Quote
              </button>
             </Link>
              <p className="text-gray-400 mt-2 text-sm flex items-center gap-2"><span className="text-black"><IoIosLock /></span>All uploads are secure and confidential</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "related" && (
        <div className="">
          <h5 className="capitalize font-semibold text-xl md:text-2xl text-black ">here is some Related products:</h5>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
