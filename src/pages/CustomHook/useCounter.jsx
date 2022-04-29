// Hook này cung cấp state count và hai hàm tăng giảm giá trị count

import { useState } from "react";

export default function useCounter(initValue = 0) {
  const [number, setNumber] = useState(initValue);

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    setNumber(number - 1);
  };

  return { number, increase, decrease };
}
