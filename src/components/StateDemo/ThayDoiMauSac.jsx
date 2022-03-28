import React, { Component } from "react";

export default class ThayDoiMauSac extends Component {
  state = {
    houseColor: "black",
  };

  changeColor = (color) => {
    this.setState({
      houseColor: color,
    });
  };

  render() {
    return (
      <div className="text-center p-5">
        <i className="fa fa-home" style={{ fontSize: 150, color: this.state.houseColor }} />
        <br />
        <div className="p-2"></div>
        <button className="btn btn-success p-2 m-2" onClick={() => this.changeColor("green")}>
          Green
        </button>
        <button className="btn btn-primary p-2 m-2" onClick={() => this.changeColor("blue")}>
          Blue
        </button>
        <button className="btn btn-danger p-2 m-2" onClick={() => this.changeColor("red")}>
          Red
        </button>
      </div>
    );
  }
}
