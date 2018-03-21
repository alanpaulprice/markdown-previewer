import React, { Component } from 'react';

class InputArea extends Component {
  constructor(props) {
    super(props);
    this.state = { markdown: '' };
  }

  render() {
    return (
      <textarea
        className='input-area'
        autoFocus
        rows='20'
        //style={inputStyle}
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

// const inputStyle = {
//   flex: '1 1 0',
//   color: '#666',
//   backgroundColor: '#fff',
//   resize: 'none',
//   minHeight: '500px',
//   margin: '5px',
//   padding: '5px',
//   outlineWidth: '0',
//   border: '0',
// };

export default InputArea;
