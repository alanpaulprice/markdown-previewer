// example: https://codepen.io/freeCodeCamp/full/JXrLLE
// https://github.com/alanpaulprice/markdown-previewer
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
      input: '',
      output: ''
    };
  }
  render() {
    return (
      <div>
        <InputArea updateInputState={ (value) => this.updateInputState(value) }/>
        <OutputArea output={this.state.output}/>
      </div>
    );
  }

  updateInputState(value) {
    this.setState({
      input: value,
      output: value
    });
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('container')
);
