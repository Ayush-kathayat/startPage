"use client";

import React from "react";

interface CardProps {
  heading: string;
  links: { name: string; url: string }[];
  titleColor: string; // Add titleColor property
}

const getIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "youtube":
      return <img src="./youtube.svg" alt="YouTube" className="h-6 w-6 mr-2" />;

    case "github":
      return <img src="./github.svg" alt="YouTube" className="h-6 w-6 mr-2" />;

    case "gitlab":
      return <img src="./gitlab.svg" alt="YouTube" className="h-6 w-6 mr-2" />;

    case "whatsapp":
      return (
        <img src="./whatsapp.svg" alt="YouTube" className="h-6 w-6 mr-2" />
      );

    case "linkedin":
      return (
        <img src="./linkedin.svg" alt="YouTube" className="h-6 w-6 mr-2" />
      );

    case "telegram":
      return (
        <img src="./telegram.svg" alt="YouTube" className="h-6 w-6 mr-2" />
      );

    case "youtube music":
      return (
        <img src="./youtubemusic.svg" alt="YouTube" className="h-6 w-6 mr-2" />
      );

    case "hianime":
      return <img src="./youtube.svg" alt="YouTube" className="h-6 w-6 mr-2" />;
    default:
      return null;
  }
};

const Card: React.FC<CardProps> = ({ heading, links, titleColor }) => {
  return (
    <div
      className="group m-10 p-10 rounded-lg border-b-4 border-transparent shadow-2xl cursor-pointer hover:border-b-4"
      style={{
        borderColor: titleColor,
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
      <h2 className="text-2xl text-center font-bold mb-4" style={{ color: titleColor }}>
        {heading}
      </h2>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-5 mt-5 flex items-center justify-center">
            {getIcon(link.name)}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-100 transition-colors duration-300 ease-in-out"
              style={{ textDecoration: "none" }}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .group:hover {
          box-shadow: 0 -4px 6px 0px ${titleColor},
            0 2px 4px 0px rgba(255, 255, 255, 0.06);
        }
      `}</style>
    </div>
  );
};

export default Card;
