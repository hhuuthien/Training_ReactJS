import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Search extends Component {
  render() {
    return (
      <div>
        <h4 className="p-5">Search</h4>
        <NavLink to={"/search?abc=123"} className="pl-5 pr-5">
          Link search
        </NavLink>
        <div className="form-group p-5">
          <input type="text" className="form-control" id="keyword" />
          <button
            className="btn btn-primary mt-2"
            onClick={() => {
              let keyword = document.querySelector("#keyword").value;
              this.props.history.push(`/search?k=${keyword}`);
            }}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
