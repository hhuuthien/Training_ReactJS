const DEFAULT_STATE = [];

export const gioHangReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "THEM_VAO_GIO_HANG": {
      let sanPhamTrongGioHang = state.find((sp) => sp.maSP === action.sanPhamGH.maSP);

      if (sanPhamTrongGioHang) {
        sanPhamTrongGioHang.soLuong++;
      } else {
        state.push(action.sanPhamGH);
      }

      // return state;
      return [...state];
    }
    case "XOA_KHOI_GIO_HANG": {
      let gioHangMoi = state.filter((sp) => {
        return sp.maSP !== action.maSanPhamXoa;
      });
      return [...gioHangMoi];
    }
    case "TANG_GIAM_SO_LUONG": {
      let gioHang = [...state];

      let sanPham = gioHang.find((sp) => sp.maSP === action.maSP);

      if (sanPham) {
        if (sanPham.soLuong === 1 && action.soLuong === -1) {
          console.log("Không được");
        } else {
          sanPham.soLuong += action.soLuong;
        }
      }

      return gioHang;
    }
    default:
      return state;
  }
};
