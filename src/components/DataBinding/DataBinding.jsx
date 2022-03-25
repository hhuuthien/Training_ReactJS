import React, { Component } from "react";

export default class DataBinding extends Component {
  // thuộc tính
  product = {
    id: 1,
    name: "Samsung",
    price: 1000,
    img: "https://images.samsung.com/levant/smartphones/galaxy-s22-ultra/buy/S22_Ultra_ProductKV_Burgundy_MO.jpg",
  };

  renderInfo = () => {
    return "Samsung Galaxy S22 Ultra";
  };

  renderCard = () => {
    return (
      <div className="card w-25">
        <img src={this.product.img} alt="" />
        <p className="text-center">{this.product.name}</p>
        <p className="text-center">{this.renderInfo()}</p>
      </div>
    );
  };

  render() {
    // let title = "Cybersoft";
    return <div className="container">{this.renderCard()}</div>;
  }
}
