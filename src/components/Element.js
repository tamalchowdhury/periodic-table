/*
Copyright 2021 Tamal Anwar Chowdhury

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { Component } from "react";
import { elements } from "./_data";

export default class Element extends Component {
  state = {
    hover: false,
  };

  openInfo = (event) => {
    this.props.showInfo(this.props.num);
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
        title={element.name}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.openInfo}
        className={`element element-${num} ${element.category} ${
          this.state.hover ? "active" : ""
        }`}
      >
        <div className="number">{element.number}</div>
        <div className="symbol">{element.symbol}</div>
        <div className="element-name">{element.name}</div>
      </div>
    );
  }
}
