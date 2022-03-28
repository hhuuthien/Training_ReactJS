import React, { Component } from "react";

export default class ChonXe extends Component {
  state = {
    imageSrc: "./img/products/black-car.jpg",
  };

  changeCar = (car) => {
    this.setState({
      imageSrc: `./img/products/${car}.jpg`,
    });
  };

  render() {
    return (
      <div className="container text-center p-5">
        <img src={this.state.imageSrc} alt="..." className="w-100 mb-2 " />
        <button className="mr-2 btn text-white" style={{ backgroundColor: "black" }} onClick={() => this.changeCar("black-car")}>
          Black
        </button>
        <button className="mr-2 btn text-white" style={{ backgroundColor: "red" }} onClick={() => this.changeCar("red-car")}>
          Red
        </button>
        <button className="mr-2 btn" style={{ backgroundColor: "silver" }} onClick={() => this.changeCar("silver-car")}>
          Silver
        </button>
        <button className="mr-2 btn text-white" style={{ backgroundColor: "grey" }} onClick={() => this.changeCar("steel-car")}>
          Steel
        </button>
      </div>
    );
  }
}
