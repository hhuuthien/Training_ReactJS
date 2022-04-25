import React, { useEffect, useState } from "react";

const arrDiaDiem = [
  {
    id: "HCM",
    name: "Thành phố Hồ Chí Minh",
    arrQuanHuyen: [
      { id: "01", name: "Quận 1" },
      { id: "02", name: "Quận 2" },
      { id: "03", name: "Quận 3" },
    ],
  },
  {
    id: "HN",
    name: "Hà Nội",
    arrQuanHuyen: [
      { id: "04", name: "Quận Hai Bà Trưng" },
      { id: "05", name: "Quận Hoàn Kiếm" },
      { id: "06", name: "Quận Ba Đình" },
    ],
  },
  {
    id: "DN",
    name: "Đà Nẵng",
    arrQuanHuyen: [
      { id: "07", name: "Quận Thanh Khê" },
      { id: "08", name: "Quận Sơn Trà" },
    ],
  },
];

export default function DemoUseEffect(props) {
  //   const [number, setNumber] = useState(1);
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState([]);

  //   useEffect(() => {
  //     // Hàm chạy sau khi giao diện render và sau khi state update
  //     // Tương đương componentDidMount và componentDidUpdate life-cycle
  //   });

  //   useEffect(() => {
  //     // Hàm chỉ chạy một lần sau khi giao diện render
  //     // Thường dùng để call API hoặc chèn thư viện
  //     // Tương đương componentDidMount life-cycle
  //   }, []);

  useEffect(() => {
    // Hàm chạy khi tham số thay đổi
    // Tương đương componentDidUpdate
    if (city !== "") {
      let thanhPho = arrDiaDiem.find((tp) => tp.id === city);
      setDistrict(thanhPho.arrQuanHuyen);
    }
  }, [city]);

  useEffect(() => {
    return () => {
      // Hàm chạy trước khi component mất khỏi giao diện
      // Thường dùng để clear các services chạy ngầm
      // Tương đương componentWillUnmount
    };
  });

  const renderThanhPho = () => {
    return arrDiaDiem.map((city, index) => {
      return (
        <option value={city.id} key={index}>
          {city.name}
        </option>
      );
    });
  };

  const renderQuanHuyen = () => {
    if (district.length == 0) {
      return <option>Hãy chọn thành phố</option>;
    } else {
      return district.map((d, index) => {
        return (
          <option value={d.id} key={index}>
            {d.name}
          </option>
        );
      });
    }
  };

  return (
    <div>
      {/* <div className="container p-5">
        <div className="display-4 mb-5">Demo Use Effect</div>
        <div className="h3 mb-5">Number: {number}</div>
        <button
          className="btn btn-success"
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          <span className="h5">Tăng</span>
        </button>
        <button
          className="btn btn-success ml-2"
          onClick={() => {
            setNumber(number - 1);
          }}
        >
          <span className="h5">Giảm</span>
        </button>
      </div> */}

      <div className="container p-5">
        <div className="form-group">
          <p>Chọn thành phố</p>
          <select
            className="form-control w-50"
            onChange={(e) => {
              let { value } = e.target;
              setCity(value);
            }}
          >
            <option value="">Chọn thành phố</option>
            {renderThanhPho()}
          </select>
        </div>
        <div className="form-group">
          <p>Chọn quận huyện</p>
          <select className="form-control w-50">{renderQuanHuyen()}</select>
        </div>
      </div>
    </div>
  );
}

/*
    useEffect:
        + useEffect(() => {}): chạy lần đầu và khi bất kỳ state nào thay đổi làm giao diện update
        + useEffect(() => {}, []): chỉ chạy lần đầu
        + useEffect(() => {}, [state]): chạy lần đầu và khi state được chỉ định thay đổi (shallow compare)
        + Hàm return () => {} trong useEffect: chỉ chạy khi component mất khỏi giao diện
*/
