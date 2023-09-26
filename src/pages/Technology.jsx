import React, { useEffect, useState } from "react";
import NavbarMain from "../components/NavbarMain";
import SubNavbar from "../components/SubNavbar";
import BottomNav from "../components/BottomNav";
import axios from "axios";

const Technology = () => {
  const [news, SetNews] = useState([]);

  useEffect(() => {
    getTechnology();
  }, []);

  const getTechnology = () => {
    const key = "cb1f1e9b7fe545b2be4c49c7cd5bd141";

    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${key}`
      )
      .then((res) => {
        SetNews(res.data.articles);
      })
      .catch((err) => console.log(err));
  };

  const technologyNews = news.slice(0, 5);
  return (
    <div>
      <NavbarMain />
      <SubNavbar />
      <div id="home" className="main-content">
        <h1>Technology News</h1>
        <ul>
          {technologyNews.map((article, index) => (
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

export default Technology;
