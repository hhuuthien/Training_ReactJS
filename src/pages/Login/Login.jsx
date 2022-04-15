import React, { Component } from "react";

export default class Login extends Component {
  // Được load ra từ thẻ Route nên có props history
  handleLogin() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    if (username === "cybersoft" && password === "123") {
      // alert("Đăng nhập thành công");
      // this.props.history.push("/profile");
      this.props.history.replace("/profile");

      localStorage.setItem("username", username);
    } else {
      alert("Tài khoản không đúng");
    }
  }

  handleBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <h4 className="p-5">Login</h4>
        <div className="container">
          <div className="form-group pl-5 pr-5">
            <p>Username</p>
            <input type="email" className="form-control" placeholder="Username" id="username" />
          </div>
          <div className="form-group pl-5 pr-5">
            <p>Password</p>
            <input type="password" className="form-control" placeholder="Password" id="password" />
          </div>
          <div className="form-group pl-5 pr-5">
            <button
              className="btn btn-primary"
              onClick={() => {
                this.handleLogin();
              }}
            >
              Đăng nhập
            </button>
            <button
              className="btn btn-secondary ml-2"
              onClick={() => {
                this.handleBack();
              }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}
