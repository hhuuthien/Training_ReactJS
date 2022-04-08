import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    const { phone } = this.props;
    return (
      <div className="card">
        <img src={phone.hinhAnh} style={{ height: 300 }} />
        <div className="card-body">
          <b>{phone.tenSP}</b>
          <p>{phone.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.props.themVaoGioHang(phone);
            }}
          >
            <i className="fa-solid fa-cart-plus mr-2"></i>
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themVaoGioHang: (sanPham) => {
      let sanPhamGH = { ...sanPham, soLuong: 1 };
      dispatch({
        type: "THEM_VAO_GIO_HANG",
        sanPhamGH,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPhamRedux);
