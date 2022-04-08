import React, { Component } from "react";
import { connect } from "react-redux";

class ChonXeRedux extends Component {
  render() {
    return (
      <div className="container text-center p-5">
        <img src={this.props.img} alt="..." className="w-100 mb-2 " />
        <button
          className="mr-2 btn text-white"
          style={{ backgroundColor: "black" }}
          onClick={() => {
            this.props.changeColor("black");
          }}
        >
          Black
        </button>
        <button
          className="mr-2 btn text-white"
          style={{ backgroundColor: "red" }}
          onClick={() => {
            this.props.changeColor("red");
          }}
        >
          Red
        </button>
        <button
          className="mr-2 btn"
          style={{ backgroundColor: "silver" }}
          onClick={() => {
            this.props.changeColor("silver");
          }}
        >
          Silver
        </button>
        <button
          className="mr-2 btn text-white"
          style={{ backgroundColor: "grey" }}
          onClick={() => {
            this.props.changeColor("steel");
          }}
        >
          Steel
        </button>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    img: rootReducer.stateImage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeColor: (color) => {
      const action = {
        type: "CHANGE_COLOR",
        color,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChonXeRedux);
