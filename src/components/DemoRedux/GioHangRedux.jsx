import React, { Component } from "react";
import { connect } from "react-redux";

class GioHangRedux extends Component {
  tinhTongSoLuong() {
    // Tiki style
    // return this.props.gioHang.length;

    // Lazada style
    return this.props.gioHang.reduce((soLuong, sanPham) => {
      return (soLuong += sanPham.soLuong);
    }, 0);
  }

  tinhTongTien() {
    return this.props.gioHang.reduce((total, sanPham) => {
      return (total += sanPham.giaBan * sanPham.soLuong);
    }, 0);
  }

  renderGioHang() {
    return this.props.gioHang.map((sanPham, index) => {
      return (
        <tr key={index}>
          <td>{sanPham.maSP}</td>
          <td>{sanPham.tenSP}</td>
          <td>
            <img src={sanPham.hinhAnh} alt="..." width={100} height={100} />
          </td>
          <td>
            <button
              className="btn btn-primary mr-2"
              onClick={() => {
                this.props.tangGiamSoLuong(sanPham.maSP, -1);
              }}
            >
              -
            </button>
            {sanPham.soLuong}
            <button
              className="btn btn-primary ml-2"
              onClick={() => {
                this.props.tangGiamSoLuong(sanPham.maSP, 1);
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
            <span className="ml-2">
              Giỏ hàng ({this.tinhTongSoLuong()} sản phẩm - {this.tinhTongTien().toLocaleString()} đ)
            </span>
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
    tangGiamSoLuong: (maSP, soLuong) => {
      const action = {
        type: "TANG_GIAM_SO_LUONG",
        maSP,
        soLuong,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
