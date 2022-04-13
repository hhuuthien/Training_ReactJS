const DEFAULT_STATE = {
  luaChon: true,
  soBanThang: 0,
  soBanChoi: 0,
  mangXucXac: [
    {
      hinhAnh: "./img/gameXucXac/1.png",
      diem: 1,
    },
    {
      hinhAnh: "./img/gameXucXac/2.png",
      diem: 2,
    },
    {
      hinhAnh: "./img/gameXucXac/3.png",
      diem: 3,
    },
  ],
};

export const gameXucXacReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.luaChon = action.luaChon;
      return { ...state };
    }
    case "PLAY_GAME": {
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        let xucXacNgauNhien = {
          hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`,
          diem: soNgauNhien,
        };
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      state.mangXucXac = mangXucXacNgauNhien;

      let tongDiem = 0;
      for (let x of mangXucXacNgauNhien) {
        tongDiem += x.diem;
      }

      // Xử lý thắng thua
      if ((state.luaChon === true && tongDiem > 11) || (state.luaChon === false && tongDiem <= 11)) {
        state.soBanThang++;
      }

      state.soBanChoi++;
      return { ...state };
    }
    default:
      return state;
  }
};
