import React, { Component } from 'react';

class InputArea extends Component {
  constructor(props) {
    super(props);
    this.state = { markdown: '' };
  }

  render() {
    return (
      <input
        autoFocus
        type='text'
        style={inputStyle}
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

const inputStyle = {
  display: 'inline-block',
  width: '50%',
};

export default InputArea;
