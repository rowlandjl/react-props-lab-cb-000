import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets? {this.props.hasRockets}</p>
        <p>Colors: {this.props.join(', ')}</p>
      </div>
      )
  }
}

Spaceship.defaultProps = {
  
}