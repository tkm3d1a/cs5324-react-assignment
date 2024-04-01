import { Component } from "react";
import Hello from "./FunctionalComponent";

class Welcome extends Component {
  render() {
    return (
      <h1>
        Inside Class FunctionalComponent
        <Hello />
      </h1>
    );
  }
}

export default Welcome;
