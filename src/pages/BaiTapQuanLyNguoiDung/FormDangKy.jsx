import React, { Component } from "react";
import { connect } from "react-redux";

class FormDangKy extends Component {
  state = {
    value: {
      taiKhoan: "",
      hoTen: "",
      email: "",
      matKhau: "",
      soDienThoai: "",
      loaiNguoiDung: "NguoiDung",
    },
    error: {
      taiKhoan: "",
      hoTen: "",
      email: "",
      matKhau: "",
      soDienThoai: "",
    },
  };

  handleChange = (event) => {
    let { id, value } = event.target;

    let dataType = event.target.getAttribute("data-type");

    let newValue = { ...this.state.value };
    let newError = { ...this.state.error };

    newValue[id] = value;

    let messError = "";
    if (value === "") {
      messError = id + " không được bỏ trống!";
    }

    if (dataType === "email") {
      let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!regex.test(value)) {
        messError = "Email không đúng định dạng";
      }
    }

    newError[id] = messError;

    this.setState({
      value: newValue,
      error: newError,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    //Kiểm tra lỗi trước khi submit
    let { value, error } = this.state;
    for (let key in error) {
      if (error[key] !== "") {
        alert(key + " chưa hợp lệ");
        return;
      }
    }
    for (let key in value) {
      if (value[key] === "") {
        alert(key + " chưa hợp lệ");
        return;
      }
    }

    const action = {
      type: "SUBMIT_DATA",
      nguoiDung: this.state.value,
    };

    this.props.dispatch(action);
  };

  render() {
    return (
      <form className="mt-5" onSubmit={this.handleSubmit}>
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h5>Thông tin người dùng</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>Tài khoản</p>
                  <input
                    type="text"
                    className="form-control"
                    id="taiKhoan"
                    name="taiKhoan"
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                  />
                  <p className="text-danger">{this.state.error.taiKhoan}</p>
                </div>
                <div className="form-group">
                  <p>Họ tên</p>
                  <input
                    type="text"
                    className="form-control"
                    id="hoTen"
                    name="hoTen"
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                  />
                  <p className="text-danger">{this.state.error.hoTen}</p>
                </div>
                <div className="form-group">
                  <p>Email</p>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    data-type="email"
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                  />
                  <p className="text-danger">{this.state.error.email}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>Mật khẩu</p>
                  <input
                    type="password"
                    className="form-control"
                    id="matKhau"
                    name="matKhau"
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                  />
                  <p className="text-danger">{this.state.error.matKhau}</p>
                </div>
                <div className="form-group">
                  <p>Số điện thoại</p>
                  <input
                    type="text"
                    className="form-control"
                    id="soDienThoai"
                    name="soDienThoai"
                    data-type="phone"
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                  />
                  <p className="text-danger">{this.state.error.soDienThoai}</p>
                </div>
                <div className="form-group">
                  <p>Loại người dùng</p>
                  <select
                    className="form-control"
                    id="loaiNguoiDung"
                    name="loaiNguoiDung"
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                  >
                    <option value="NguoiDung">Người dùng</option>
                    <option value="QuanTri">Quản trị viên</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-right">
            <button type="submit" className="btn btn-success">
              Đăng ký
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {};
};

export default connect(mapStateToProps)(FormDangKy);
