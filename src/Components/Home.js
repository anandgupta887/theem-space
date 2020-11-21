import React from "react";
import Carousels from "./Carousels";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home">
      <Carousels className="home__carousel" />
    </div>
  );
}

export default Home;
