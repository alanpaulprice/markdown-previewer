import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import InputArea from './input-area';
import OutputArea from './output-area';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {output: ''};
  }
  render() {
    return (
      <div id='app'>
        <InputArea
          // passes function to InputArea as a prop,
          // enabling onChange event to update app state
          updateAppState={value => this.updateAppState(value)}
        />
        <OutputArea
          // passes app state 'output' to OutputArea
          output={this.state.output}
        />
      </div>
    );
  }
  // updates state, triggers rerender
  updateAppState(value) {
    this.setState({output: marked(value)});
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));
