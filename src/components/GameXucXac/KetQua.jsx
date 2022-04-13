import React, { Component } from "react";
import { connect } from "react-redux";

export class KetQua extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="display-4 text-center text-white">
          <div>
            <p>
              Bạn chọn: <span className="text-danger">{this.props.luaChon ? "TÀI" : "XỈU"}</span>
            </p>
          </div>
          <div>
            <p>
              Số bàn thắng: <span className="text-success">{this.props.soBanThang}</span>
            </p>
          </div>
          <div>
            <p>
              Tổng số bàn chơi: <span className="text-primary">{this.props.soBanChoi}</span>
            </p>
          </div>
          <button
            className="btn btn-secondary mt-5"
            onClick={() => {
              this.props.dispatch({
                type: "PLAY_GAME",
              });
            }}
          >
            <div className="display-4 p-3 text-white">PLAY GAME</div>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    luaChon: state.gameXucXacReducer.luaChon,
    soBanThang: state.gameXucXacReducer.soBanThang,
    soBanChoi: state.gameXucXacReducer.soBanChoi,
  };
};

export default connect(mapStateToProps)(KetQua);
