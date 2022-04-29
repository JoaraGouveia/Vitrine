import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/BannerImage1.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> ONLINE SHOP </h1>
        <p> As Novidades Estão Aqui!</p>
        <Link to="/produto">
          <button> CONFIRA JÁ </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;