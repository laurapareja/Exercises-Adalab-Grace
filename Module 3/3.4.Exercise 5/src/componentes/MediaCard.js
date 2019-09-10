import React from "react";
import "../App.scss";

class MediaCards extends React.Component {
  renderHeader() {
    return (
      <div className="mediacard-title-container">
        <img src={this.props.image} className="mediacard-img" alt="logo" />
        <div className="mediacard-titleSubtitle-containter">
          <h2 className="mediacard-title">{this.props.name}</h2>
          <h3 className="mediacard-subtitle">{this.props.date}</h3>
        </div>
      </div>
    );
  }
  renderMain() {
    return (
      <div>
        <p className="mediacard-text">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium possimus deserunt similique praesentium laudantium rerum aspernatur quam molestiae? Delectus non qui quod optio incidunt placeat repellat minus accusamus ipsa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium possimus deserunt similique praesentium laudantium rerum aspernatur quam
          molestiae? Delectus non qui quod optio incidunt placeat repellat minus accusamus ipsa!
        </p>
      </div>
    );
  }
  renderFooter() {
    return (
      <div className="mediacard-footer">
        <small className="mediacard-footer-text">Leer más</small>
        <div>
          <small>37️</small>
          <span role="img">
            <i className="fas fa-heart heart"></i>
          </span>
        </div>
      </div>
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
