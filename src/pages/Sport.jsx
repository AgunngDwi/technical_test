import React, { useEffect, useState } from "react";
import NavbarMain from "../components/NavbarMain";
import SubNavbar from "../components/SubNavbar";
import BottomNav from "../components/BottomNav";
import axios from "axios";

const Sport = () => {
  const [news, SetNews] = useState([]);

  useEffect(() => {
    getSport();
  }, []);

  const getSport = () => {
    const key = "cb1f1e9b7fe545b2be4c49c7cd5bd141";

    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=${key}`
      )
      .then((res) => {
        SetNews(res.data.articles);
      })
      .catch((err) => console.log(err));
  };

  const sportNews = news.slice(0, 5);
  return (
    <div>
      <NavbarMain />
      <SubNavbar />
      <div id="home" className="main-content">
        <h1>Sport News</h1>
        <ul>
          {sportNews.map((article, index) => (
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
      <BottomNav />
    </div>
  );
};

export default Sport;
