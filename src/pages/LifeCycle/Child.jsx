import React, { Component, PureComponent } from "react";

// PureComponent giống hệt Component tuy nhiên sẽ không có lifecycle shouldComponentUpdate
// vì react sẽ tự nhận biết lúc nào props thay đổi giúp mình
/*
  Sự nhận biết thay đổi của props của PureComponent chỉ ở mức primitive value, thay đổi object hoặc
  array sẽ không làm PureComponent nhận biết được
*/

export default class Child extends PureComponent {
  constructor(props) {
    super(props);
    // Khai báo state ở đây
    this.state = {};
    console.log("constructor - child");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps - child");
    return currentState;
  }

  render() {
    console.log("render - child");
    return <p>Number: {this.props.obj.number}</p>;
  }

  timeout = {};
  componentDidMount() {
    console.log("componentDidMount - child");

    this.timeout = setInterval(() => {
      console.log("123");
    }, 1000);
  }

  // shouldComponentUpdate(newProps, newState) {
  //   // this.props: props hiện tại
  //   // newProps: props mới nhận trước render
  //   console.log("shouldComponentUpdate - child");

  //   if (this.props.number !== newProps.number) return true;
  //   return false;
  // }

  componentWillUnmount() {
    // Trước khi component mất khỏi giao diện
    console.log("componentWillUnmount");
    clearInterval(this.timeout);
  }
}
