import React from "react";
import Carousels from "./Carousels";
import "../Styles/Home.css";
import Notices from "./Notices";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <Carousels className="home__carousel" />
      <div className="home__notices">
        <Notices />
      </div>
    </div>
  );
}

export default Home;
