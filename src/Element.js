import React, { Component } from 'react';
import { elements } from './components/_data';

export default class Element extends Component {
  state = {
    hover: false
  };

  openInfo = (event) => {
    console.log('Clicked!');
  };

  onMouseEnter = (event) => {
    this.setState({ hover: true });
  };

  onMouseLeave = (event) => {
    this.setState({ hover: false });
  };

  render() {
    let { num } = this.props;
    let element = elements[num];
    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.openInfo}
        className={`element element-${num} ${element.category} ${
          this.state.hover ? 'active' : ''
        }`}>
        <div className="number">{element.number}</div>
        <div className="symbol">{element.symbol}</div>
        <div className="element-name">{element.name}</div>
      </div>
    );
  }
}
