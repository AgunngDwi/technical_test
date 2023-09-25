import React, { useEffect, useState } from "react";
import NavbarMain from "../components/NavbarMain";
import SubNavbar from "../components/SubNavbar";
import BottomNav from "../components/BottomNav";
import axios from "axios";

const Finance = () => {
  const [news, SetNews] = useState([]);

  useEffect(() => {
    getFinance();
  }, []);

  const getFinance = () => {
    const key = "dff805de570d48db971b90cd04f04158";

    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&q=Finance&apiKey=${key}`
      )
      .then((res) => {
        SetNews(res.data.articles);
      })
      .catch((err) => console.log(err));
  };

  const financeNews = news.slice(0, 5);
  return (
    <div>
      <NavbarMain />
      <SubNavbar />
      <div id="home" className="main-content">
        <h1>Finance News</h1>
        <ul>
          {financeNews.map((article, index) => (
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

export default Finance;
