import React from 'react';

export default class Spaceship extends React.Component {
  
}

Spaceship.defaultProps = {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
      </div>
      )
  }
}