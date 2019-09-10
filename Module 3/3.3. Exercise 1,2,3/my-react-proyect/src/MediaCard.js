import React from "react";
import "./App.scss";
import grumpyImg from "./images/grumpycat.jpg";
import heart from "./images/heart-solid.svg";

const MediaCards = props => (
  <div className="mediacard">
    <header className="mediacard-title-container">
      <img src={grumpyImg} className="mediacard-img" alt="logo" />
      <div className="mediacard-titleSubtitle-containter">
        <h1>{props.name}</h1>
        <h2 className="mediacard-subtitle">Lunes 26 de junio de 2017</h2>
      </div>
    </header>
    <main>
      <p className="mediacard-text">
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium possimus deserunt similique praesentium laudantium rerum aspernatur quam molestiae? Delectus non qui quod optio incidunt placeat repellat minus accusamus ipsa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium possimus deserunt similique praesentium laudantium rerum aspernatur quam
        molestiae? Delectus non qui quod optio incidunt placeat repellat minus accusamus ipsa!
      </p>
    </main>
    <footer className="mediacard-footer">
      <small className="mediacard-footer-text">Leer más</small>
      <div>
        <small>37️</small>
        <img src={heart} className="heart" alt="heart" />
      </div>
    </footer>
  </div>
);

export default MediaCards;
