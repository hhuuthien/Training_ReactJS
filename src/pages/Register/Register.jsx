import React, { Component } from "react";
import { Prompt } from "react-router-dom";

export default class Register extends Component {
  state = {
    status: true,
  };

  handleSubmit() {
    this.setState({
      status: false,
    });
  }

  render() {
    return (
      <div>
        <h4 className="p-5">Register</h4>

        <div className="form-group container">
          <p>Bài viết</p>
          <textarea type="text" className="form-control" />
          <button
            className="btn btn-primary mt-2"
            onClick={() => {
              this.handleSubmit();
            }}
          >
            Submit
          </button>
        </div>

        <Prompt when={this.state.status} message={(location) => "Bạn có muốn rời khỏi trang?"} />
      </div>
    );
  }
}
