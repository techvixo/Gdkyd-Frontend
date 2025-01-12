"use client";
import { useState } from "react";
import PartnerCard from "../OurPartner/PartnerCard";

const Honor = ({ honors, locale }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const partnersPerPage = 12;

  // Calculate the index range for the current page
  const indexOfLastPartner = currentPage * partnersPerPage;
  const indexOfFirstPartner = indexOfLastPartner - partnersPerPage;
  const currentPartners = honors?.slice(indexOfFirstPartner, indexOfLastPartner);

  // Calculate total pages
  const totalPages = Math.ceil((honors?.length || 0) / partnersPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="my-5 md:my-10">
      <div className="main_container relative">
        <h2 className="md:pt-5 text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
          {"Our Honer"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5">
          {currentPartners?.map((part, i) => (
            <PartnerCard locale={locale} key={i} part={part}></PartnerCard>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-5">
          {Array.from({ length: totalPages }, (_, i) => (
           <button
           key={i}
           className={`px-3 py-1 border rounded-full  hover:border-blue-500 ${
             currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
           }`}
           onClick={() => handlePageChange(i + 1)}
         >
           {i + 1}
         </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Honor;
