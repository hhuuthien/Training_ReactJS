import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Profile extends Component {
  render() {
    if (!localStorage.getItem("username")) {
      alert("Bạn chưa đăng nhập");
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <h4 className="p-5">Profile</h4>
      </div>
    );
  }
}
