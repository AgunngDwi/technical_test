import { Carousel } from "antd";
import React from "react";

const MainContent = ({ news }) => {
  const topHeadLines = news.slice(0, 5);
  return (
    <div id="home" className="main-content">
      <h1>Top Headlines</h1>
      <ul>
        {topHeadLines.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainContent;
