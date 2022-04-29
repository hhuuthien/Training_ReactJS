import React from "react";
import { useSelector, useDispatch } from "react-redux";

// useSelector: kết nối đến redux store và lấy state về
// useDispatch: dispatch action lên redux store

export default function TangGiamSoLuongHook() {
  const stateNumber = useSelector((root) => root.stateNumber);
  const dispatch = useDispatch();
  const tangGiamSoLuong = (soLuong) => {
    const action = {
      type: "TANG_GIAM_SO_LUONG",
      soLuong,
    };
    dispatch(action);
  };

  return (
    <div className="container p-5">
      <div className="display-4 mb-2">Count: {stateNumber}</div>
      <button
        className="btn btn-primary"
        onClick={() => {
          tangGiamSoLuong(-1);
        }}
      >
        Giảm
      </button>
      <button
        className="btn btn-primary ml-2"
        onClick={() => {
          tangGiamSoLuong(1);
        }}
      >
        Tăng
      </button>
    </div>
  );
}
