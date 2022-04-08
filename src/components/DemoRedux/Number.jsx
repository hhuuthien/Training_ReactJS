import React, { Component } from "react";
import { connect } from "react-redux";

class Number extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="text-center mt-5">
        <div style={{ fontSize: 150 }}>{this.props.number}</div>
        <br />
        <button
          className="btn btn-primary"
          onClick={() => {
            this.props.tangGiamSoLuong(1);
          }}
        >
          <h3>Tăng</h3>
        </button>
        <button
          className="btn btn-primary ml-2"
          onClick={() => {
            this.props.tangGiamSoLuong(-1);
          }}
        >
          <h3>Giảm</h3>
        </button>
      </div>
    );
  }
}

// Lấy dữ liệu từ redux về
const mapStateToProps = (rootReducer) => {
  // Tạo ra giá trị cho props
  return {
    number: rootReducer.stateNumber,
  };
};

// Thay đổi dữ liệu trên redux
const mapDispatchToProps = (dispatch) => {
  // Tạo ra hàm cho props
  return {
    tangGiamSoLuong: (soLuong) => {
      console.log(soLuong);

      // Để gửi dữ liệu lên redux, tạo object action
      const action = {
        type: "TANG_GIAM_SO_LUONG",
        soLuong: soLuong,
      };

      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Number);
