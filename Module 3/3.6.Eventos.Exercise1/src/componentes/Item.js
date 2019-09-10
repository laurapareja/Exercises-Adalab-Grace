import React from "react";
import Styles from "../App.scss";

//  Ejercicio 4
// const handleChange = event => {
// 	let optionSelected = event.target.value;
// 	if (event.target.value) {
// 		alert(`vas a viajar ${optionSelected}`);
// 	}
// };
// class Destiny extends React.Component {
// 	render() {
// 		return (
// 			<>
// 				<select onChange={handleChange}>
// 					<option>Selecciona Ciudad</option>
// 					<option value="Buenos Aires">Buenos Aires</option>
// 					<option value="Sydney">Sydney</option>
// 					<option value="Praga">Praga</option>
// 					<option value="Boston">Boston</option>
// 					<option value="Tokio">Tokio</option>
// 				</select>
// 			</>
// 		);
// 	}
// }
// export default Destiny;

// //  Ejercicio 2
//  const handleChange = event => {
// 	let optionSelected = event.target.value;
// 	if (event.target.value) {
// 		alert(`vas a viajar ${optionSelected}`);
// 	}
// };
// class Destiny extends React.Component {
// 	render() {
// 		return (
// 			<>
// 				<select onChange={handleChange}>
// 					<option>Selecciona Ciudad</option>
// 					<option value="Buenos Aires">Buenos Aires</option>
// 					<option value="Sydney">Sydney</option>
// 					<option value="Praga">Praga</option>
// 					<option value="Boston">Boston</option>
// 					<option value="Tokio">Tokio</option>
// 				</select>
// 			</>
// 		);
// 	}
// }
// export default Destiny;

// Ejercicio 1

// Ejercicio 3

class OnionHater extends React.Component {
	constructor(props) {
		super(props);
		this.isHating = this.isHating.bind(this);
	}
	isHating(event) {
		if (event.target.value.includes("cebolla")) {
			console.log(event);
			alert("ODIO LA CEBOLLA");
			this.isHating = true;
			this.forceUpdate();
		} else {
			this.isHating = false;
		}
	}

	render() {
		if (this.isHating === true) {
			// const color = "style.background-color:'red'";
			return (
				<div className="hate">
					<input type="text" name="food" onInput={this.isHating}></input>
				</div>
			);
		} else {
			return (
				<div className="default">
					<input type="text" name="food" onInput={this.isHating}></input>
				</div>
			);
		}
	}
}
export default OnionHater;
