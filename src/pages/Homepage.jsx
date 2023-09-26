import axios from "axios";
import React, { useEffect, useState } from "react";
import NavbarMain from "../components/NavbarMain";
import BottomNav from "../components/BottomNav";
import MainContent from "../components/MainContent";
import "../css/master.css";
import SubNavbar from "../components/SubNavbar";

function Homepage() {
  const [news, SetNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    const key = "cb1f1e9b7fe545b2be4c49c7cd5bd141";

    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`)
      .then((res) => {
        SetNews(res.data.articles);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavbarMain />
      <SubNavbar />
      <MainContent news={news} />
      <BottomNav />
    </div>
  );
}

export default Homepage;
