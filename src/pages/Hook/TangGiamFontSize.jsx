import React, { useState } from "react";

export default function TangGiamFontSize(props) {
  const [fontSize, setFontSize] = useState(15);
  const [color, setColor] = useState("#000000");

  return (
    <div className=" container p-5">
      <h3>Tăng giảm font-size</h3>
      <button
        className="btn btn-success mt-3"
        onClick={() => {
          setFontSize(fontSize + 1);
        }}
      >
        <span className="h4">Tăng</span>
      </button>
      <button
        className="btn btn-success ml-3 mt-3 "
        onClick={() => {
          setFontSize(fontSize - 1);
        }}
      >
        <span className="h4">Giảm</span>
      </button>
      <button
        className="btn btn-success ml-3 mt-3 "
        onClick={() => {
          let color1 = Math.floor(Math.random() * 10);
          let color2 = Math.floor(Math.random() * 10);
          let color3 = Math.floor(Math.random() * 10);
          let color4 = Math.floor(Math.random() * 10);
          let color5 = Math.floor(Math.random() * 10);
          let color6 = Math.floor(Math.random() * 10);
          setColor("#" + color1 + color2 + color3 + color4 + color5 + color6);
        }}
      >
        <span className="h4">Random color</span>
      </button>

      <p style={{ fontSize: fontSize, color: color }} className="mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maxime ipsum iste eveniet voluptate in accusamus voluptatibus repudiandae fugiat, id ratione, est officiis
        expedita! Beatae ut possimus officia ipsam nemo! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla earum blanditiis adipisci expedita qui quisquam magnam
        atque alias, quaerat voluptate quidem obcaecati! Ullam consequatur unde porro quibusdam. Esse vero itaque nesciunt eius. Debitis beatae neque qui sequi, unde doloribus
        laudantium quasi harum sit rem aliquid minima perspiciatis. Repellendus nulla id est deleniti quasi voluptatum quod reiciendis molestias sequi ea illum sint, eos ipsa
        delectus saepe vitae veritatis impedit vel commodi quisquam iste dolore praesentium! Debitis placeat, aliquam veniam iure dicta quas perspiciatis ea non laudantium iste in
        inventore voluptatum voluptatem nisi, laboriosam explicabo sint! Voluptas tempore nam praesentium quae consequuntur?
      </p>
    </div>
  );
}
