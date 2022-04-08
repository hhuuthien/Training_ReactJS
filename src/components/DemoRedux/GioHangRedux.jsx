import React, { Component } from "react";
import { connect } from "react-redux";

class GioHangRedux extends Component {
  renderGioHang() {
    return this.props.gioHang.map((sanPham, index) => {
      return (
        <tr key={index}>
          <td>{sanPham.maSP}</td>
          <td>{sanPham.tenSP}</td>
          <td>
            <img src={sanPham.hinhAnh} alt="..." width={100} height={100} />
          </td>
          <td>{sanPham.soLuong}</td>
          <td>{sanPham.giaBan.toLocaleString()}</td>
          <td>{(sanPham.soLuong * sanPham.giaBan).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaKhoiGioHang(sanPham.maSP);
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
      <div className="mt-5">
        <div className="text-right">
          <span>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="ml-2">Giỏ hàng ({this.props.gioHang.length} sản phẩm)</span>
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

const mapStateToProps = (rootReducer) => {
  return {
    gioHang: rootReducer.gioHangReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaKhoiGioHang: (maSanPhamXoa) => {
      const action = {
        type: "XOA_KHOI_GIO_HANG",
        maSanPhamXoa,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
