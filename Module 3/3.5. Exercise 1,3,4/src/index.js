import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import * as serviceWorker from "./componentes/serviceWorker";
import Item from "./componentes/Item";
import propTypes from "prop-types";

const items = [
  {
    name: "Cereales con chocolate",
    description: "Cereales rellenos de chocolate",
    quantity: 2,
    category: "Cereales",
    price: 5
  },
  {
    name: "Hamburguesa con queso",
    description: "Hamburguesa rica y saludable",
    quantity: 1,
    category: "Fast-food",
    price: 15
  },
  {
    description: "Agua de un charco del Himalaya",
    quantity: 2,
    category: "Bebida",
    price: 34
  }
];

class ItemList extends React.Component {
  render() {
    const list = items.map(item => {
      return <Item quantity={item.quantity} name={item.name} category={item.category} price={item.price} />;
    });
    return <ul className="item-list">{list}</ul>;
  }
}
Item.defaultProps = {
  name: "No hay descripción"
};
Item.propTypes = {
  price: propTypes.number.isRequired
};
ReactDOM.render(<ItemList />, document.getElementById("root"));

serviceWorker.unregister();

//error cometido. Poner default a ItemList no a Item
