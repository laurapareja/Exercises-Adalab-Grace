import React from "react";
import "../App.scss";
import grumpyImg from "../images/grumpycat.jpg";
import heart from "../images/heart-solid.svg";

class MediaCards extends React.Component {
  renderHeader() {
    return (
      <header className="mediacard-title-container">
        <img src={grumpyImg} className="mediacard-img" alt="logo" />
        <div className="mediacard-titleSubtitle-containter">
          <h1>{this.props.name}</h1>
          <h2 className="mediacard-subtitle">{this.props.date}</h2>
        </div>
      </header>
    );
  }
  renderMain() {
    return (
      <main>
        <p className="mediacard-text">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium possimus deserunt similique praesentium laudantium rerum aspernatur quam molestiae? Delectus non qui quod optio incidunt placeat repellat minus accusamus ipsa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium possimus deserunt similique praesentium laudantium rerum aspernatur quam
          molestiae? Delectus non qui quod optio incidunt placeat repellat minus accusamus ipsa!
        </p>
      </main>
    );
  }
  renderFooter() {
    return (
      <footer className="mediacard-footer">
        <small className="mediacard-footer-text">Leer más</small>
        <div>
          <small>37️</small>
          <img src={heart} className="heart" alt="heart" />
        </div>
      </footer>
    );
  }

  render() {
    return (
      <div className="mediacard">
        {this.renderHeader()}
        {this.renderMain()}
        {this.renderFooter()}
      </div>
    );
  }
}

export default MediaCards;
