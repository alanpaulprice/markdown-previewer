import React, { Component } from 'react';

class InputArea extends Component {
  constructor(props) {
    super(props);
    this.state = { markdown: 'markdown goes here.' };
  }

  render() {
    return (
      <textarea
        className='input-area'
        autoFocus
        rows='20'
        value={ this.state.markdown }
        onChange={ event => this.onInputChange(event.target.value) }
      />
    );
  }

  onInputChange(value) {
    this.setState({ markdown: value });
    this.props.updateInputState(value);
  }
}

export default InputArea;
