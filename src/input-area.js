import React, {Component} from 'react';

class InputArea extends Component {
  constructor(props) {
    super(props);
    this.state = {markdown: ''};
  }

  render() {
    return (
      <textarea
        className='input-area'
        placeholder='markdown goes here.'
        rows='20'
        value={this.state.markdown}
        onChange={event => this.onInputChange(event.target.value)}
        autoFocus
      />
    );
  }
  // updates state, triggers rerender
  // passes 'value' to function found in parent component
  onInputChange(value) {
    this.setState({markdown: value});
    this.props.updateAppState(value);
  }
}

export default InputArea;
