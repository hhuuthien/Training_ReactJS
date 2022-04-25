import React, { useState } from "react";
import TangGiamFontSize from "../Hook/TangGiamFontSize.jsx";

export default function DemoUseState(props) {
  const [number, setNumber] = useState(1);
  const [image, setImage] = useState("https://i.pravatar.cc?u=1");

  return (
    <div>
      {/* <div className="container p-5">
        <div className="display-4 mb-5">Number: {number}</div>
        <button
          className="btn btn-success"
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          <span className="h3">Tăng</span>
        </button>
        <button
          className="btn btn-success ml-2"
          onClick={() => {
            setNumber(number - 1);
          }}
        >
          <span className="h3">Giảm</span>
        </button>
      </div> */}

      {/* <div className="container p-5">
        <div className="display-4 mb-5">Tinder</div>
        <img src={image} alt="..." width={"25%"} /> <br />
        <button
          className="btn btn-success mt-5"
          onClick={() => {
            let randomNumber = Math.floor(Math.random() * 100);
            setImage("https://i.pravatar.cc?u=" + randomNumber);
          }}
        >
          <span className="h3">Random</span>
        </button>
      </div> */}

      <TangGiamFontSize />
    </div>
  );
}
