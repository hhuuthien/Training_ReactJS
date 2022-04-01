import React, { Component } from "react";
import CardProduct from "./CardProduct.jsx";

class DemoProps extends Component {
  product1 = {
    id: 1,
    name: "Samsung",
    price: 1200,
    img: "https://fptshop.com.vn/Uploads/Originals/2022/1/4/637768861737691256_samsung-galaxy-s21-fe-xanh-dd.jpg",
  };

  product2 = {
    id: 2,
    name: "Iphone",
    price: 1500,
    img: "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
  };

  render() {
    return (
      <div className="container p-5">
        <div className="d-flex">
          <div className="w-25">
            <CardProduct product={this.product1} />
          </div>
          <div className="w-25 ml-2">
            <CardProduct product={this.product2} />
          </div>
        </div>
      </div>
    );
  }
}

export default DemoProps;
