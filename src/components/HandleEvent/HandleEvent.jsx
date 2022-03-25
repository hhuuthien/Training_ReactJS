import React, { Component } from "react";

export default class HandleEvent extends Component {
  showMessage = () => {
    alert("Hello");
  };

  sayHello = (name) => {
    alert("Hello " + name);
  };

  render() {
    return (
      <div className="container p-5">
        <button className="btn btn-primary" onClick={this.showMessage}>
          Click me
        </button>

        <button
          className="btn btn-primary ml-2"
          onClick={() => {
            alert("Hello ABCDEFG");
          }}
        >
          Click me 2
        </button>

        <button className="btn btn-primary ml-2" onClick={this.sayHello.bind(this, "Tùng")}>
          Say hello
        </button>

        <button className="btn btn-primary ml-2" onClick={() => this.sayHello("Khải")}>
          Say hello 2
        </button>
      </div>
    );
  }
}

// Trong onClick không có dấu gọi hàm, nếu không sẽ thực thi hàm từ lúc bắt đầu
// Anonymous function
