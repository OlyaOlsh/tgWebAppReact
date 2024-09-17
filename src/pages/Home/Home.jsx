import React from "react";
import { useNavigate } from "react-router-dom";
import MagsShop_170_162  from "./../../imagesItem/MagsShop_170_162.png";

import './../Home/Home.css';

const Home = () => {
  const navigate = useNavigate();

  // Функции для перехода на другие страницы
  const handleDoctorClick = () => {
    navigate("/");
  };

  const handleTestClick = () => {
    navigate("/contacts");
  };
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <img  src={MagsShop_170_162} 
        alt="MagsShopLogo" 
        className="magsShop-image"
      />
      <h1>Magic Shop</h1>
      <p>Всё в одном месте!</p>
      <button className={'showcatalog-btn'} 
        onClick={handleDoctorClick} 
      >
        Посмотреть каталог →
      </button>
      <br />
      <button className={'show-btn'} 
        onClick={handleTestClick} 
       
      >
        Посмотреть заказ (Пока контакты)
      </button>
      <p>Максимально удобный способ выбрать и заказать товары в Telegram!</p>
    </div>
  );
};

export default Home;

