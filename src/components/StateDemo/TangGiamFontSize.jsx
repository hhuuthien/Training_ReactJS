import React, { Component } from "react";

export default class TangGiamFontSize extends Component {
  state = {
    fSize: 15,
  };

  changeFontSize = (newFontSize) => {
    this.setState({
      fSize: this.state.fSize + newFontSize,
    });
  };

  render() {
    return (
      <div className="p-5">
        <h3>Bài tập tăng giảm font-size</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            this.changeFontSize(5);
          }}
        >
          Tăng
        </button>
        <button
          className="btn btn-success ml-2"
          onClick={() => {
            this.changeFontSize(-5);
          }}
        >
          Giảm
        </button>
        <p style={{ fontSize: this.state.fSize }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maxime ipsum iste eveniet voluptate in accusamus voluptatibus repudiandae fugiat, id ratione, est officiis
          expedita! Beatae ut possimus officia ipsam nemo! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla earum blanditiis adipisci expedita qui quisquam magnam
          atque alias, quaerat voluptate quidem obcaecati! Ullam consequatur unde porro quibusdam. Esse vero itaque nesciunt eius. Debitis beatae neque qui sequi, unde doloribus
          laudantium quasi harum sit rem aliquid minima perspiciatis. Repellendus nulla id est deleniti quasi voluptatum quod reiciendis molestias sequi ea illum sint, eos ipsa
          delectus saepe vitae veritatis impedit vel commodi quisquam iste dolore praesentium! Debitis placeat, aliquam veniam iure dicta quas perspiciatis ea non laudantium iste
          in inventore voluptatum voluptatem nisi, laboriosam explicabo sint! Voluptas tempore nam praesentium quae consequuntur?
        </p>
      </div>
    );
  }
}

// Các bước xử lý:
//     + Dàn layout, chia component
//     + Binding dữ liệu tĩnh
//     + Xác định state
//     + Binding state lên giao diện
//     + Xử lý thay đổi state qua hàm setState
