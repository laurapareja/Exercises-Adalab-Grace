import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import picture from "./images/grumpycat.jpg";

class HalfPage extends React.Component {
  render() {
    return (
      <div>
        <div className="mediacard left">{this.props.children}</div>
        <div className="mediacard right">{this.props.children}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <HalfPage>
    <div className="mediacard-title-container">
      <img src={picture} className="mediacard-img" alt="logo" />
      <div className="mediacard-titleSubtitle-containter">
        <h2 className="mediacard-title">Laura</h2>
        <h3 className="mediacard-subtitle">2/2/2019</h3>
      </div>
    </div>
    <div>
      <p className="mediacard-text">
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium possimus deserunt similique praesentium laudantium rerum aspernatur quam molestiae? Delectus non qui quod optio incidunt placeat repellat minus accusamus ipsa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium possimus deserunt similique praesentium laudantium rerum aspernatur quam
        molestiae? Delectus non qui quod optio incidunt placeat repellat minus accusamus ipsa!
      </p>
    </div>
    <div className="mediacard-footer">
      <small className="mediacard-footer-text">Leer más</small>
      <div>
        <small>37️</small>
        <span role="img">
          <i className="fas fa-heart heart"></i>
        </span>
      </div>
    </div>
  </HalfPage>,
  document.getElementById("root")
);
