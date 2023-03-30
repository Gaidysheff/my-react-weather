import React from "react";

const test = "Passing data from Child to Parent Component";

export class ChildOne extends React.Component {
  onTrigger = () => {
    this.props.parentCallback(test);
  };

  render() {
    return (
      <div>
        <br></br>
        <button onClick={this.onTrigger}>Click me</button>
      </div>
    );
  }
}

// export default ChildOne;
