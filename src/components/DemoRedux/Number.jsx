import React, { Component } from "react";
import { connect } from "react-redux";

class Number extends Component {
  render() {
    return (
      <div className="text-center mt-5">
        <div style={{ fontSize: 100 }}>{this.props.number}</div>
        <br />
        <button className="btn btn-primary">
          <h3>Tăng</h3>
        </button>
        <button className="btn btn-primary ml-2">
          <h3>Giảm</h3>
        </button>
      </div>
    );
  }
}

// Lấy dữ liệu từ redux về
const mapStateToProps = (rootReducer) => {
  return {
    number: rootReducer.stateNumber,
  };
};

// const mapDispatchToProps =

export default connect(mapStateToProps)(Number);
