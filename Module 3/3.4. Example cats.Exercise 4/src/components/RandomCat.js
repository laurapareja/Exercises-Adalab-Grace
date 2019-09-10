import React from "react";

const getRandomInteger = maxNumber => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
  render() {
    const randomCat = getRandomInteger(NUMBER_OF_CATS);
    if (this.props) {
      return (
        <a href="http://lorempixel.com">
          <img src={`http://lorempixel.com/400/200/cats/${randomCat}`} alt="Random cat" />
        </a>
      );
    } else {
      return (
        <a href="http://lorempixel.com">
          <img src={`http://lorempixel.com/${this.props.width}/${this.props.height}/cats/${randomCat}`} alt="Random cat" />
        </a>
      );
    }
  }
}

export default RandomCat;
