import React, { Component } from "react";
// Cách import này ảnh hưởng toàn ứng dụng
// import "./style.css";

// Cách import module css
import style from "./style.module.css";

// Cách import css cho từng thẻ

export default class StyleComponent extends Component {
  render() {
    return (
      <div>
        <h3 className={style["text-red"]}>Style Component</h3>
        <h3 className={`p-5 ${style["text-red"]}`}>Style Component</h3>
        <p style={{ backgroundColor: "#000", color: "red", padding: "25px" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam odit exercitationem similique a provident minima eos molestias rerum? Vel numquam sunt tempora aspernatur
          omnis, nulla deleniti asperiores sed veniam ducimus!
        </p>
      </div>
    );
  }
}
