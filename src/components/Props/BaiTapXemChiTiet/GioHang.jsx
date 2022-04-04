import React, { Component } from "react";

export default class GioHang extends Component {
  renderGioHang() {
    const { gioHang } = this.props;
    return gioHang.map((sanPham, index) => {
      return (
        <tr key={index}>
          <td>{sanPham.maSP}</td>
          <td>{sanPham.tenSP}</td>
          <td>
            <img src={sanPham.hinhAnh} alt="" width={100} height={100} />
          </td>
          <td>
            <button
              className="btn btn-primary mr-2"
              onClick={() => {
                this.props.thayDoiSoLuong(sanPham.maSP, -1);
              }}
            >
              -
            </button>
            {sanPham.soLuong}
            <button
              className="btn btn-primary ml-2"
              onClick={() => {
                this.props.thayDoiSoLuong(sanPham.maSP, 1);
              }}
            >
              +
            </button>
          </td>
          <td>{sanPham.giaBan.toLocaleString()}</td>
          <td>{(sanPham.soLuong * sanPham.giaBan).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.deleteFromCart(sanPham.maSP);
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
      <div>
        <div className="text-right">
          <span style={{ cursor: "pointer" }}>
            <i className="fa-solid fa-cart-shopping"></i>
            Giỏ hàng (0)
          </span>
        </div>

        <table className="table max-width">
          <thead>
            <tr>
              <td>Mã sản phẩm</td>
              <td>Tên sản phẩm</td>
              <td>Hình ảnh</td>
              <td>Số lượng</td>
              <td>Giá bán</td>
              <td>Thành tiền</td>
              <td></td>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      </div>
    );
  }
}
