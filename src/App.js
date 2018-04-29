import React, { Component } from 'react';
import './App.css';
import runCode from './eggplant/eggplant';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      result: ""
    }

    this.onTextUpdated = this.onTextUpdated.bind(this);
    this.onRunClicked = this.onRunClicked.bind(this);
  }

  onTextUpdated(newText) {
    this.setState({ text: newText });
  }

  onRunClicked() {
    this.setState({ result: runCode(this.state.text) });
  }

  render() {
    return (
      <div className="App">
        <div>
          <textarea className="editor" onChange={this.onTextUpdated}></textarea>
          <button className="run" onClick={this.onRunClicked}>Run!</button>
        </div>
        <div className="result">
          {this.state.result}
        </div>
      </div>
    );
  }
}

export default App;
