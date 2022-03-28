import React, { Component } from "react";

export default class StateDemo extends Component {
  // state là thuộc tính có sẵn kế thừa từ rcc, dùng để chứa các giá trị thay đổi trên giao diện khi người dùng thao tác

  state = {
    // true: đã đăng nhập, false: chưa đăng nhập
    login: false,
  };

  username = "Cybersoft";

  doLogin = () => {
    // this.state.login = true; // KHÔNG được làm kiểu này

    let newState = {
      login: true,
    };

    // setState là phương thức có sẵn kế thừa từ rcc, dùng để thay đổi state và render lại giao diện
    // setState là phương thức bất đồng bộ
    // setState(state mới, hàm gọi sau khi setState xong)
    this.setState(newState, () => {
      console.log(this.state.login);
    });
  };

  renderLogin = () => {
    if (this.state.login) {
      return <div className="nav-item text-white">Hello, {this.username}</div>;
    }
    return (
      <button
        className="btn btn-info"
        type="button"
        onClick={() => {
          this.doLogin();
        }}
      >
        Đăng nhập
      </button>
    );
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Action 1
                </a>
                <a className="dropdown-item" href="#">
                  Action 2
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {/* {this.state.login ? <div className="nav-item text-white">Hello, {this.username}</div> : <button className="btn btn-info">Đăng nhập</button>} */}
            {this.renderLogin()}
          </form>
        </div>
      </nav>
    );
  }
}
