import React, { Component } from 'react';
import Avatar from './Avatar';

class AvatarHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameSelected: ''
    }
  }

  selectPeople = (e, people) => {
    e.preventDefault();
    this.setState({ nameSelected: people.name })
  };

  render() {
    return (
      <div>
        <h1 className="chat__title">Selecciona tu perfil</h1>
        {this.state.nameSelected ? <p className="chat__selected-one">Perfil seleccionado: <span className="chat__selected-one-name">{this.state.nameSelected}</span></p> : <p className="chat__selected-one">Por favor, selecciona un perfil</p>}
        <div className="chat__avatar-display">
          {
            /* this.props.peoples.map(el => <a href="/#" onClick={e => {this.selectPeople(e, el)}} key={el.id} className={this.state.nameSelected === el.name ? 'selected' : '' }><Avatar people={el} /> </a>) */
            this.props.peoples.map(el => <Avatar key={el.id} people={el} clickFnd={e => { this.selectPeople(e, el) }} selectedOne={this.state.nameSelected} />)
          }
        </div>
      </div>
    )
  }
}

export default AvatarHeader;