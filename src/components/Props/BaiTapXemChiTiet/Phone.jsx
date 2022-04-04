import React, { Component } from "react";

export default class Phone extends Component {
  render() {
    let { phone } = this.props;
    return (
      <div className="card ml-3">
        <img src={phone.hinhAnh} style={{ height: 250 }} />
        <div className="card-body">
          <p>
            <b>{phone.tenSP}</b>
          </p>
          <p>{phone.giaBan.toLocaleString()}</p>
          <button className="btn btn-primary" onClick={() => this.props.showInfo(phone)}>
            Xem chi tiết
          </button>
          <br />
          <button
            className="btn btn-success mt-2"
            onClick={() => {
              this.props.addToCart(phone);
            }}
          >
            <i className="fa-solid fa-cart-plus mr-2"></i>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
