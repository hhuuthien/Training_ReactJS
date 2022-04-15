import React, { Component } from "react";

export default class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h4 className="p-5">Home</h4>
      </div>
    );
  }
}
