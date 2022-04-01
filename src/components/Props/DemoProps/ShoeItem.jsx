import React, { Component } from "react";

export default class ShoeItem extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="card m-2">
        <img src={product.image} className="w-100" />
        <div className="card-body bg-dark text-white">
          <p>{product.name}</p>
          <p>{product.price}$</p>
          <div className="d-flex">
            <button className="btn btn-primary">
              <i className="fa-solid fa-cart-plus mr-2" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
