import Link from "next/link";
import React from "react";
import PageMenu from "./PageMenu/PageMenu";
import ImagePortfolio from "./ImagePortfolio/ImagePortfolio";

const Portfolio = () => {
  const menus = [
    {
      id: 1,
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      id: 1,
      name: "Video",
      link: "/portfolio/video",
    }
  ];
  return (
    <div className="portfolio_section">
      <PageMenu menus={menus}></PageMenu>
      <ImagePortfolio></ImagePortfolio>
    </div>
  );
};

export default Portfolio;
