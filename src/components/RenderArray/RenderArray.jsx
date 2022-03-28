import React, { Component } from "react";

export default class RenderArray extends Component {
  arrayProduct = [
    { id: 1, name: "Black Car", img: "./img/products/black-car.jpg", price: 5000 },
    { id: 2, name: "Red Car", img: "./img/products/red-car.jpg", price: 6000 },
    { id: 3, name: "Silver Car", img: "./img/products/silver-car.jpg", price: 4000 },
    { id: 4, name: "Steel Car", img: "./img/products/steel-car.jpg", price: 3000 },
  ];

  renderCard = () => {
    let result = this.arrayProduct.map((p, index) => {
      return (
        <div className="col-3" key={index}>
          <div className="card">
            <div className="card-header">
              <img src={p.img} className="w-100" />
            </div>
            <div className="card-body">{p.name}</div>
          </div>
        </div>
      );
    });

    return result;
  };

  renderProduct = () => {
    // let result = [];
    // for (let product of this.arrayProduct) {
    //   let tr = (
    //     <tr key={product.id}>
    //       <td>{product.id}</td>
    //       <td>{product.name}</td>
    //       <td>
    //         <img src={product.img} alt="" width="150" height="100" />
    //       </td>
    //       <td>{product.price}</td>
    //       <td></td>
    //     </tr>
    //   );
    //   result.push(tr);
    // }

    let result = this.arrayProduct.map((p, index) => {
      return (
        <tr key={p.id}>
          <td>{p.id}</td>
          <td>{p.name}</td>
          <td>
            <img src={p.img} alt="" width="150" height="100" />
          </td>
          <td>{p.price}</td>
          <td></td>
        </tr>
      );
    });
    return result;
  };

  render() {
    return (
      <div className="container p-5">
        <h3>List of cars</h3>
        {/* <table className="table mt-3">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table> */}
        <div className="row mt-3">{this.renderCard()}</div>
      </div>
    );
  }
}
