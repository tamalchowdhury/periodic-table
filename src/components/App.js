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

import React, { Component, Fragment } from "react";
import { elements } from "./_data";
import Element from "./Element";
import "../components/styles/elements.css";
import GitHubButton from "react-github-btn";

class App extends Component {
  state = {
    showInfo: false,
    element: {},
  };

  showInfo = (num) => {
    this.setState({ showInfo: true, element: elements[num] });
  };

  closeInfo = () => {
    this.setState({ showInfo: false });
  };

  /**
   * Helper method that will generate a number of elements
   * from start index to end index to avoid copy pasting
   * all the hundred elements
   * @param {number} start
   * @param {number} end
   * @return {Array<Object>}
   */
  populateElements = (start, end) => {
    let items = [];
    for (let i = start; i <= end; i++) {
      items.push(<Element showInfo={this.showInfo} num={i} />);
    }
    return items;
  };

  render() {
    let {
      name,
      summary,
      symbol,
      category,
      number,
      source,
      appearance,
      atomic_mass,
      molar_heat,
      density,
      melt,
      boil,
    } = this.state.element;

    return (
      <div className="wrapper">
        <div id="table">
          {/* Elements 1-4 */}
          {this.populateElements(1, 4)}
          {/* Information Table */}
          {this.state.showInfo && (
            <Fragment>
              <div id="element-box" className={`${category}`}>
                <div className="number">{number}</div>
                <div className="symbol">{symbol}</div>
                <div className="element-name">{name}</div>
              </div>
              <div id="information">
                <div
                  onClick={this.closeInfo}
                  className="close-button"
                  title="Close Info"
                >
                  Close [&times;]
                </div>
                <div>
                  <h1 className="big_title">{name}</h1>
                  <span className={`cat_name ${category}`}>{category}</span>
                  {appearance && (
                    <div className="appearance">
                      <strong>Appearance:</strong> {appearance}
                    </div>
                  )}
                  <div className="atom_info">
                    <span>Atomic Mass: {atomic_mass} | </span>
                    <span>Density: {density}</span>
                    {molar_heat && <span> | Molar Heat: {molar_heat}</span>}
                    {melt && <span> | Melt: {melt}K</span>}
                    {boil && <span> | Boil: {boil}K</span>}
                  </div>
                  <div>
                    {summary} ...{" "}
                    <a target="_blank" href={source}>
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </Fragment>
          )}
          {/* Populating elements from 5-57 */}
          {this.populateElements(5, 57)}
          {/* Lanthanoids split 72-89 */}
          {this.populateElements(72, 89)}
          {/* Actinoids split 104-119*/}
          {this.populateElements(104, 118)}
          {/* Lanthenoids 58-71*/}
          {this.populateElements(58, 71)}
          {/* Actionoids 90-103 */}
          {this.populateElements(90, 103)}
        </div>
        <footer className="footer center">
          <span>
            2021, Put together by{" "}
            <a
              href="https://tamalweb.com/periodic-table-reactjs"
              target="_blank"
              rel="noopener"
            >
              Tamal Web
            </a>
          </span>
          <GitHubButton
            href="https://github.com/tamalweb/periodic-table"
            data-color-scheme="no-preference: light; light: light; dark: dark;"
            data-show-count="true"
            aria-label="Star tamalweb/periodic-table on GitHub"
          >
            Star
          </GitHubButton>
        </footer>
      </div>
    );
  }
}

export default App;
