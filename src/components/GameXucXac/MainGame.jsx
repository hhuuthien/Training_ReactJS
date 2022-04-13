import React, { Component } from "react";
import { connect } from "react-redux";
import KetQua from "./KetQua.jsx";
import XucXac from "./XucXac.jsx";
import style from "../../assets/style/style.module.css";
// import "animate.css";

class MainGame extends Component {
  render() {
    return (
      <div className={`${style["main-game"]}`}>
        {/* <div className="animate__animated animate__tada animate__infinite infinite"> */}
        <h3 className="text-center display-4 pt-3 text-white">Xúc xắc</h3>
        {/* </div> */}
        <XucXac />
        <KetQua />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainGame);

/*
  Có hai cách để đưa action lên redux:
    + Sử dụng this.props.dispatch
    + Định nghĩa hàm mapDispatchToProps
*/
