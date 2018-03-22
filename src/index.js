// example: https://codepen.io/freeCodeCamp/full/JXrLLE
// https://github.com/alanpaulprice/markdown-previewer
//TODO: fix issue where output doesn't come up when resizing input smaller
// on mobile

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
      <div className='app'>
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

ReactDOM.render(
  <App/>,
  document.getElementById('container')
);
