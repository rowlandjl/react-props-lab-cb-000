import React from 'react';

export default class Spaceship extends React.Component {
  
}

Spaceship.defaultProps = {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
      )
  }
}