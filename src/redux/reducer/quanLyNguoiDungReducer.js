const DEFAULT_STATE = {
  mangNguoiDung: [
    {
      taiKhoan: "thien123",
      hoTen: "Huỳnh Hữu Thiện",
      matKhau: "123123",
      hinhAnh: "https://i.pravatar.cc/50",
      loaiNguoiDung: "NguoiDung",
      email: "hhuuthien@gmail.com",
      soDienThoai: "0376601242",
    },
    {
      taiKhoan: "thien456",
      hoTen: "Cybersoft",
      matKhau: "123123",
      hinhAnh: "https://i.pravatar.cc/50",
      loaiNguoiDung: "NguoiDung",
      email: "hhuuthien@gmail.com",
      soDienThoai: "0376601242",
    },
  ],
  nguoiDungSua: {
    taiKhoan: "thien123",
    hoTen: "Huỳnh Hữu Thiện",
    matKhau: "123123",
    hinhAnh: "https://i.pravatar.cc/50",
    loaiNguoiDung: "NguoiDung",
    email: "hhuuthien@gmail.com",
    soDienThoai: "0376601242",
  },
};

export const quanLyNguoiDungReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "SUBMIT_DATA":
      state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
      return { ...state };
    case "XOA_NGUOI_DUNG":
      state.mangNguoiDung = [
        ...state.mangNguoiDung.filter((nguoiDung) => {
          return nguoiDung.taiKhoan !== action.taiKhoan;
        }),
      ];
      return { ...state };
    case "SUA_NGUOI_DUNG":
      state.nguoiDungSua = action.nguoiDung;
      return { ...state };
    case "CAP_NHAT_THONG_TIN":
      let mangNguoiDung = [...state.mangNguoiDung];
      let ndungUpdate = mangNguoiDung.find((user) => user.taiKhoan === action.nguoiDungCapNhat.taiKhoan);
      if (ndungUpdate) {
        console.log(ndungUpdate);
        for (let key in ndungUpdate) {
          ndungUpdate[key] = action.nguoiDungCapNhat[key];
        }
      }
      state.mangNguoiDung = mangNguoiDung;
      return { ...state };
    default:
      return state;
  }
};
