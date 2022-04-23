import React, { Component } from "react";
import Child from "./Child";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    // Khai báo state ở đây
    this.state = {
      number: 1,
      like: 1,
      obj: {
        number: 1,
      },
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    // Tiền xử lý state, props
    console.log("getDerivedStateFromProps");
    return currentState;
  }

  render() {
    console.log("render");
    return (
      <div>
        <h3>LifeCycle</h3>
        <div className="p-5 bg-dark text-white">
          <h3>Parent Component</h3>
          <p>
            Number: {this.state.obj.number} - Like: {this.state.like}
          </p>
          <button
            className="btn btn-primary m-2"
            onClick={() => {
              let newObj = this.state.obj;
              newObj.number += 1;
              this.setState({
                obj: newObj,
              });
            }}
          >
            +
          </button>
          <button
            className="btn btn-primary ml-2"
            onClick={() => {
              this.setState({
                like: this.state.like + 1,
              });
            }}
          >
            Like
          </button>
          <div className="bg-success p-5">
            <Child obj={this.state.obj.number} />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // Call API
    console.log("componentDidMount");
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate");
    return true;
  }
}
