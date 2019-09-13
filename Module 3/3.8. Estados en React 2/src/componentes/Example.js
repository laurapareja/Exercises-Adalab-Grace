import React from 'react';
import '../App.scss';

//Ejercicio 1
let listCategory = [];

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmName: '',
      filmDescription: '',
      filmLanguage: '',
      filmPublic: '',
      filmGender: ['Family', 'Comedy'],
    };
    this.updateFilm = this.updateFilm.bind(this);
    this.updateFilmGender = this.updateFilmGender.bind(this);
  }

  //version corta
  updateFilm(event) {
    const filmInfo = event.target.value;
    const key = event.target.name;
    this.setState({
      [key]: `${filmInfo}`,
    });
  }
  updateFilmGender(event) {
    const filmInfo = event.target.value;
    const key = event.target.name;

    // console.log(filmInfo);
    if (listCategory.length < 3) {
      //console.log(listCategory);
      return listCategory.push(filmInfo);
    } else if (listCategory.length === 3) {
      alert('maximo 3 cat');
      console.log(listCategory);

      listCategory.map(item => {
        this.state.filmGender.push(item);
      });
      console.log(this.state);
    }
  }
  isInState(category) {
    return this.state.filmGender.includes(category) ? true : false;
  }

  render() {
    return (
      <div>
        <form className="form">
          <input placeholder="Film Name" name="filmName" onChange={this.updateFilm} />
          {/* // paintGender(key, category) {
	// 	category.map(item => this.setState({[key]: item}));
	// } */}
          <input placeholder="Film Description" name="filmDescription" onChange={this.updateFilm} />
          <select name="filmLanguage" onChange={this.updateFilm}>
            <option>Language</option>
            <option value="Spanish">Spanish</option>
            <option value="Portuguese">Portuguese</option>
            <option value="English">English</option>
          </select>
          <div className="ageClassification">
            This filmm is suggested for
            <label htmlFor="allPublic">
              <input id="allPublic" type="radio" value="allPublic" name="filmPublic" onChange={this.updateFilm} defaultChecked />
              All public{' '}
            </label>
            <label htmlFor="7">
              <input id="7" type="radio" value="Older than 7 years" name="filmPublic" onChange={this.updateFilm} />
              Older than 7 years{' '}
            </label>
            <label htmlFor="12">
              <input id="12" type="radio" value="Older than 12 years" name="filmPublic" onChange={this.updateFilm} />
              Older than 12 years{' '}
            </label>
            <label htmlFor="16">
              <input id="16" type="radio" value="Older than 16 years" name="filmPublic" onChange={this.updateFilm} />
              Older than 16 years{' '}
            </label>
            <label htmlFor="18">
              <input id="18" type="radio" value="Older than 18 years" name="filmPublic" onChange={this.updateFilm} />
              Older than 18 years{' '}
            </label>
          </div>
          <div className="gender">
            Gender{' '}
            <label htmlFor="comedy">
              <input id="comedy" type="checkbox" value="Comedy" checked={this.isInState('Comedy')} name="filmGender" /* onChange={this.updateFilmGender} */ />
              Comedy{' '}
            </label>
            <label htmlFor="drama">
              <input id="drama" type="checkbox" value="Drama" checked={this.isInState('Drama')} name="filmGender" /* onChange={this.updateFilmGender} */ />
              Drama{' '}
            </label>
            <label htmlFor="Fantasy">
              <input id="Fantasy" type="checkbox" value="Fantasy" checked={this.isInState('Fantasy')} name="filmGender" /* onChange={this.updateFilmGender} */ />
              Fantasy{' '}
            </label>
            <label htmlFor="Action">
              <input id="Action" type="checkbox" value="Action" checked={this.isInState('Action')} name="filmGender" /* onChange={this.updateFilmGender} */ />
              Action{' '}
            </label>
            <label htmlFor="Terror">
              <input id="Terror" type="checkbox" value="Terror" checked={this.isInState('Terror')} name="filmGender" /* onChange={this.updateFilmGender} */ />
              Terror{' '}
            </label>
            <label htmlFor="Family">
              <input id="Family" type="checkbox" value="Family" checked={this.isInState('Family')} name="filmGender" /* onChange={this.updateFilmGender} */ />
              Family{' '}
            </label>
          </div>
        </form>
        <div className="card">
          <p className="filmName">{this.state.filmName}</p>
          <p className="filmDescription">{this.state.filmDescription}</p>
          <p className="filmLanguage">{this.state.filmLanguage}</p>
          <p className="filmPublic">{this.state.filmPublic}</p>
          <p className="filmGender">{this.state.filmGender}</p>
        </div>
      </div>
    );
  }
}

export default User;
