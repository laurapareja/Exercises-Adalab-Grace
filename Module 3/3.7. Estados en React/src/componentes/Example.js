import React from "react";
//EJERCICIO BONUS 7
// Fruta fresca
// Vamos a hacer una lista de frutas populares, que nos permita añadir y quitar elementos.
//this.state = {
//     popularFruits: ['kiwi', 'pinneaple', 'strawberry'],
//     newFruit: ''
//   };
// Pintar el listado a partir de la clave del estado popularFruits.
// Pintar un input de texto y un botón con el texto 'Añadir'
// Cada vez que el input cambie, hay que actualizar la clave del estado newFruit
// Cuando se pulse el botón 'Añadir' hay que:
// actualizar la clave del estado popularFruits con el valor de newFruit. Ojo, no vale mutar el array contenido en popularFruits con un push. Usaremos spread o el método de array .concat para generar un nuevo array.
// actualizar el valor de newFruit cn comitas vacias para limpiar el input.
// Ahora vamos a añadir un botón 'Eliminar' junto a cada fruta, a este botón tenemos que añadirle un atributo value o data-fruit con el nombre de la fruta junto a la que se encuentra como valor.
// Cuando se pulse el botón tenemos que recoger la fruta que queremos eliminar y actualizar la clave del estado popularFruits con un nuevo array que no contenga dicha fruta. El método .filter de array que devuelve una copia nueva puede ayudaros con esta tarea.

//Ejercicio 6
// Info del usuario
// Vamos a partir de un objeto con información de un usuario que tenemos en el estado de nuestro componente. Lo vamos a inicializar a este valor directamenete en el constructor.
// {
//   firstName: 'Ada',
//   lastName: 'Lovelace',
//   birdthDate: {
//     day: 10,
//     month: 'diciembre',
//     year: 1815
//   }
// }
// Vamos a crear un formulario donde vamos a poder modificar estos campos del estado.

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Ada",
      lastName: "Lovelace",
      birdthDate: {
        day: 10,
        month: "diciembre",
        year: 1815
      }
    };

    this.updateUser = this.updateUser.bind(this);
    // setInterval(this.updateClock, 1000);
  }

  //version corta
  updateUser(event) {
    const userInfo = event.target.value;
    const nameComponentInput = event.target.name;

    let user = this.state;

    // const obj = {};
    // obj[nameComponentInput] = userInfo;
    // this.setState(obj);
    debugger;
    if (nameComponentInput === "firstname") {
      this.setState({ firstName: userInfo });
    } else if (nameComponentInput === "lastname") {
      this.setState({ lastName: userInfo });
    } else if (nameComponentInput === "dayBirthday") {
      this.setState(prevState => {
        return {
          birdthDate: {
            ...prevState.birdthDate,
            day: userInfo
          }
        };
      });
    }
    console.log(user);
    // console.log(Object.getOwnPropertyNames(user));

    // { ...user, firstName: `${userInfo}`, lastName: `${userInfo}` };
    // console.log(user);

    // console.log(user);
    // console.log(name);
    // console.log(userInfo);
    // console.log(userInfo.name);

    if (this.state === userInfo.name) {
    }
    this.setState((prevState, props) => ({
      props: prevState.props === "" ? `${userInfo}` : `${userInfo}`
    }));
  }

  render() {
    return (
      <>
        <form>
          <input placeholder="First Name" name="firstname" onChange={this.updateUser}></input>
          <input placeholder="Last Name" name="lastname" onChange={this.updateUser}></input>
          <label>Día de cumpleaños</label>
          <input type="number" placeholder="Day" name="dayBirthday" onChange={this.updateUser}></input>
          <input type="number" placeholder="Month" name="monthBirthday" onChange={this.updateUser}></input>
          <input type="number" placeholder="Year" name="yearBirthday" onChange={this.updateUser}></input>
        </form>
        <p className="text">{this.state.time}</p>
      </>
    );
  }
}

export default User;
// // NOTA: Cuidado al modificar los campos anidados dentro del objeto birdthDate; recuerda que para modificarlos es muy útil usar en el setState el operador spread ... para mantener el resto de datos de ese objeto. Por ejemplo:
// this.setState(prevState => {
//   return {
//     birthDate: {
//       ...prevState.birthDate,
//       day: 8
//     }
//   };
// });

//Ejercicio 3

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: ""
//     };

//     this.updateClock = this.updateClock.bind(this);
//     setInterval(this.updateClock, 1000);
//   }

//   //version corta
//   updateClock() {
//     let timeNow = new Date();
//     console.log(timeNow);

//     this.setState(prevState => ({
//       time: `${timeNow}`
//     }));

//     console.log(this.state.time);
//   }

//   render() {
//     return (
//       <>
//         <p className="text">{this.state.time}</p>
//       </>
//     );
//   }
// }

// export default Clock;

// //Ejercicio 1

// class InputText extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: ""
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }
//   //version corta
//   handleChange(event) {
//     let valueInput = event.target.value;

//     this.setState(prevState => ({
//       value: prevState.value === "" ? `${valueInput}` : `${valueInput}`
//     }));
//     console.log(this.state.value);
//   }
//   //version larga

//   handleChange(event) {
//     let valueInput = event.target.value;
//     console.log(valueInput);

//     this.setState((prevState, props) => {
//       let nextValue;
//       if (prevState.value === "") {
//         nextValue = valueInput;
//       } else {
//         nextValue = `${valueInput}`;
//       }
//       return {
//         value: nextValue
//       };
//     });
//     console.log(this.state.value);
//   }

//   render() {
//     return (
//       <>
//         <input name="input" onChange={this.handleChange}></input>
//         <p className="text">{this.state.value}</p>
//       </>
//     );
//   }
// }

// export default InputText;
