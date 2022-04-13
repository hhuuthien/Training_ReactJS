import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderKetQua() {
    let tongDiem = 0;
    for (let x of this.props.mangXucXac) {
      tongDiem += x.diem;
    }

    let ketQua = tongDiem > 11 ? "Tài" : "Xỉu";
    return "Điểm: " + tongDiem + " - " + ketQua;
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-4">
            <button
              className="btn btn-secondary"
              onClick={() => {
                const action = {
                  type: "DAT_CUOC",
                  luaChon: true,
                };
                this.props.dispatch(action);
              }}
            >
              <div className="display-4 p-3 text-white">TÀI</div>
            </button>
          </div>
          <div className="col-4">
            {this.props.mangXucXac.map((xucxac, index) => {
              return <img src={xucxac.hinhAnh} width={110} height={100} alt="..." key={index} style={{ padding: 10 }} />;
            })}
          </div>
          <div className="col-4">
            <button
              className="btn btn-secondary"
              onClick={() => {
                const action = {
                  type: "DAT_CUOC",
                  luaChon: false,
                };
                this.props.dispatch(action);
              }}
            >
              <div className="display-4 p-3 text-white">XỈU</div>
            </button>
          </div>
        </div>
        <div className="row display-4 mt-3">
          <div className="col-12 text-center text-white">{this.renderKetQua()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    mangXucXac: rootReducer.gameXucXacReducer.mangXucXac,
  };
};

export default connect(mapStateToProps)(XucXac);
