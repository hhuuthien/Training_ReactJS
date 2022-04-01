import React, { Component } from "react";

export default class CardProduct extends Component {
  render() {
    let { product } = this.props;

    return (
      <div className="card">
        <img src={product.img} className="w-100" />
        <div className="card-body">
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button className="btn btn-primary">Đặt mua</button>
        </div>
      </div>
    );
  }
}

// this.props là thuộc tính có sẵn của component để nhận giá trị từ component cha truyền vào
// this.props không thể gán lại giá trị
