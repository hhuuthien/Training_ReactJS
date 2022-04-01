import React, { Component } from "react";
import Phone from "./Phone";

export default class BaiTapXemChiTiet extends Component {
  arrayPhone = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    detailProduct: this.arrayPhone[0],
  };

  showInfo = (phoneClicked) => {
    this.setState({
      detailProduct: phoneClicked,
    });
  };

  renderPhone() {
    return this.arrayPhone.map((phone, index) => {
      return <Phone phone={phone} key={index} showInfo={this.showInfo} />;
    });
  }

  renderDetailPhone() {
    let { tenSP, hinhAnh, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom } = this.state.detailProduct;

    return (
      <div className="row mt-5">
        <div className="col-4 text-center">
          <h3>{tenSP}</h3>
          <img src={hinhAnh} alt="" className="w-100" />
        </div>
        <div className="col-8">
          <h3>Thông số kỹ thuật</h3>
          <ul id="thongSoKyThuat">
            <li>
              <span>Màn hình</span>
              <span>{manHinh}</span>
            </li>
            <li>
              <span>Hệ điều hành</span>
              <span>{heDieuHanh}</span>
            </li>
            <li>
              <span>Camera trước</span>
              <span>{cameraTruoc}</span>
            </li>
            <li>
              <span>Camera sau</span>
              <span>{cameraSau}</span>
            </li>
            <li>
              <span>RAM</span>
              <span>{ram}</span>
            </li>
            <li>
              <span>ROM</span>
              <span>{rom}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container p-5">
        <div className="row">{this.renderPhone()}</div>

        {this.renderDetailPhone()}
      </div>
    );
  }
}

//  Các bước xử lý:
//     + Dàn layout, chia component
//     + Binding dữ liệu tĩnh
//     + Xác định state
//     + Binding state lên giao diện
//     + Xử lý thay đổi state qua hàm setState
