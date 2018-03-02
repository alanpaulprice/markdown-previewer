// example: https://codepen.io/freeCodeCamp/full/JXrLLE
// https://github.com/alanpaulprice/markdown-previewer
//TODO: sort out styles
//TODO: convert output string into html
//TODO: add lodash for debounce

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

import InputArea from './input-area';
import OutputArea from './output-area';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: ''
    };
  }
  render() {
    return (
      <div style={appDivStyle}>
        <InputArea
          updateInputState={ (value) => this.updateInputState(value) }
        />
        <OutputArea
          output={this.state.output}
        />
      </div>
    );
  }

  updateInputState(value) {
    this.setState({
      output: marked(value)
    });
  }
}

const appDivStyle = {
  display: 'flex',
  height: '100%',
}

ReactDOM.render(
  <App/>,
  document.getElementById('container')
);
