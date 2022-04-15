import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    return (
      <div>
        <h4 className="p-5">Detail</h4>
        <img src={`https://picsum.photos/id/${this.props.match.params.picID}/300/200`} alt="..." className="pl-5 pr-5" />
      </div>
    );
  }
}
