import React, { Component } from "react";
import { connect } from "react-redux";

class TableNguoiDung extends Component {
  renderNguoiDung() {
    return this.props.mangNguoiDung.map((nguoiDung, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{nguoiDung.taiKhoan}</td>
          <td>{nguoiDung.hoTen}</td>
          <td>
            <img src={nguoiDung.hinhAnh} alt="..." />
          </td>
          <td>{nguoiDung.email}</td>
          <td>{nguoiDung.soDienThoai}</td>
          <td>{nguoiDung.loaiNguoiDung}</td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => {
                const action = {
                  type: "SUA_NGUOI_DUNG",
                  nguoiDung: nguoiDung,
                };
                this.props.dispatch(action);
              }}
            >
              Sửa
            </button>
            <button
              className="btn btn-danger ml-2"
              onClick={() => {
                const action = {
                  type: "XOA_NGUOI_DUNG",
                  taiKhoan: nguoiDung.taiKhoan,
                };
                this.props.dispatch(action);
              }}
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table className="table mt-3">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tài khoản</th>
            <th>Họ tên</th>
            <th>Ảnh đại diện</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Loại người dùng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{this.renderNguoiDung()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    mangNguoiDung: rootReducer.quanLyNguoiDungReducer.mangNguoiDung,
  };
};

export default connect(mapStateToProps)(TableNguoiDung);
