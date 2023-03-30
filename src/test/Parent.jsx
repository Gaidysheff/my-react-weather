import React from "react";
import { ChildOne } from "./ChildOne";

class Parent extends React.Component {
  state = {
    msg: "",
  };

  handleCallback = (childData) => {
    this.setState({ msg: childData });
  };

  render() {
    const { msg } = this.state;
    return (
      <div>
        <h1> {msg}</h1>
        <ChildOne parentCallback={this.handleCallback} />
      </div>
    );
  }
}

export default Parent;
