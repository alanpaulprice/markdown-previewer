import React, { Component } from 'react';

class InputArea extends Component {
  constructor(props) {
    super(props);
    this.state = { markdown: '' };
  }

  render() {
    return (
      <textArea
        autoFocus
        rows='20'
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
  flex: '1 1 0',
  width: '50%',
  resize: 'none',
  minHeight: '500px'
};

export default InputArea;
